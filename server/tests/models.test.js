import { sequelize, Customer, Job, Employee } from '../models';

describe('Sequelize Models', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  test('should create a Customer', async () => {
    const customer = await Customer.create({
      companyName: 'Tech Solutions',
      contactFirstName: 'Jane',
      contactLastName: 'Doe',
      contactEmail: 'jane.doe@example.com',
      contactPhoneNumber: '123-456-7890',
    });

    expect(customer.companyName).toBe('Tech Solutions');
    expect(customer.contactFirstName).toBe('Jane');
    expect(customer.contactLastName).toBe('Doe');
    expect(customer.contactEmail).toBe('jane.doe@example.com');
    expect(customer.contactPhoneNumber).toBe('123-456-7890');
  });

  test('should create a Job for a Customer', async () => {
    const customer = await Customer.findOne({ where: { companyName: 'Tech Solutions' } });
    const job = await Job.create({
      jobTitle: 'Website Development',
      jobDescription: 'Develop a new company website.',
      jobStatus: 'In Progress',
      customerId: customer.uniqueID,
    });

    expect(job.jobTitle).toBe('Website Development');
    expect(job.jobDescription).toBe('Develop a new company website.');
    expect(job.jobStatus).toBe('In Progress');
    expect(job.customerId).toBe(customer.uniqueID);
  });

  test('should create an Employee', async () => {
    const employee = await Employee.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'securepassword',
      isAdmin: true,
    });

    expect(employee.firstName).toBe('John');
    expect(employee.lastName).toBe('Doe');
    expect(employee.email).toBe('john.doe@example.com');
    expect(employee.password).toBe('securepassword');
    expect(employee.isAdmin).toBe(true);
  });
});
