function CurrentUserService(localStorageService) {
  return {
    setCurrentUser:     setCurrentUser,
    destroyCurrentUser: destroyCurrentUser,
    getCurrentUser:     getCurrentUser
  };

  function setCurrentUser(data) {
    var currentUser = {
      id: data.id,
      email: data.email,
      admin: data.admin
    }
    return localStorageService.set('currentUser', currentUser);
  }

  function destroyCurrentUser() {
    return localStorageService.remove('currentUser');
  }

  function getCurrentUser() {
    return localStorageService.get('currentUser');
  }
}

module.exports = CurrentUserService;
