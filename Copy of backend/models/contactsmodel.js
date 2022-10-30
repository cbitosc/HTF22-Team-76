import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const contact = db.define(
  "contacts",
  {
    name: DataTypes.STRING,
    email:  DataTypes.STRING,
    phonenumber:  DataTypes.STRING,
    address: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default contact;

(async () => {
  await db.sync();
})();
