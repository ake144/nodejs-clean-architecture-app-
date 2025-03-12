
module.exports = async (userRepository, userData) => {
    return await userRepository.create(userData);
  };
  