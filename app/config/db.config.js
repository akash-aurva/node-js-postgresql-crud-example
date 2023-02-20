module.exports = {
  HOST: "ec2-13-233-255-191.ap-south-1.compute.amazonaws.com",
  USER: "postgres",
  PASSWORD: "admin",
  DB: "testdb",
  dialect: "postgres",
  PORT: 8089,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
