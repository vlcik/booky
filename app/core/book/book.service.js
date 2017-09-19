angular
    .module('core.book')
    .factory('BookService', ['$http', function ($http) {
        return {
            list: function () {
                return $http({
                        method: 'GET',
                        url: 'assets/json/books.json'
                    })
                    .success(function(response) {
                        response.data;
                    })
                    .error(function(error) {
                            console.error(error);
                    });
            },
            // API
            get: function (bookId) {

            },
            add: function (book) {

            },
            delete: function (bookId) {

            },
            edit: function (bookId) {

            }
        };
    }
    ]);