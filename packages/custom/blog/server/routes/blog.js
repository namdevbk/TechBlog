(function() {
    'use strict';

    /* jshint -W098 */
    var blogs = require('../controllers/blog');


    // The Package is past automatically as first parameter
    module.exports = function(Blog, app, auth, database, circles) {
        var requiresAdmin = circles.controller.hasCircle('admin');
        var requiresLogin = circles.controller.hasCircle('authenticated');
     
      /*  app.get('/api/blog/anyone', function(req, res) {
            res.send('Anyone can access this');
        });

        app.get('/api/blog/auth', requiresLogin, function(req, res) {
            res.send('Only authenticated users can access this');
        });

        app.get('/api/blog/admin', requiresAdmin, function(req, res) {
            res.send('Only users with Admin role can access this');
        });
*/
        app.post('/api/blogs', blogs.createBlog);
        app.get('/api/blogs',  blogs.all);
        app.put('/api/blogs/:blogId',  blogs.updateBlog);
        app.get('/api/blogs/:blogId',  blogs.show);
        app.delete('/api/blogs/:blogId',  blogs.deleteBlog);
       
        // app.get('/api/blog/example/render', function(req, res) {
        //     Blog.render('index', {
        //         package: 'blog'
        //     }, function(err, html) {
        //         //Rendering a view from the Package server/views
        //         res.send(html);
        //     });
        // });


    };
})();

