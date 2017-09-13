angular.module('booky').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/books', {
                template: '<book-list></book-list>'
            })
            .when('/book/:bookId', {
                template: '<book-detail></book-detail>'
            })
            .when('/books/add', {
                template: '<book-add></book-add>'
            })
            .otherwise('/books');
    }
]);