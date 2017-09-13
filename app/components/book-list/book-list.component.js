angular
    .module('bookList')
    .component('bookList', {
        templateUrl: '/components/book-list/book-list.template.html',
        controller: ['$http', function BookListController($http) {
            var self = this;
            $http.get('assets/json/books.json')
                .then(function(response){
                    self.books = response.data;
                });
        }]
    });