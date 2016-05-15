export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('calendar', {
      url: '/calendar',
      templateUrl: 'app/calendar/calendar.html',
      controller: 'CalendarController',
      controllerAs: 'calendar'
    });

  $urlRouterProvider.otherwise('/');
}
