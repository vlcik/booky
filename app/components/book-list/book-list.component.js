angular
    .module('bookList')
    .component('bookList', {
        bindings: {},
        templateUrl: '/components/book-list/book-list.template.html',
        controller: ['$http', BookListController]
    });

function BookListController($http) {
    var self = this;
    this.query = "";
    //$http.get('http://localhost:8080/Booky/books')
    $http
        .get('assets/json/books.json')
        .then(function(response){
            self.books = response.data;
        });
}