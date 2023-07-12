const express = require('express')
const { PrismaClient } = require('prisma/prisma-client')
const app = express()
export const prisma = new PrismaClient()
const bcrypt = require('bcrypt')
const Joi = require('joi')
const jwt = require('jsonwebtoken')

app.use(express.json())

app.post('/register', async (req, res) => {
    const { email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 8)
    const newToken = jwt.sign(email, 'mysecret');
    try {
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                tokens: [newToken]
            }
        })
        res.status(200).json({ message: user })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error })
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (!user) return res.status(401).json({ error: 'Invalid credentials' })

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) return res.status(401).json({ error: 'Invalid credentials' })
        const token = jwt.sign({ userId: user.id }, 'mysecret')
        // Test
        const updatedUser = await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                tokens: { push: token }
            }
        })
        return res.status(200).json({ token })
    } catch (error) {
        console.log(error)
    }
})

app.post('/logout', (req, res) => {
    try {

    } catch (error) {

    }
})

app.listen(3000, () => {
    console.log(`Server started at ${3000}`)

})

