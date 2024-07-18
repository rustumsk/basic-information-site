const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req,res) =>{
    const u = url.parse(req.url,true);
    console.log("the server is running!");
    let pathName = "." + u.pathname;
    console.log(pathName);

    if (pathName === './'){
        pathName = './index.html';
        console.log(pathName);
    }

    fs.readFile(pathName, (err,data) =>{
        if(err){
            fs.readFile('./404.html', (err404,errData) =>{
                if(err404){
                    res.writeHead(500,{'Content-type': 'text/html'});
                    res.write('500 internal server error!');
                    res.end();
                }
                else{
                    res.writeHead(404,{'Content-type': 'text/html'});
                    res.write(errData);
                    res.end();
                }
            })
        }
        else{
            res.writeHead(200,{'Content-type': 'text/html'});
            res.write(data);
            res.end();
        }
    })
    
}).listen(8080);