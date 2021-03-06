/**
 * Created by Богдан on 09.07.2016.
 */
/**
 * PLUNKER VERSION (based on systemjs.config.js in angular.io)
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

    var ngVer = '@2.0.0-rc.4'; // lock in the angular package version; do not let it float to current!
    var routerVer = '@3.0.0-beta.1'; // lock router version
    var formsVer = '@0.2.0'; // lock forms version
    var routerDeprecatedVer = '@2.0.0-rc.2'; // temporarily until we update all the guides

    //map tells the System loader where to look for things
    var  map = {
        'app':                        'app',

        '@angular':                   'https://npmcdn.com/@angular', // sufficient if we didn't pin the version
        '@angular/router':            'https://npmcdn.com/@angular/router' + routerVer,
        '@angular/forms':             'https://npmcdn.com/@angular/forms' + formsVer,
        '@angular/router-deprecated': 'https://npmcdn.com/@angular/router-deprecated' + routerDeprecatedVer,
        'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api', // get latest
        'rxjs':                       'https://npmcdn.com/rxjs@5.0.0-beta.6',
        'ts':                         'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
        'typescript':                 'https://npmcdn.com/typescript@1.9.0-dev.20160409/lib/typescript.js',

        'ng2-slideable-directive': 'app/ng2-slideable-directive',
        'ng2-slider-component': 'app/ng2-slider-component',
        'ng2-show-code-component': 'app/ng2-show-code-component',
        'ng2-styled-directive': 'app/ng2-styled-directive'
    };

    //packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'main.ts',  defaultExtension: 'ts' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'upgrade',
    ];

    // Add map entries for each angular package
    // only because we're pinning the version with `ngVer`.
    ngPackageNames.forEach(function(pkgName) {
        map['@angular/'+pkgName] = 'https://npmcdn.com/@angular/' + pkgName + ngVer;
    });

    // Add package entries for angular packages
    ngPackageNames.forEach(function(pkgName) {

        // Bundled (~40 requests):
        packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };

        // Individual files (~300 requests):
        //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    // No umd for router yet
    packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

    // Forms not on rc yet
    packages['@angular/forms'] = { main: 'index.js', defaultExtension: 'js' };

    // Temporarily until we update the guides
    packages['@angular/router-deprecated'] = { main: '/bundles/router-deprecated' + '.umd.js', defaultExtension: 'js' };

    map['node_modules'] = '../node_modules';
    map['ng2-styled-directive'] = './../node_modules/ng2-styled-directive';
    map['ng2-slideable-directive'] = './../node_modules/ng2-slideable-directive';
    map['ng2-slider-component'] = './../node_modules/ng2-slider-component';
    map['ng2-show-code'] = './../node_modules/ng2-show-code';
    map['ng2-tabs'] = './../node_modules/ng2-tabs';

    packages['ng2-styled-directive'] = {
        format: 'register',
        defaultExtension: 'js'
    };
    packages['ng2-slideable-directive'] = {
        format: 'register',
        defaultExtension: 'js'
    };
    packages['ng2-slider-component'] = {
        format: 'register',
            defaultExtension: 'js'
    };
    packages['ng2-show-code'] = {
        format: 'register',
        defaultExtension: 'js'
    };
/*    packages["ng2-tabs"] = {
        format: 'register',
            defaultExtension: 'js'
    };*/
    packages["ng2-tabs"] = {
        main: "index.js",
        defaultExtension: "js"
    };


    var config = {
        // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true
        },
        meta: {
            'typescript': {
                "exports": "ts"
            }
        },
        map: map,
        packages: packages
    };

    System.config(config);

})(this);
