angular
    .module('authorDetail')
    .component('authorDetail', {
        templateUrl: '/components/author/author-detail/author-detail.template.html',
        controller: ['BookService', '$routeParams', function AuthorDetailController(BookService, $routeParams) {
            this.authorName = $routeParams.authorName;
            var self = this;

            BookService.list()
                .then(function (response) {
                    self.authorBooks = response
                        .data
                        .filter(function (book) {
                            return self.authorName === book.author;
                        });
                });

        }]
    });