angular.module('beepbeep', [
    'beepbeep.controllers.marketad.search',
    'beepbeep.controllers.marketad.details',
    'beepbeep.controllers.marketad.add',
    'beepbeep.controllers.marketad.delete',
    'beepbeep.directives.messages',
    'beepbeep.services.marketad',
    'beepbeep.filters.price',
    'beepbeep.filters.string',
    'ngRoute',
    'ngSanitize'
]);