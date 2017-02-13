const express = require('express')
const app = express()
const path = require('path')
// app.get('*', function(req, res){
//   res.sendFile(__dirname + '/build/index.html');
// });

// Serve static assets
app.use(express.static(path.resolve(__dirname, 'build')))

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(9000, function () {
  console.log('Example app listening on port 9000!')
})
