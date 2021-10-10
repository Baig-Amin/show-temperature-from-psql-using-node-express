const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })


  // All Weather Data
  app.get('/weather', db.getWeatherData)

  // Specific Weather Data By city
  app.get('/weather/:city', db.getWeatherDataByCity)



  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })