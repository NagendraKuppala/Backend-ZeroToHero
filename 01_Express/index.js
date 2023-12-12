import express from "express"

// This app starts a server and listens on port 3000 for connections. 
const app = express()
const port = 3000

/** app.METHOD(PATH, HANDLER)
 * Where:   app is an instance of express.
 *          METHOD is an HTTP request method, in lowercase.
 *          PATH is a path on the server.
 *          HANDLER is the function executed when the route is matched.
 */

// Respond with Hello World! on the homepage "/":
app.get('/', (req, res) => {
  res.send('Got a GET request!')
})

// Respond to POST request on the root route (/), the application’s home page:
app.post('/', (req, res) => {
  res.send('Got a POST request')
})

// Respond to a PUT request to the /user route:
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

// Respond to a DELETE request to the /user route:
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})