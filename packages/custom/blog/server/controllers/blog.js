(function(){
    'use strict';

    /**
     * Module dependencies.
     */
    var mongoose = require('mongoose'),
      Blog = mongoose.model('Blog');

    /**
     * Create a Blog
     */
    exports.createBlog = function(req, res) {
        var createdDate = new Date();
        var updatedDate = new Date();
        
        var blog = new Blog({
          title: req.body.title,
          author: req.body.name,
          description: req.body.description,
          created_at: createdDate,
          updated_at: updatedDate
        });

        blog.save(function(err, data) {
        if (err) {
          return res.status(500).json({
            error: 'Cannot save the blog'
          });
        }
        res.json({success:true, blog: data});
        });
    };

    /**
     * List of Blogs
     */
    exports.all = function(req, res) {

      Blog.find().sort('created_at').exec(function(err, blogs){
        if (err) {
          return res.status(500).json({
            error: 'Cannot list the blogs'
          });
        }
        res.json(blogs);
      });
    };

    /**
     * Destroy a Blog
     */
    exports.deleteBlog = function(req, res) { 
      Blog.findOneAndRemove({_id: req.params.blogId}, function(err, data) {
        if (err) {
          return res.status(500).json({
            error: 'Cannot delete the blog'
          });
        }
        res.json({success: true, data:"ok"});
      });
    };

    /**
     * Update an Blog
     */
    exports.updateBlog = function(req, res) {
      delete req.body._id;
      Blog.findOneAndUpdate({ _id :req.params.blogId}, req.body, function(err, blog){
         if(err){
               return res.json({success: false, error: 'Post does not exists.'});
         } else {
             res.json(blog);
         }
      });
    };

    /**
     * Show a Blog
     */
    exports.show = function(req, res) {
      Blog.findOne({_id:req.params.blogId}, function(err, blog){
        if (err) {
          return res.status(500).json({
            error: 'Cannot get the blog'
          });
        }
        res.json(blog);
      });
    };

    /**
     * Find Blog by id
     */
    exports.blog = function(req, res, next, id) {
      Blog.load(id, function(err, blog) {
        if (err) return next(err);
        if (!blog) return next(new Error('Failed to load blog ' + id));
        req.blog = blog;
        next();
      });
    };
})();