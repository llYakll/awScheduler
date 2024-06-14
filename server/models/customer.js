export default (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    'Customer',
    {
      companyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contactFirstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contactLastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contactEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      contactPhoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      uniqueID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
    },
    {
      tableName: 'customers',
    }
  );
  return Customer;
};
