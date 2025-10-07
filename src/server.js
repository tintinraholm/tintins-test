const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 8080
const hej = process.env.PORT || "not defined"

console.log(`Node.js ${process.version}`)

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ msg: "Hej" })
})


app.listen(PORT, () => {
    try {
        console.log(`Running on http://localhost:${PORT}`)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    
})
