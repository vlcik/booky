angular
    .module('bookList')
    .component('bookList', {
        bindings: {},
        templateUrl: '/components/book/book-list/book-list.template.html',
        controller: ['BookService', BookListController]
    });

function BookListController(BookService) {
    this.query = '';
    var self = this;
    BookService.list().then(
        function (response) {
            self.books = response.data;
        },
        function (error) {
            alert(error);
        }
    );
}