#!/usr/bin/env node

const program = require('commander');
// const gen = require('../lib/generate-file');
const custom = require('./custom');

program
  .name("我的测试项目") // 名字介绍
  // .version('0.0.1', '-v, --version')   // 版本信息
  .version(`${require('../package').name} 版本：${require('../package').version}`)
  .description("")
  // .helpOption('-h,--HELP') // 帮助信息
  // .usage('[options] <file ...>')  // 使用方式介绍
  .command('init <app-name>', '新建项目')
  .option('-a, --aha', `这个表示某个选项`) // 参数介绍
  // .parse(process.argv)
  .action((item) => {
    // console.log("创建项目 --- " + item);
  })
  // .parse(process.argv);
  program.on('command:init', function () {
    console.log("创建项目 --- ");
    custom()
  });
  program.on('option:a', function () {
    console.log("option:a")
  });
  program.on('command:*', function () {
    // console.log(987)
    console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
    process.exit(1);
  });
  program.on('--help', function() {
    console.log('****************');
    console.log('Examples:');
    console.log('****************');
    console.log('  $ deploy exec sequential');
    console.log('  $ deploy exec async');
  });

  program.parse(process.argv);