const userRepository = require('../../lib/infrastructure/repositories/userRepositoryImplement')


const createUser = require('../../lib/application/use_cases/CreateUser')
const getUser = require('../../lib/application/use_cases/GetUser')
const updateUser = require('../../lib/application/use_cases/UpdateUser')
const deleteUser = require('../../lib/application/use_cases/DeleteUser')
const listUsers = require('../../lib/application/use_cases/GetAll')



class UserController {
  async createUser(req, res) {
    const user = await createUser(userRepository, req.body);
    res.status(201).json(user);
  }

  async getUser(req, res) {
    const user = await getUser(userRepository, req.params.id);
    res.json(user);
  }

  async updateUser(req, res) {
    const user = await updateUser(userRepository, req.params.id, req.body);
    res.json(user);
  }

  async deleteUser(req, res) {
    await deleteUser(userRepository, req.params.id);
    res.sendStatus(204);
  }

  async listUsers(req, res) {
    const users = await listUsers(userRepository);
    res.json(users);
  }
}

module.exports = new UserController();
