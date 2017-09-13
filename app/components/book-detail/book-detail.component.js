angular
    .module('bookDetail')
    .component('bookDetail', {
        templateUrl: '/components/book-detail/book-detail.template.html',
        controller: ['$routeParams', function BookDetailController($routeParams) {
            this.bookId = $routeParams.bookId;
        }]
    });