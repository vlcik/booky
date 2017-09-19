angular
    .module('core.category')
    .factory('CategoryService', ['$http', function ($http) {

        return {
            list: function () {
                return $http({
                    method: 'GET',
                    url: 'assets/json/book-categories.json'
                })
                    .success(function(response) {
                        return response.data;
                    })
                    .error(function(error) {
                        console.error(error);
                    });
            }
        };
    }
    ]);