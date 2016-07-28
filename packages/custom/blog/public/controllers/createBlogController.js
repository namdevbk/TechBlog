(function() {
    'use strict';

    /* jshint -W098 */

    function CreateBlogController($scope, Global, Blog, $stateParams,  $location) {
        $scope.global = Global;
        $scope.package = {
            name: 'blog'
        };

        $scope.createBlogPost = function() {
            var blog = $scope.blog;
            if(blog.title !== 'undefined' && blog.title !== null && blog.description !== 'undefined' && blog.description !== null && blog.name !== 'undefined' && blog.name !== null){
                Blog.save($scope.blog, function(result) {
                    if(result)
                    $location.path('blogs');
                });
            }
        }; 

        $scope.cancel = function() {
            $location.path('blogs');
        };
    }
    
    angular
        .module('mean.blog')
        .controller('CreateBlogController', CreateBlogController);

    CreateBlogController.$inject = ['$scope', 'Global', 'Blog', '$stateParams', '$location'];

})();
