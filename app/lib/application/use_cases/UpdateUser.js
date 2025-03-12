
module.exports = async (userRepository, userId, userData) => {
    return await userRepository.update(userId, userData);
  };
  