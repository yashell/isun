#!/usr/bin/env node

const program = require('commander');
// const gen = require('../lib/generate-file');
const custom = require('./custom');

program
  // .name("我的测试项目") // 名字介绍
  .version(`${require('../package').name} 版本：${require('../package').version}`, '-v, --version')// 版本信息
  .description("通过此命令可以快速新建项目")
  // .helpOption('-h,--HELP') // 帮助信息
  // .alias('ys')//命令别名
  .usage('init [app-name] <file...>')  // 使用方式介绍
  .command('init <app-name> [mode]...]', '初始化项目')
  .command('list', '查询可使用的模板列表')
  .option('-m, --mode', `模板序号`) // 参数介绍
  // .parse(process.argv)
  .action(function (d, file, cmd) {
    // console.log('remove ' + d ,(cmd.drink ),(cmd.aha ))
    // if (file) {
    //   file.forEach(function (oDir) {
    //         console.log('rmdir %s', oDir);
    //     });
    // }
  })
// .parse(process.argv);
program.on('command:init', function (e) {
  switch (e.length) {
    case 1:
      custom(e[0])
      break;
    case 2:
      custom(e[0], e[1])
      break;
  }
  process.exit(1);
});
program.on('command:list', function (e) {
  console.log('基础模板 【0】')
  console.log('手机模板 【1】')
  console.log('网站模板 【2】')
  process.exit(1);
});
program.on('option:a', function () {
  console.log("option:a")
});
program.on('command:*', function () {
  console.error('Invalid command: %s');
  console.error('不能识别的指令');
  console.error('See --help for a list of available commands.', program.args.join(' '));
  process.exit(1);
});
program.on('--help', function () {
  console.log('****************');
  console.log('Examples:');
  console.log('****************');
  console.log('  $ is init demo -m 0');
  console.log('  $ is list');
});

program.parse(process.argv);