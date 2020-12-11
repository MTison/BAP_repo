const http = require('http');

const data = {
  title: "Make Node application",
  item1: "Init project with 'npm init'",
  item2: "Create server with internal 'http' API",
};

const server = http.createServer((request, response) => {
  if (request.url === '/todo') {
    response.setHeader('Content-type', 'application/json');
    response.end(JSON.stringify(data));
  }
  response.end(`
    <div>
      <h1>Hello, this is a node application!</h1>
      <h4>You completed the below TODO</h4>
      <p><a href="http://localhost:3500/todo">Check the TODO</a></p>
    </div>
  `);
});

server.listen(3500, 'localhost', () => {
  console.info('Server is listening on port 3500');
});