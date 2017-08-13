angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $state) {

    // Perform the login action when the user submits the login form
    $scope.doLogin = function (login) {
      console.log('Doing login', login);

      if (angular.lowercase(login.username) == 'black' && login.password == 1) {
        $state.go('userapp.dashboard');
      } else if (angular.lowercase(login.username) == 'test' && login.password == 1) {
        $state.go('app.waitverify');
      } else {
        alert("Please try again!");
      }

    };

    $scope.register = function () {
      console.log("aaa");
      $state.go('app.register');
    };

    $scope.doReg = function () {
      alert("User registered, please verify your account");
      $state.go('app.login');
    };

    $scope.ok =  function(){
      alert("You has been logged out");
      $state.go('app.login');
    };

    $scope.back = function(){
      $state.go('app.login');
    };
  })



  .controller('UserAppCtrl', function ($scope, $state) {
    $scope.logout = function () {
      $state.go('app.login');
    };

    $scope.sendReport = function (reportData) {
      alert("Report submitted, Thanks");
      reportData.email = "";
      reportData.name = "";
      reportData.desc = "";

    };
  })

  ;
