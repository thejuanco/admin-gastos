import { Budget } from '../models/index.js'

export const createBudget = async (req, res) => {
    try {
        const { budget_total, budget_description } = req.body

        const newBudget = await Budget.create({
            budget_total,
            budget_description
        })

        return res.status(201).json(newBudget)
    } catch (error) {
        console.log(error)
    }
}

export const getBudget = async (req, res) => {
    try {
        const budgets = await Budget.findAll()
        return res.status(200).json(budgets)
    } catch (error) {
        console.log(error)
    }
}

export const getBudgetById = async (req, res) => {
    try {
        const budget = await Budget.findOne({
        where: {
          id: req.params.id
        }
    })
      return res.status(200).json(budget)
    } catch (error) {
        console.log(error)
    }
}

export const updateBudget = async (req, res) => {
    try {
        const { budget_total } = req.body
        const { id } = req.params

        const budget = await Budget.findOne({
            where: {
                id
            }
        })

        if (!budget) {
            return res.status(404).json({ message: "El presupuesto no existe" })
        }

        await Budget.update(
            { budget_total },
            {
                where: {
                    id
                }
            }
        )

        return res.status(200).json({ message: "Presupuesto actualizado" })
    } catch (error) {
        console.log(error)
    }
}

export const deleteBudget = async (req, res) => {
    try {
        const { id } = req.params

        await Budget.destroy({
            where: {
                id
            }
        })

        return res.status(200).json({ message: "Presupuesto eliminado" })
    } catch (error) {
        console.log(error)
    }
}