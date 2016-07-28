(function() {
    'use strict';

    /* jshint -W098 */

    function BlogController($scope, Global, Blog, $stateParams,  $state) {
        $scope.global = Global;
        $scope.package = {
            name: 'blog'
        };
        $scope.currentPage = 1;
        $scope.pageSize = 10;
        $scope.offset = 0;

        $scope.checkCircle = function() {
            Blog.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };

        $scope.createBlog = function() {
            $state.go('blogcreate');
        }

        $scope.singlepost = function(blogId) {
            $state.go('viewpost', {id:blogId}); 
        }

        $scope.find = function() {
            Blog.query(function(blogs) {
               $scope.blogs = blogs;
            });
        }
    }
    
    angular
        .module('mean.blog')
        .controller('BlogController', BlogController);

    BlogController.$inject = ['$scope', 'Global', 'Blog', '$stateParams', '$state'];

})();
