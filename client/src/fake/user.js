import { faker } from '@faker-js/faker'

function User() {
    function getUser() {
        return {
            name: 'aads',
            avatar: faker.internet.avatar,
            address: faker.address.city,
            firstName: faker.name.firstName,
            lastName: faker.name.lastName,
            favorites: []
        }
    }
}

const user = new User()