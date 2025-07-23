import { DataTypes } from "sequelize";
import sequelize from "./db.js";

const KV = sequelize.define("KV", {
  key: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export { KV };
