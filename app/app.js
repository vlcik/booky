'use strict';

// Declare app level module which depends on views, and components
var booky = angular.module('myBookyApp', []);

booky.component('searchComponent', {
    template: ''
});

booky.controller('BookyController', function BookyController($scope) {
    $scope.books = [
        {
            id: 1,
            name: 'Jungle Book',
            author: 'Rudyard Kipling',
            genre: 'Novel',
            status: 'read'
        }, {
            id: 2,
            name: 'The Lord Of The Rings',
            author: 'J.R.R. Tolkien',
            genre: 'novel',
            status: 'read'
        }, {
            id: 3,
            name: 'The Key of The Kingdom',
            author: 'A.J. Cronin',
            genre: 'novel',
            status: 'read'
        }
    ];
});
