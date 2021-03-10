const fs = require('fs');
const path = require('path');

function getName(filename, repeat) {
  if (!repeat) return filename;
  let pointPos = filename.lastIndexOf('.');
  if (pointPos > 0) {
    return filename.substring(0, pointPos) + '(' + repeat + ')' + filename.substring(pointPos);
  }
  return filename + '(' + repeat + ')';
}

function gen(filename, source, type, repeat = 0) {
  // 判断源文件是否存在
  if (source) {
    fs.exists(source, function(exists) {
      if (exists) {
        // 存在就拷贝
        generateFile(filename, source, type, repeat);
      } else {
        // 不存在报错
        console.log(`No file ${source}`);
      }
    })
  } else {
    generateFile(filename, source, type, repeat);
  }
}

function generateFile(filename, source, type, repeat = 0) {
  // 获取文件名
  let fn = getName(filename, repeat);
  // 判断文件名是否存在
  fs.exists(fn, function(exists) {
    if (exists) {
      // 如果存在就创建编号加一
      generateFile(filename, source, type, repeat + 1);
    } else {
      // 不存在直接创建
      // 先读取注释文件
      let data = fs.readFileSync(path.join(__dirname, type + '-comment'));
      // 创建文件并写入注释
      fs.writeFileSync(fn, data);
      // 再读取源文件并写入
      if (source) {
        fs.writeFileSync(fn, fs.readFileSync(source), { flag: 'a' });
      }
    }
  })
}

module.exports = gen;