function LoginController($auth, $state) {
  var vm = this;

  vm.submitLogin = function(form) {
    $auth.submitLogin(form)
      .then(function(response) {
        $state.go('layout.home');
      })
      .catch(function(response) {
        console.log('Error: ' + response.reason);
      });
  };
}

module.exports =  LoginController;
