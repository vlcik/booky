angular
    .module('bookAdd')
    .component('bookAdd', {
        templateUrl: '/components/book-add/book-add.template.html',
        controller: ['$http', '$location', 'CategoryService', function($http, $location, CategoryService) {

            var self = this;
            this.$onInit = function () {
                CategoryService.list().then(
                    function (response) {
                        self.categories = response
                            .data
                            .sort(compareCategories);
                    },
                    function (error) {
                        alert(error);
                    }
                );
            };

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

            var compareCategories = function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            };
        }]
    });