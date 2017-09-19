angular.module('bookSearch')
    .component('bookSearch', {
        templateUrl: 'components/book/book-search/book-search.template.html',
        bindings: {
            query: '='
        }
    })