var fs = require('fs'),
    path = require('path');

module.exports = function (grunt) {
    grunt.registerTask('version-apply', 'Apply version to typescript code.', function () {
        var options = this.options({
            label: 'version',
            dest: 'src/_Version.ts'
        });

        try {
            var pkg = grunt.file.readJSON('package.json');
            var template = getTemplate();
            var module = tryGetUnifyModule() || pkg.name;
            var vers = pkg.version;

            var output = template
                .replace('%MODULE%', module)
                .replace('%LABEL%', options.label)
                .replace('%VERSION%', vers);
            grunt.file.write(options.dest, output);
        } catch (err) {
            grunt.fail.fatal('Error applying version:' + err);
        }
    });

    function getTemplate() {
        var templatePath = path.join(__dirname, '..', 'lib', 'version_template.ts');
        return fs.readFileSync(templatePath, {encoding: 'utf-8'});
    }

    function tryGetUnifyModule() {
        if (!fs.existsSync('unify.json'))
            return null;
        var json = grunt.file.readJSON('unify.json');
        if (!json || !json.library)
            return null;
        return json.library.exports || null;
    }
};