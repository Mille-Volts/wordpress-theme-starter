# WordPress Theme Starter

This project brings great modern features to theme creation on Wordpress: hot module replacement (HMR), Sass compilation, ES6/7 Javascript syntax.

## Getting started

To get the project running, you need to have Docker with docker-compose installed — this create a full Wordpress environment.

Then, you simply need to install and start the project.

```
npm install
npm start
```

The browser is automatically opened on http://localhost:3000.

Before anything else, you'll need to **complete the Wordpress installation** and **choose the appropriate theme**.

Then, you'll be able to change the `src/styles/index.scss` and `src/js/index.js` files and see the changes automatically refreshed in your browser.

If everything is working fine, you should see a "Wordpress Starter Theme is working!" message on every page.

The CSS and Javascript written in the `src/styles/` and `src/js/` folders are automatically applied without refreshing the browser. You can also change the theme files (`.php` files) but you'll need to **refresh manually** the webpage to see the changes.

## Publishing

To publish the theme, simply run `npm run build`. This will create a `dist/my-wordpress-theme` folder with all the files for the theme. Copy and paste everything into your `wp-content/themes/` folder.

You can also zip your theme: `npm run zip`. This will create a `my-wordpress-theme.zip` file you can upload to any Wordpress website.

## How to use it

### Start with an existing theme

You can start with any theme you like. First, download the theme you want to change. Then copy and paste every file in the `src/templates/` folder. Finally, add this single line of script in the `<head>` section of every page:

```
<script type="text/javascript" src="<?php echo get_template_directory_uri() ?>/assets/bundle.js"></script>
```

For most themes, you just have to find the `header.php` file and add this line right after the `<?php wp_head(); ?>` line.

### Use an existing Wordpress installation

This project uses docker-compose to get a fully functional version of Wordpress. You can target another instance of Wordpress by linking the `dist/my-wordpress-theme` folder to the `wp-content/themes/` folder of the instance. To avoid docker-compose, use the `npm run dev` command.

This can be done in many ways: symlinks, docker volumes, watchman, etc.

Another approach would be to copy the whole database of your existing Wordpress instance to your local installation so you have a safe environment for development.

### Change the theme name

The project use the name of the package as found in the `package.json` file as the theme name. You can change it to whatever you like.

### Access the database

With the docker-compose installation, you can have access to PhpMyAdmin with the following link: http://localhost:8080. By default, the username is `root` and the password is `wordpress`.

These defaults values can be modified in the `docker-compose.yml` file.

## Contributing

If you like this project, please let us know :)

If you want to contribute to enhance the process, there are certainly a lot of things to do: linting, formatting, auto reload when a php file is changed, etc.

This project has been based mostly on the [Webpack Wordpress project](https://github.com/sloansparger/webpack-wordpress). Thanks to the author(s)!

