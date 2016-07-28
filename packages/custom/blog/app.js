'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Blog = new Module('blog');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Blog.register(function(app, auth, database, circles, system, users, admin) {

  //We enable routing. By default the Package Object is passed to the routes
  Blog.routes(app, auth, database, circles);

  //We are adding a link to the main menu for all authenticated users
  Blog.menus.add({
    title: 'Blogs',
    link: 'blogs',
    roles: ['authenticated'],
    menu: 'main'
  });

  Blog.angularDependencies(['mean.system', 'mean.users', 'mean.admin']);

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Blog.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Blog.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Blog.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Blog;
});
