const UserRepository = require('../../domain/repositories/UserRepository')
const UserModel = require('./orm/mongoose/UserSchema')


class UserRepositoryImplement extends UserRepository {
    async create(user) {
        return await UserModel.create(user);
    }

    async update(userId, user) {
        return await UserModel.findByIdAndUpdate(userId, user, { new: true });
    }

    async delete(userId) {
        return await UserModel.findByIdAndDelete(userId);
    }

    async getById(userId) {
        return await UserModel.findById(userId);
    }
    async getAll() {
        return await UserModel.find();
    }


}


module.exports = new UserRepositoryImplement();