jest.setTimeout(5000);

import { sequelize } from '../models/index.js';

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});
