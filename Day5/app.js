const http = require('http')

const port = 2300;
const server = http.createServer((req, res)=>{
    console.log("Getting the headers");
    console.log(re.headers);

    const{method, headers, url} = req
    console.log("Getting the headers")
    console.log(headers);

    // To set header
    res.setHeader("Content-Type", "text/html")
    res.write("<h1>Hello Aminat</h1>")
    res.end();
});

server.listen(port, () =>{
    console.log(port)
})