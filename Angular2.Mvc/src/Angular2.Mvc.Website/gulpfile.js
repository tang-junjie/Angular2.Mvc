﻿/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
"use strict";
var gulp = require('gulp');
var root_path = {
    webroot: "./wwwroot/"
}

//library source
root_path.nmSrc = "./node_modules/";
//library destination
root_path.package_lib = root_path.webroot + "lib-npm/"

//rxjs
gulp.task("copy-rxjs", function () {
    return gulp.src(root_path.nmSrc + '/rxjs/**/*.js', {
        base: root_path.nmSrc + '/rxjs/'
    }).pipe(gulp.dest(root_path.package_lib + '/rxjs/'));
});

//reflect-metadata
gulp.task("copy-reflect-metadata", function () {
    return gulp.src(root_path.nmSrc + '/reflect-metadata/*.js', {
        base: root_path.nmSrc + '/reflect-metadata/'
    }).pipe(gulp.dest(root_path.package_lib + '/reflect-metadata/'));
});

//zone.js
gulp.task("copy-zonejs", function () {
    return gulp.src(root_path.nmSrc + '/zone.js/dist/**/*.js', {
        base: root_path.nmSrc + '/zone.js/dist/'
    }).pipe(gulp.dest(root_path.package_lib + '/zone.js/'));
});


//angular2
gulp.task('copy-ng2-common', function () {
    return gulp.src(root_path.nmSrc + "/@angular/common/bundles/**/*.js", {
        base: root_path.nmSrc + '/@angular/common/bundles/'
    }).pipe(gulp.dest(root_path.package_lib + '/angular2/common/'));
});
gulp.task('copy-ng2-compiler', function () {
    return gulp.src(root_path.nmSrc + "/@angular/compiler/bundles/**/*.js", {
        base: root_path.nmSrc + '/@angular/compiler/bundles/'
    }).pipe(gulp.dest(root_path.package_lib + '/angular2/compiler/'));
});
gulp.task('copy-ng2-core', function () {
    return gulp.src(root_path.nmSrc + "/@angular/core/bundles/**/*.js", {
        base: root_path.nmSrc + '/@angular/core/bundles/'
    }).pipe(gulp.dest(root_path.package_lib + '/angular2/core/'));
});
gulp.task('copy-ng2-forms', function () {
    return gulp.src(root_path.nmSrc + "/@angular/forms/bundles/**/*.js", {
        base: root_path.nmSrc + '/@angular/forms/bundles/'
    }).pipe(gulp.dest(root_path.package_lib + '/angular2/forms/'));
});
gulp.task('copy-ng2-http', function () {
    return gulp.src(root_path.nmSrc + "/@angular/http/bundles/**/*.js", {
        base: root_path.nmSrc + '/@angular/http/bundles/'
    }).pipe(gulp.dest(root_path.package_lib + '/angular2/http/'));
});
gulp.task('copy-ng2-router', function () {
    return gulp.src(root_path.nmSrc + "/@angular/router/bundles/**/*.js", {
        base: root_path.nmSrc + '/@angular/router/bundles/'
    }).pipe(gulp.dest(root_path.package_lib + '/angular2/router/'));
});
gulp.task('copy-ng2-platform-browser', function () {
    return gulp.src(root_path.nmSrc + "/@angular/platform-browser/bundles/**/*.js", {
        base: root_path.nmSrc + '/@angular/platform-browser/bundles/'
    }).pipe(gulp.dest(root_path.package_lib + '/angular2/platform-browser/'));
});
gulp.task('copy-ng2-platform-browser-dynamic', function () {
    return gulp.src(root_path.nmSrc + "/@angular/platform-browser-dynamic/bundles/**/*.js", {
        base: root_path.nmSrc + '/@angular/platform-browser-dynamic/bundles/'
    }).pipe(gulp.dest(root_path.package_lib + '/angular2/platform-browser-dynamic/'));
});

