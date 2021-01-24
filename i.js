var fs = require("fs");
var path = require("path"); //解析需 path要遍历的文件夹
var filePath = __dirname + "/public/img";
var writeFilePath = __dirname + "/src/assets/imgs.js";
var ar = [];
//调用文件遍历方法
fileDisplay(filePath);
var count = 0;
var mark = 0;
//文件遍历方法
function fileDisplay(filePath) {
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function(err, files) {
    if (err) {
      console.warn(err);
    } else {
      //遍历读取到的文件列表
      count += files.length;
      files.forEach(function(filename, index) {
        //获取当前文件的绝对路径
        var filedir = path.join(filePath, filename);
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, function(eror, stats) {
          if (eror) {
            console.warn("获取文件stats失败");
          } else {
            var isFile = stats.isFile(); //是文件
            var isDir = stats.isDirectory(); //是文件夹
            if (isFile) {
              let a = filedir.replace(__dirname + "\\public\\", "");
              a = a.replace(/\\/g, "/");

              ar.push(a);
              console.log(a); // 读取文件内容
              mark++;
              if (mark === count) {
                  let p1 = [];
                  let p2 = [];
                  ar.forEach((e)=>{
                      if(e.indexOf('/1/')!=-1 || e.indexOf('/2/')!=-1){
                          p1.push(e)
                      }else{
                          p2.push(e)
                      }
                  })
                  let j = {p1:p1,p2:p2}
                var t = "export default " + JSON.stringify(j);
                fs.writeFileSync(writeFilePath, t);
                console.log(mark + " imgs done !");
              }
            }
            if (isDir) {
              count--;
              fileDisplay(filedir); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        });
      });
    }
  });
}
