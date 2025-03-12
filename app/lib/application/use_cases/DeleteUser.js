module.exports = async (userRepository, userId) => {
    return await userRepository.delete(userId);
  };
  