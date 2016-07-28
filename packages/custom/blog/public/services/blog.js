(function() {
    'use strict';

    function Blog($resource) {
        return $resource('/api/blogs/:blogId', {
          blogId: '@blogId'
        }, {
          update: {
            method: 'PUT'
          }
        });
    }

    angular
        .module('mean.blog')
        .factory('Blog', Blog);

    Blog.$inject = ['$resource'];

})();
