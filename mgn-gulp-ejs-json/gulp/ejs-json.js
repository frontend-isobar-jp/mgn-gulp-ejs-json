const gulp = require("gulp");
const gulpLoadPlugins = require("gulp-load-plugins");
const $ = gulpLoadPlugins();

const fs = require( 'fs' );

module.exports = function(setting) {

    setting.ejsJson.forEach( function(e,i,entryPoint) {

        const TEMPLATE = setting.ejsJson[i].template; // テンプレートファイル
        const JSONPATH = setting.ejsJson[i].json; // jsonファイル
        const EXTENSION = setting.ejsJson[i].extension; // 出力ファイル拡張子
        const DIST = setting.ejsJson[i].dist; // 出力ディレクトリ

        const DATA = JSON.parse( fs.readFileSync( JSONPATH, 'utf8' ) ).data; //jsonデータ取得（jsonファイルの値は適宜変更して下さい。）

        for (let j = 0; j < DATA.length; j++) {

            let fileName = DATA[j].title; //生成されるファイル名は適宜変更して下さい。

            gulp.src( TEMPLATE )
            .pipe( $.ejs({
                jsonData: DATA[j]
            }))
            .pipe( $.rename( fileName + EXTENSION ) )
            .pipe( gulp.dest( DIST ) );

        }

    });

};
