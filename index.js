const express = require('express')
const morgan = require('morgan')
const app = express()

//const server = http.createServer(app)
app.set('port', process.env.PORT || 3000)


//middlewares
app.use(morgan('dev'))



//starting the server
listenApp = () => {
console.log(`The server Running in http://localhost:${app.get('port')}`)
}

app.listen(app.get('port'), listenApp)

