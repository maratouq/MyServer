'usr strict';

const express = require('express');
const server = express();

// create a PORT number
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log('Listening to port ', PORT);
});

server.use(express.static('./public'));

server.get('/data', (request, response) => {
  let car = [
    {model:'BMW'},
    {name:'Cadillac'},
    {name:'Ford'}
  ];
  response.json(car);
});

// server.use(express.static('./public'));

// // killall -s KILL node
// // http://localhost:3000/test
// server.get('/test',(request,response) => {
//     response.send('you are doing great!!');
// });

// // http://localhost:3000/data
// server.get('/data',(request,response) => {
//     let family = [
//         {name:'Atallah'},
//         {name:'Messina'},
//         {name:'Razan'}
//     ];
//     response.json(family);
// });


// server.listen(PORT,()=>{
//     console.log('Listening on port',PORT);
// });