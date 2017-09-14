angular
    .module('bookDetail')
    .component('bookDetail', {
        templateUrl: '/components/book-detail/book-detail.template.html',
        controller: ['$routeParams', '$http', function BookDetailController($routeParams, $http) {
            this.bookId = $routeParams.bookId;
            var self = this;

            $http.get('http://localhost:8080/Booky/book/' + this.bookId)
                .then(function (response) {
                    self.book = response.data;
                });
        }]
    });