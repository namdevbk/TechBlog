(function() {
    'use strict';

    function Blog($stateProvider) {
        
        // var checkLoggedin = function ($q, $timeout, $http, $location) {
        //     // Initialize a new promise
        //     var deferred = $q.defer();

        //     // Make an AJAX call to check if the user is logged in
        //     $http.get('/loggedin').success(function (user) {
        //         // Authenticated
        //         if (user !== '0') $timeout(deferred.resolve);

        //         // Not Authenticated
        //         else {
        //             $timeout(deferred.reject);
        //             $location.url('/login');
        //         }
        //     });
        //     return deferred.promise;
        // }; 
       
        $stateProvider.state('blogs', {
            url: '/blogs',
            templateUrl: 'blog/views/index.html'
        })
        .state('blogcreate', {
            url: '/blogCreate',
            templateUrl: 'blog/views/create.html',
        }) 
        .state('updateblog', {
            url: '/blogs/{id}',
            templateUrl: 'blog/views/updateblog.html',
        })
        .state('viewpost', {
            url: '/blog/{id}',
            templateUrl: 'blog/views/singlepost.html',
        });

    }

    angular
        .module('mean.blog')
        .config(Blog)

    Blog.$inject = ['$stateProvider'];

})();
