let http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': "text/html" });
  res.end("\
    <html>\
      <body>\
        Hello World Hi!\
      </body>\
    </html>\
  ");
}).listen(8000, ()=>{
  console.log("Listening on Port 8000");
});