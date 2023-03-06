module.exports = {
  HOST: "ip-172-31-47-12.us-east-2.compute.internal",
  USER: "postgres",
  PASSWORD: "p0stgr3s",
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
