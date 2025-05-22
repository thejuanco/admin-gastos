export const createSpend = async (req, res) => {
    try {
        const { description, amount } = req.body
        console.log(req.params)
    } catch (error) {
        return res.status(500).json({ message: "Error al crear el gasto", error })
    }
}