const { update } = require("../model/User");
const User = require ("../model/User");

module.exports = {
  async createUser(request, response) {
    const { name, email, password, confirm_password } = request.body;
  
    const user = await User.create({
      name,
      email,
      password,
      confirm_password,
    });

    return response.json(user);
  },
  async findUsers(request,response){
    const users = await User.findAll({ raw: true});

    return response.json(users);
  },
  async findUser(request,response){
    const { id } = request.params;
    const user = await User.findByPk(id);

    return response.json(user);
  },

async update(request,response) {
  const { id } = request.params
}
  
};