# Download

[↓ Download zip file](https://github.com/frontend-isobar-jp/mgn-gulp-ejs-json/blob/master/mgn-gulp-ejs-json.zip?raw=true)

**ダウンロードしたファイルをプロジェクトルート直下に配置します。**

----


# Ejs Json |


## npm install
```
$ npm install gulp-ejs gulp-rename --save
```
## 1. setting追加

'ejsJson' には テンプレートファイル、jsonファイル、出力ファイルの拡張子、コンパイル先ディレクトリを設定します。(必須)
'./gulp/ejs-json' の fileName には生成するファイル名を指定してください。(必須)

```
const SETTING = {

    'ejsJson': [
        {
            'template': './src/ejs/template.ejs',
            'json': './src/ejs/sample.json',
            'extension': '.html',
            'dist': ROOT_PATH
        }
        // 対象ディレクトリを増やす場合は、配列を追加する
    ]

}
```

## 2. Module Import

```
const EjsJson = require("./gulp/ejs-json");
```

## 3. task定義

```
gulp.task('ejsJson', (done) => {
    EjsJson(SETTING);
    done();
});


SETTING.ejsJson.forEach( function(e,i) {

    gulp.watch(SETTING.ejsJson[i].template, gulp.task("ejsJson"));
    gulp.watch(SETTING.ejsJson[i].json, gulp.task("ejsJson"));

});


```

## 4. Default Task
（ taskListへ記述することで、default起動するようになります。 ）

```
gulp.task(
    "default",
    gulp.series(gulp.parallel(
        'ejsJson'
    ))
);
```
