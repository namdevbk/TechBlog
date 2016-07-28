(function() {
    'use strict';

    /* jshint -W098 */

    function SinglePostController($scope, Global, Blog, $stateParams,  $location, $state) {
        $scope.global = Global;
        $scope.package = {
            name: 'blog'
        };

    
        Blog.query(function(blogs) {
           $scope.blogs = blogs;
        });

        function getBlog(){
            $scope.blog = Blog.get({ 
                blogId: $stateParams.id
            });
        };
        // Find existing post
        $scope.findOne = getBlog();

        $scope.singlepost = function(blogId) {
            $state.go('viewpost', {id:blogId}); 
        }

        $scope.deletePost = function(id) {
            Blog.delete({ 
                blogId: id
            }, function(){
                 $state.go('blogs');
            });
        }

        $scope.updatePost = function(id) {
            $state.go('updateblog', {id:id});
        }

        $scope.addComment = function() {
            var commentMessage = $scope.comment
            var name = $scope.name;
            var email = $scope.email;
            if(commentMessage !== 'undefined' && commentMessage !== null && name !== 'undefined' && name !== null && email !== 'undefined' && email !== null){
                Blog.get({ 
                    blogId: $stateParams.id
                }, function(blog){
                    var blogComment = blog.comments;
                    var currentDate = new Date();
                    
                    var comment = {
                        comment : commentMessage,
                        name : name,
                        email : email,
                        date : currentDate
                    }
                    blogComment.push(comment);
                    blog.comments = blogComment;

                    Blog.update({blogId: $stateParams.id}, blog, function(updatedblog) {
                       $scope.comment = '';
                       $scope.name = '';
                       $scope.email = '';
                       $scope.findOne = getBlog();
                    });
                });
            } 
        }
    }
    
    angular
        .module('mean.blog')
        .controller('SinglePostController', SinglePostController);

    SinglePostController.$inject = ['$scope', 'Global', 'Blog', '$stateParams', '$location', '$state'];

})();
