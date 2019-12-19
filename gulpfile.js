'use strict';

/**
**
** Setting
**
**/

const SETTING = {

    'zip': [
        {
            'fileName' :"mgn-gulp-ejs-json",// Name of output file
            'version' :  "", // version of output file
            'from' : [
                './mgn-gulp-ejs-json/**/*'
            ],
            'to' : './' //output directry
        }
    ]

}


/**
**
** Module Import
**
**/

const gulp = require("gulp");
const Zip = require("./gulp/zip");


/**
**
** Task
**
**/
gulp.task('zip', (done) => {
    Zip(SETTING);
    done();
});


/**
**
** Default Task
**
** コマンド'gulp'で実行される
**
**/

gulp.task(
    "default",
    gulp.series(gulp.parallel(
        'zip'
    ))
);
