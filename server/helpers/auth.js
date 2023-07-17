const jwt = require('jsonwebtoken')
const { PrismaClient } = require('prisma/prisma-client')
const prisma = new PrismaClient()

async function auth(req, res, next) {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, 'mysecret')

    try {
        const user = await prisma.user.findFirst(
            {
                where: {
                    id: decoded.id,
                    tokens: {
                        has: token
                    }
                }
            }
        )

        if (!user) return res.status(401).json({ error: 'Invalid Request' })

        req.user = user
        req.token = token
        next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({ error })
    }
}

module.exports = auth