/** Daucen Osborn
    March 2, 2017
    main.js

    Purpose: This file is to run routes that can tell our page what to show and what controller to use.

    3-2-17 - DMO - Created the first route that hosts the main homepage with its controller.
**/

export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    });

  $urlRouterProvider.otherwise('/');
}
