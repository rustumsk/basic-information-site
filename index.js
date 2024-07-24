const express = require('express');
const app = express();

const http = require('http');
const fs = require('fs');
const url = require('url');

const PORT = 8080;
let pathName = '';
app.get('/', (req,res) =>{

    pathName = './index.html';

    reader(res);
});
app.get('/about', (req,res) =>{

    pathName = './about.html';

    reader(res);
});
app.get('/contact-me', (req,res) =>{

    pathName = './contact-me.html';

    reader(res);
});
app.listen(PORT, () => 'listening');

function reader(res){
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
}
//THE COMMENTED CODE BELOW IS BY USING VANILLA JS, THE ONE ABOVE IS BY USING EXPRESS.


// http.createServer((req,res) =>{
//     const u = url.parse(req.url,true);
//     console.log("the server is running!");
//     let pathName = "." + u.pathname;
//     console.log(pathName);

//     if (pathName === './'){
//         pathName = './index.html';
//         console.log(pathName);
//     }

//     fs.readFile(pathName, (err,data) =>{
//         if(err){
//             fs.readFile('./404.html', (err404,errData) =>{
//                 if(err404){
//                     res.writeHead(500,{'Content-type': 'text/html'});
//                     res.write('500 internal server error!');
//                     res.end();
//                 }
//                 else{
//                     res.writeHead(404,{'Content-type': 'text/html'});
//                     res.write(errData);
//                     res.end();
//                 }
//             })
//         }
//         else{
//             res.writeHead(200,{'Content-type': 'text/html'});
//             res.write(data);
//             res.end();
//         }
//     })
    
// }).listen(8080);