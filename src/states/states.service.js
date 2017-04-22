function StatesService($http, $q, $auth) {
  return {
    get: get,
  };

  function get(modelId) {
    var defer = $q.defer();

    $http.get($auth.apiUrl() + '/models/' + modelId + '/states')
      .then(function(response) {
        defer.resolve(response.data);
      })
      .catch(function(response, code) {
        defer.reject(response);
      });

    return defer.promise;
  }
}

module.exports = StatesService;
