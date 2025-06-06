import { DataTypes } from "sequelize";
import { config_db } from "../database/config.js";

const Budget = config_db.define("Budget", {
    budget_total: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    budget_description : {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

export default Budget