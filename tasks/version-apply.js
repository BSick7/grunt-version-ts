module.exports = function (grunt) {
    grunt.registerMultiTask('version-apply', 'Apply version to typescript code.', function () {
        var pkg = grunt.file.readJSON('./package.json');
        var template = grunt.file.read('../lib/version_template.ts');
        var output = template
            .replace('%MODULE%', pkg.name)
            .replace('%VERSION%', pkg.version);
        grunt.file.write(data.dest, output);
    });
};