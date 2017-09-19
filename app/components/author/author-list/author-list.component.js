angular
    .module('authorList')
    .component('authorList', {
        templateUrl: '/components/author/author-list/author-list.template.html',
        controller: ['BookService', function AuthorListController(BookService) {

            var self = this;

            BookService.list()
                .then(function (response) {
                    var authors = [];
                    response.data.forEach(function (book) {
                        var author = book.author;
                        if (!(isAuthorInList(author, authors))){
                            authors.push({
                                name: author,
                                count: 1
                            });
                        }
                        else {
                            addBookToAuthor(author, authors);
                        }
                    });

                    console.log(authors);
                    self.authors = authors;
                });

            var addBookToAuthor = function (name, authors) {
                authors.find(function (author) {
                    if (author.name === name){
                        author.count += 1;
                    }
                });
            }

            var isAuthorInList = function (name, authors) {
                var result = false;
                authors.forEach(function (author) {
                    if (author.name === name){
                        result = true;
                    }
                })

                return result;
            }

        }]
    });