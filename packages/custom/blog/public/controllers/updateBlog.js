(function() {
    'use strict';

    /* jshint -W098 */

    function UpdateBlogController($scope, Global, Blog, $stateParams,  $location, $state) {
        $scope.global = Global;
        $scope.package = {
            name: 'blog'
        };
        // Find existing post
        $scope.findOne = function(){
            $scope.blog = Blog.get({ 
                blogId: $stateParams.id
            });
        };

        $scope.updateBlogPost = function() {
            var blog = $scope.blog;
            if(blog.title !== 'undefined' && blog.title !== null && blog.description !== 'undefined' && blog.description !== null && blog.name !== 'undefined' && blog.name !== null){
                console.log(JSON.stringify(Blog))
                Blog.update({ blogId: $stateParams.id}, $scope.blog, function(result) {
                    if(result)
                    $location.path('blogs');
                });
            }
        }; 

        $scope.cancel = function() {
            $state.go('viewpost', {id: $stateParams.id});
        };
    }
    
    angular
        .module('mean.blog')
        .controller('UpdateBlogController', UpdateBlogController);

    UpdateBlogController.$inject = ['$scope', 'Global', 'Blog', '$stateParams', '$location', '$state'];

})();
