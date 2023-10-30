const User = require("../model/user")
const User = require("../model/user")

module.exports = {
    async createUser(request, response) {
        const { name, email, password, confirm_password, } = request.body

        const user = await User.create({
            name,
            email,
            password,
            confirm_password
        });

        return response.json(user);
    },

    async findUsers(request, response) {
        const users = await User.findAll();

        return response.json(users);
    },

    async findOne(request, response) {
        const { id } = request.params;

        const user = await User.findOne({ where: { id: id } });

        return response.json(user)
    },

    async updateUser(request, response) {
        const { id } = request.params;
        const { name, email, password, confirm_password } = request.body;

        const user = await User.update(
            {
                name,
                email,
                password,
                confirm_password
            },
            {
                where: { id: id }
            }
        );

        return response.json(user);
    },

    
}