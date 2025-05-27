import Budget from "../models/Budget.js"
import Spend from "../models/Spend.js"

export const createSpend = async (req, res) => {
    try {
        const { budget_Id, description, amount } = req.body
        
        //Validad que el presupuesto existe
        const budgetPK = await Budget.findByPk(budget_Id)
        if(!budgetPK){
            res.status.json({ message: "El presupuesto no existe! "})
        } else {
            console.log(budgetPK instanceof Budget)
        }

        //Crear el gasto
        const newSpend = await Spend.create({
            description,
            amount,
            budget_Id
        })

        return res.status(201).json(newSpend)
    } catch (error) {
        res.status(500).json({ message: "Error al crear el gasto", error })
        console.log(error)
    }
}

export const getAllSpends = async (req, res) => {
    try {
        const allSpends = await Spend.findAll()
        res.status(201).json(allSpends)
    } catch (error) {
        return res.status(401).json({message: "Error al obtener los gastos", error })
    }
}

export const getSpendById = async (req, res) => {
    try {
        const idSpend = req.params.id;

        //Obtener los datos del gasto por el medio del id
        const spend = await Spend.findByPk(idSpend)
        if(!spend){
            return res.status(400).json({message: "El gasto buscado no existe"})
        }

        res.status(200).json(spend)

    } catch (error) {
        return res.status(401).json({message: "Error al obtener el gasto", error })
    }
}

export const updateSpend = async (req, res) => {
    try {
       const { budget_Id, new_description, new_amount} = req.body

       await Spend.update(
        {
            description: new_description,
            amount: new_amount
        },
        {
            where: {
                id: budget_Id
            }
        }
       )

       res.status(201).json({message: "Gasto actualizado correctamente"})

    } catch (error) {
        return res.status(401).json({message: "Error al actualizar el gasto", error })
    }
}