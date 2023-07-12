import { Prisma } from "prisma/prisma-client";
import { prisma } from "../server"

class User {
    private name: String;
    constructor() {

    }
    public findById(id): Prisma.User {
        const user: Prisma.User = prisma.user.findUnique({
            where: {
                id
            }
        })
        return user;
    }

}