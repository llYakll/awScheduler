export default (sequelize, DataTypes) => {
  const Job = sequelize.define(
    'Job',
    {
      jobTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jobDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jobStatus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jobId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      customerId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'customers',
          key: 'uniqueID',
        },
      },
    },
    {
      tableName: 'jobs',
    }
  );
  return Job;
};
