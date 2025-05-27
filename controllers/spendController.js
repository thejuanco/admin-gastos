import Budget from "../models/Budget.js"
import Spend from "../models/Spend.js"

export const createSpend = async (req, res) => {
    try {
        const { budget_Id, description, amount } = req.body
        
        //Validad que el presupuesto existe
        const budgetPK = await Budget.findByPk(budget_Id)
        if(!budgetPK){
            console.log("El presupuesto no existe")
        }

        //Crear el gasto
        const newSpend = await Spend.create({
            description,
            amount,
            budget_Id
        }
    )

        return res.status(201).json(newSpend)
    } catch (error) {
        res.status(500).json({ message: "Error al crear el gasto", error })
        console.log(error)
    }
}