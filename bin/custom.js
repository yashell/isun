
const readline = require('readline');
const createDocs = require('./init');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function custom() {
    rl.question(`项目名称-project name： `, (name) => {
        rl.question(`版本号-version： `, (version) => {
            rl.question(`项目简介-description： `, (description) => {
                console.log(`${name} + ${version}+ ${description}`);
                var p = __dirname + "/package/"; // 复制的路径
                var target = process.cwd() + '/'+ name; // 输出的路径
                createDocs(p, target, function (e) {
                    console.log('创建项目')
                })
                rl.close();
            });

        });
    });
}






module.exports = custom;