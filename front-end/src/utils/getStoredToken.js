const getStoredToken = () => {
  const userData = JSON.parse(localStorage.getItem('user'));
  if (!userData) return '';
  return userData.token;
};

module.exports = getStoredToken;
