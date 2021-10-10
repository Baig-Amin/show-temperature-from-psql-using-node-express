const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'weather',
  password: 'admin',
  port: 5432,
})


// All Weather Data
const getWeatherData = (request, response) => {
    pool.query('SELECT * FROM weather', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


// Specific Weather Data By city
  const getWeatherDataByCity = (request, response) => {
    const city = request.params.city
    console.log(city)

    pool.query('SELECT * FROM weather WHERE city = $1', [city], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


  module.exports = {
    getWeatherData,
    getWeatherDataByCity,
  }