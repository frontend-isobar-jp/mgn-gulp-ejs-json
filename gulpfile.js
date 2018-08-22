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
gulp.task('zip', () => {
    Zip(SETTING);
});


/**
**
** Default Task
**
** コマンド'gulp'で実行される
**
**/

const taskList = [

    'zip',

]
gulp.task('default', taskList);
