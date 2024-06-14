import { DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';
import defineCustomer from './customer.js';
import defineJob from './job.js';
import defineEmployee from './employee.js';

const Customer = defineCustomer(sequelize, DataTypes);
const Job = defineJob(sequelize, DataTypes);
const Employee = defineEmployee(sequelize, DataTypes);

Customer.hasMany(Job, {
  foreignKey: 'customerId',
  sourceKey: 'uniqueID',
});
Job.belongsTo(Customer, {
  foreignKey: 'customerId',
  targetKey: 'uniqueID',
});

export { sequelize, Customer, Job, Employee };
