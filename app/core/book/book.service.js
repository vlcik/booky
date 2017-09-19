angular
    .module('core.book')
    .factory('BookService', ['$http', function ($http) {

        var getList = function () {
            return $http({
                    method: 'GET',
                    url: 'assets/json/books.json'
                })
                .success(function(response) {
                    return response.data;
                })
                .error(function(error) {
                    console.error(error);
                });
        };

        return {
            list: getList,
            add: function (book) {

            },
            delete: function (bookId) {

            },
            edit: function (bookId) {

            }
        };
    }
    ]);