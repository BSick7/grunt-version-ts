module.exports = function (grunt) {
    grunt.registerMultiTask('version-apply', 'Apply version to typescript code.', function () {
        var options = this.options({
            dest: 'src/_Version.ts'
        });

        var pkg = grunt.file.readJSON('./package.json');
        var template = grunt.file.read('../lib/version_template.ts'); //fix load
        var output = template
            .replace('%MODULE%', pkg.name)
            .replace('%VERSION%', pkg.version);
        grunt.file.write(options.dest, output);
    });
};