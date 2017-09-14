angular
    .module('bookAdd')
    .component('bookAdd', {
        templateUrl: '/components/book-add/book-add.template.html',
        controller: ['$http', '$location', function($http, $location) {

            this.saveOrUpdate = function (book) {
                console.log(book);
                var result = $http.post('http://localhost:8080/Booky/books/add', book)
                    .success(function (data, status) {
                        $location.path('/books');
                    })
                    .error(function () {
                        alert("Problem");
                    });
            }
        }]
    });