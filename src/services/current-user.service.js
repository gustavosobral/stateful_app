function CurrentUserService($q, localStorageService) {
  return {
    setCurrentUser:     setCurrentUser,
    destroyCurrentUser: destroyCurrentUser,
    getCurrentUser:     getCurrentUser,
    isAdmin:            isAdmin
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

  function isAdmin() {
    var defer = $q.defer();
    var currentUser = getCurrentUser();

    if(currentUser.admin) {
      defer.resolve();
    } else {
      defer.reject();
    }

    return defer.promise;
  }
}

module.exports = CurrentUserService;
