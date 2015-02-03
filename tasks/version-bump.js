var fs = require('fs'),
    Version = require('../lib/Version');

module.exports = function (grunt) {
    grunt.registerTask('bump-build', 'Bump version in package.json and bower.json.', function () {
        bump('build');
    });
    grunt.registerTask('bump-minor', 'Bump version in package.json and bower.json.', function () {
        bump('minor');
    });
    grunt.registerTask('bump-major', 'Bump version in package.json and bower.json.', function () {
        bump('major');
    });
    grunt.registerTask('bump', ['bump-build']);

    function bump(target) {
        target = target || "build";

        try {
            var pkg = readJson('package.json');
            var bower = readJson('bower.json');
            if (pkg == null && bower == null) {
                grunt.log.writeln('No package or bower file.');
                return;
            }
            var vers;
            if (pkg != null)
                vers = new Version(pkg.version);
            else if (bower != null)
                vers = new Version(bower.version);

            grunt.log.writeln('Current version: ' + vers);
            vers.bump(target);
            grunt.log.writeln('Updated version: ' + vers);

            grunt.version = vers.toString();

            if (pkg != null) {
                pkg.version = grunt.version;
                grunt.file.write('package.json', JSON.stringify(pkg, undefined, 2));
            }

            if (bower != null) {
                bower.version = grunt.version;
                grunt.file.write('bower.json', JSON.stringify(bower, undefined, 2));
            }
        } catch (err) {
            grunt.fail.fatal('Error bumping version:' + err);
        }
    }

    function readJson(filepath) {
        if (fs.existsSync(filepath))
            return grunt.file.readJSON(filepath);
        return null;
    }
};