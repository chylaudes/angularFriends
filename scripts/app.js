angular.module('friendsJeopardyApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngSanitize','ngLodash'])
       .config(config);

////////////
// ROUTES //    //  SAVE THIS FOR LATER
////////////

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
   var site_prefix = '/angularFriends';
  $locationProvider.html5Mode(true);
  $routeProvider
    .when(site_prefix + '/', {
      templateUrl: site_prefix +'templates/index.html',
      controller: 'FriendsIndexController',
      controllerAs: 'friendsIndexCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
