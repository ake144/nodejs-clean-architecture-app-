module.exports = async (userRepository, userId) => {
    return await userRepository.getById(userId);
  };
  