import { DataTypes } from "sequelize";
import { config_db } from "../database/config.js";

const Spend = config_db.define("Spend", {
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
})

export default Spend