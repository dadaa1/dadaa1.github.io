/*var crypto=require('crypto'),
	dns=require('dns');
var b1=new Buffer('1fsd郭df0');
console.log(b1);
var b2=Buffer.isBuffer(b1);
console.log(b2)
var b3=Buffer.isEncoding(b1,'utf8');
console.log('b3 :'+b3)
console.log(b1.length);
b1.write('999',0,b1.length);
console.log(b1.toString('hex'),b1.toJSON(),'qqq',b1.values());
console.log(dns.lookup('www.baidu.com'));*/
var fs=require('fs');
fs.rename('./wenzhanggeshi.txt','./文章格式.txt',function(err){
//console.log(err);
})
fs.rmdir('./dddd.s',function(err){
	//console.log(err)
})
fs.readdir('./tags',function(err,file){
	if(err) throw err;
	console.log(file);
});
var fd=fs.open('./dddd.s','w+');
var buffer=new Buffer(20);
fs.read(fd, buffer,function(err,bytesRead,buffer){
	console.log(bytesRead,buffer);
})