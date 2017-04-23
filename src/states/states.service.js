function StatesService($http, $q, $auth) {
  return {
    get:    get,
    update: update
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

  function update(modelId, states) {
    var defer = $q.defer();

    var data = {
      states: states
    };

    $http.post($auth.apiUrl() + '/models/' + modelId + '/states', data)
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
