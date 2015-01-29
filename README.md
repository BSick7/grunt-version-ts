# grunt-version-ts

> Grunt versioning tool with support for typescript merging.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-version-ts --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-version-ts');
```

## The "version-apply" task

### Overview
In your project's Gruntfile, add a section named `version-apply` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  "version-apply": {
    your_target: {
      dest: 'path/to/_Version.ts'
    },
  },
});
```

## The "version-bump" task

### Overview
In your project's Gruntfile, add a section named `version-bump` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  "version-bump": {
    your_target: {
      dest: 'path/to/_Version.ts'
    }
  }
});
```