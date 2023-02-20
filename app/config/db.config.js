module.exports = {
  HOST: "ec2-3-111-197-186.ap-south-1.compute.amazonaws.com",
  USER: "postgres",
  PASSWORD: "admin",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
