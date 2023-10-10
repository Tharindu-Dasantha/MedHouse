import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
// all the daos
import FacilitiesDAO from "./dao/facilitiesDAO.js";
import ServicesDAO from "./dao/servicesDAO.js";
import NoticeboardDAO from "./dao/noticeboardDAO.js";
import StuffDAO from "./dao/stuffDAO.js";
import UsersDAO from "./dao/usersDAO.js";

dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

const connectDB = async (uri, dao) => {
  const client = new MongoClient(uri, {
    wtimeoutMS: 2500,
    useNewUrlParser: true,
  });
  try {
    await client.connect();
    // all the daos
    await dao.injectDB(client);
  } catch (e) {
    console.error(e.stack);
    process.exit(1);
  }
  return client;
};

// connect to all the databases
const facilitesDB = connectDB(process.env.FACILITIES_DB_URI, FacilitiesDAO);
const serviecesDB = connectDB(process.env.SERVICES_DB_URI, ServicesDAO);
const noticeboardDB = connectDB(process.env.NOTICEBOARD_DB_URI, NoticeboardDAO);
const stuffDB = connectDB(process.env.STUFF_DB_URI, StuffDAO);
const usrsDB = connectDB(process.env.USRS_DB_URI, UsersDAO);

Promise.all([facilitesDB, serviecesDB, noticeboardDB, stuffDB, usrsDB])
  .then(() => {
    app.listen(port, () => {
      console.log(`listening on ${port}`);
    });
  })
  .catch((e) => {
    console.error(`Failed to connect to database. \n${e}`);
  });
