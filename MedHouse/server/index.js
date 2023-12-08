import express from "express";
import mongodb from "mongodb";
import dotenv from "dotenv";
// import AdminsDAO from "./dao/adminDAO.js"
// import ReviewsDAO from "./dao/reviewsDAO.js"

const app = express();

dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

let admins;

MongoClient.connect(process.env.FACILITIES_DB_URI, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    // await AdminsDAO.injectDB(client)
    if (admins) {
      return;
    }
    try {
      admins = await client
        .db(process.env.FACILITIES_NS)
        .collection("facility");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in adminDAO: ${e}`
      );
    }

    app.get("/api/facilities", async (req, res) => {
      try {
        const facilities = await admins.find({}).toArray();
        res.json(facilities);
      } catch (err) {
        res.status(500).send(err);
      }
    });

    // await ReviewsDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
