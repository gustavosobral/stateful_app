function ModelsService($http, $q, $auth) {
  return {
    get: get,
    getAll: getAll,
    create: create,
    update: update,
    destroy: destroy
  };

  function get(id) {
    var defer = $q.defer();

    $http.get($auth.apiUrl() + '/models/' + id)
      .then(function(response) {
        defer.resolve(response.data);
      })
      .catch(function(response, code) {
        defer.reject(response);
      });

    return defer.promise;
  }

  function getAll() {
    var defer = $q.defer();

    $http.get($auth.apiUrl() + '/models')
      .then(function(response) {
        defer.resolve(response.data);
      })
      .catch(function(response, code) {
        defer.reject(response);
      });

    return defer.promise;
  }

  function create(model) {
    var defer = $q.defer();

    var data = {
      model: model
    };

    $http.post($auth.apiUrl() + '/models', data)
      .then(function(response) {
        defer.resolve(response.data);
      })
      .catch(function(response, code) {
        defer.reject(response);
      });

    return defer.promise;
  }

  function update(model) {
    var defer = $q.defer();

    var data = {
      model: model
    };

    $http.put($auth.apiUrl() + '/models/' + model.id, data)
      .then(function(response) {
        defer.resolve(response.data);
      })
      .catch(function(response, code) {
        defer.reject(response);
      });

    return defer.promise;
  }

  function destroy(id) {
    var defer = $q.defer();

    $http.delete($auth.apiUrl() + '/models/' + id)
      .then(function(response) {
        defer.resolve();
      })
      .catch(function(response) {
        defer.reject(response);
      });

    return defer.promise;
  }
}

module.exports = ModelsService;
