const express = require('express')
const { PrismaClient } = require('prisma/prisma-client')
const app = express()
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require('./helpers/auth')
const cors = require('cors')

app.use(cors())
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
            },
            select: {
                email: true,
                tokens: true
            }
        })
        res.status(200).json({ user, token: newToken })
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
        const token = jwt.sign({ id: user.id }, 'mysecret')
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

app.post('/logout', auth, async (req, res) => {
    try {
        const { token } = req

        const findUser = await prisma.user.findFirst({
            where: {
                tokens: {
                    has: token
                }
            }
        })
        if (!findUser) throw Error('Invalid token')
        const newTokens = findUser.tokens.filter(existingToken => existingToken != token)

        const updateUser = await prisma.user.update({
            where: {
                id: findUser.id
            },
            data: {
                tokens: newTokens
            }
        })

        res.status(201).json(updateUser)
    } catch (error) {
        console.log(error)
        res.status(401).send(error)
    }
})

app.get('/me', auth, (req, res) => {
    const { user } = req
    try {
        return res.status(200).json({ user })
    } catch (error) {
        return res.status(401).json({ error })
    }
})

app.listen(3000, () => {
    console.log(`Server started at ${3000}`)

})