//systemjs
gulp.task('copy-systemjs', function () {
    return gulp.src(root_path.nmSrc + "/systemjs/dist/**/*.*", {
        base: root_path.nmSrc + '/systemjs/dist/'
    }).pipe(gulp.dest(root_path.package_lib + '/systemjs'));
});
//ES6
gulp.task('copy-es6-shim', function () {
    return gulp.src(root_path.nmSrc + "/es6-shim/es6-sh*", {
        base: root_path.nmSrc + '/es6-shim/'
    }).pipe(gulp.dest(root_path.package_lib + '/es6-shim'));
});
//sweetalert2
gulp.task('copy-sweetalert2', function () {
    return gulp.src(root_path.nmSrc + "/sweetalert2/dist/sweetalert2*", {
        base: root_path.nmSrc + '/sweetalert2/dist/'
    }).pipe(gulp.dest(root_path.package_lib + '/sweetalert2/'));
});
//jsnlog
gulp.task('copy-jsnlog', function () {
    return gulp.src(root_path.nmSrc + "/jsnlog/jsnlog*.js", {
        base: root_path.nmSrc + '/jsnlog/'
    }).pipe(gulp.dest(root_path.package_lib + '/jsnlog/'));
});
//angularfire2
gulp.task('copy-angularfire2', function () {
    return gulp.src(root_path.nmSrc + "/angularfire2/bundles/angularfire2.umd.js", {
        base: root_path.nmSrc + '/angularfire2/bundles/'
    }).pipe(gulp.dest(root_path.package_lib + '/angularfire2/'));
});
//firebase
gulp.task('copy-firebase', function () {
    return gulp.src(root_path.nmSrc + "/firebase/*.js", {
        base: root_path.nmSrc + '/firebase/'
    }).pipe(gulp.dest(root_path.package_lib + '/firebase/'));
});
//traceur
gulp.task('copy-traceur', function () {
    return gulp.src(root_path.nmSrc + "/traceur/dist/commonjs/traceur.js", {
        base: root_path.nmSrc + '/traceur/dist/commonjs/'
    }).pipe(gulp.dest(root_path.package_lib + '/traceur/'));
});

//ngrx
gulp.task('copy-ngrx-core', function () {
    return gulp.src(root_path.nmSrc + "/@ngrx/core/bundles/core.min.umd.js")
        .pipe(gulp.dest(root_path.package_lib + '/ngrx/core/'));
});
gulp.task('copy-ngrx-store', function () {
    return gulp.src(root_path.nmSrc + "/@ngrx/store/bundles/store.min.umd.js")
        .pipe(gulp.dest(root_path.package_lib + '/ngrx/store/'));
});


//ng2-toastr
gulp.task('copy-ng2-toastr', function () {
    return gulp.src([
        root_path.nmSrc + "/ng2-toastr/bundles/*.min.js",
        root_path.nmSrc + "/ng2-toastr/bundles/*.min.css"
    ], {
        base: root_path.nmSrc + '/ng2-toastr/bundles/'
    }).pipe(gulp.dest(root_path.package_lib + '/ng2-toastr/'));
});



//font-awesome
gulp.task('copy-fa-css', function () {
    return gulp.src(root_path.nmSrc + "/font-awesome/fonts/*", {
        base: root_path.nmSrc + '/font-awesome/fonts/'
    }).pipe(gulp.dest(root_path.package_lib + '/font-awesome/fonts/'));
});

gulp.task('copy-fa-fonts', function () {
    return gulp.src(root_path.nmSrc + "/font-awesome/css/font-awesome.min.css", {
        base: root_path.nmSrc + '/font-awesome/css/'
    }).pipe(gulp.dest(root_path.package_lib + '/font-awesome/css/'));
});


gulp.task("copy-all", [
    "copy-rxjs",
    "copy-reflect-metadata",
    "copy-zonejs",
    "copy-ng2-common",
    "copy-ng2-compiler",
    "copy-ng2-core",
    "copy-ng2-forms",
    "copy-ng2-http",
    "copy-ng2-router",
    "copy-ng2-platform-browser",
    "copy-ng2-platform-browser-dynamic",
    "copy-systemjs",
    "copy-es6-shim",
    "copy-sweetalert2",
    "copy-jsnlog",
    "copy-angularfire2",
    "copy-firebase",
    "copy-traceur",
    "copy-fa-css",
    "copy-fa-fonts",
    "copy-ng2-toastr",
    "copy-ngrx-core",
    "copy-ngrx-store",
])