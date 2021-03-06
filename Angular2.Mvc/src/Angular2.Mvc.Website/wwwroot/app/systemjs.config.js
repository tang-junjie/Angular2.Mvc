﻿System.config({
    transpiler: 'typescript',
    typescriptOptions: { emitDecoratorMetadata: true },
    map: {
        'rxjs': 'lib-npm/rxjs',
        '@angular': 'lib-npm/angular2',
        'angularfire2': 'lib-npm/angularfire2',
        'firebase': 'lib-npm/firebase',
        '@ngrx': 'lib-npm/ngrx',
        'enums': 'app/enum',
        'service': 'app/service',
        'class': 'app/class',
        'pipe': 'app/pipe',
        'directive': 'app/directive'
    },
    paths: {
        "enums:*": "app/enum/*.js",
        "service:*": "app/service/*.js",
        "class:*": "app/class/*.js",
        "pipe:*": "app/pipe/*.js",
        "directive:*": "app/directive/*.js"
    },
    //meta: {
    //    '@angular/*': { 'format': 'cjs' }
    //},
    packages: {
        'rxjs': { main: 'Rx.js' },
        '@angular/router': { main: 'router.umd.min.js'},
        '@angular/core': { main: 'core.umd.min.js' },
        '@angular/common': { main: 'common.umd.min.js' },
        '@angular/compiler': { main: 'compiler.umd.min.js' },
        '@angular/forms': { main: 'forms.umd.js' },
        '@angular/http': { main: 'http.umd.js' },
        '@angular/platform-browser': { main: 'platform-browser.umd.min.js' },
        '@angular/platform-browser-dynamic': { main: 'platform-browser-dynamic.umd.min.js' },
        '@ngrx/core': { main: 'core.min.umd.js' },
        '@ngrx/store': { main: 'store.min.umd.js' },
        'angularfire2': { main: 'angularfire2.umd.js' },
        'firebase': { main: 'firebase.js' },
        'service': { main: '*.js', defaultExtension: 'js' },
        'class': { main: '*.js', defaultExtension: 'js' },
        'pipe': { main: '*.js', defaultExtension: 'js' },
        'directive': { main: '*.js', defaultExtension: 'js' },
        'enums': { main: '*.js', defaultExtension: 'js' }
    }
});