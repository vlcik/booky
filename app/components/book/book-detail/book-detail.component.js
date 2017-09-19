angular
    .module('bookDetail')
    .component('bookDetail', {
        templateUrl: '/components/book/book-detail/book-detail.template.html',
        controller: ['BookService', '$routeParams', function BookDetailController(BookService, $routeParams) {
            this.bookId = $routeParams.bookId;
            var self = this;

            BookService.list()
                .then(function (response) {
                    self.book = response
                        .data
                        .find(function (book) {
                            return self.bookId === book.id;
                        });
                });

            console.log(this);
        }]
    });