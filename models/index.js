import Spend from "./Spend.js";
import Budget from "./Budget.js";

Budget.hasMany(Spend, { foreignKey: 'budget_Id' });
Spend.belongsTo(Budget, { foreignKey: 'budget_Id' });

export {
    Spend,
    Budget
}