import { MongoClient as Mongo, Db } from "mongodb";

export const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017";
    const username = process.env.MONGODB_USER;
    const password = process.env.MONGODB_PASS;

    const client = new Mongo(url, { auth: { username, password } });

    const db = client.db("users-db");

    this.client = client;
    this.db = db;

    console.log("Connnected to Mongo Database");
  },
};
