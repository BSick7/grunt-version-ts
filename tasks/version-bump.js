var Version = require('../lib/Version');

module.exports = function (grunt) {
    grunt.registerMultiTask('version-bump', 'Bump version in typescript code.', function () {
        var options = this.options({});
        var target = "" || "build";

        try {
            var pkg = grunt.file.readJSON('./package.json');
            var bower = grunt.file.readJSON('./bower.json');

            var vers = new Version(pkg.version);
            grunt.log.writeln('Current version: ' + vers);
            vers.bump(target);
            grunt.log.writeln('Updated version: ' + vers);

            grunt.version = bower.version = pkg.version = vers.toString();
            grunt.file.write('./package.json', JSON.stringify(pkg, undefined, 2));
            grunt.file.write('./bower.json', JSON.stringify(bower, undefined, 2));
        } catch (err) {
            grunt.fail.fatal('Error bumping version:' + err);
        }
    });
};