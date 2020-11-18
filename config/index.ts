import dotenv from 'dotenv';

dotenv.config();

const config = {
  env: process.env.NODE_ENV,
  apiHost:
    process.env.NODE_ENV === 'production'
      ? process.env.API_HOST
      : 'http://localhost:3000',
};

export default config;
