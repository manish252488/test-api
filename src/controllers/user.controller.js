export const login = async (req, res) => {
    try {
        return res.status(200).json({})
    }catch(err) {
        return res.status(400).json(err)
    }
}