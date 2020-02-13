const express = require('express')
const morgan = require('morgan')
const app = express()

//const server = http.createServer(app)

//settings
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)


//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//routes
app.use(require('./routes/'))
app.use('/api/movies',require('./routes/movies'))

//starting the server
listenApp = () => {
console.log(`The server Running in http://localhost:${app.get('port')}`)
}

app.listen(app.get('port'), listenApp)

