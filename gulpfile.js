// gulpfile.js

'use strict';

const gulp = require("gulp"),
ts = require("gulp-typescript"),
babel = require("gulp-babel");

const tsSrc = [
    '**/*.ts',
    '!./node_modules/**',
    '!./typings/**',
    '!./vscode/**',
    '!./public/**'
];
gulp.task("ts-babel", function () {
    const tsProject = ts.createProject('tsconfig.json');
    return gulp.src(tsSrc)
    .pipe(tsProject())
    .pipe(babel({
        presets: [
            ['env', {
                modules: false,
                targets: { browsers: ["last 2 versions"] }
            }]
        ]
    }))
    .pipe(gulp.dest((function (f) { return f.base; })));
});