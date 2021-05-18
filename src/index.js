const fastify = require('fastify')({
    logger: true,
})

// Bringing in routes
const routes = require('./routes')

// Db
const mongoose = require('mongoose')

// Db connection

mongoose.connect(
  'mongodb+srv://sivasai:sivasai2622@cluster0.ijbg7.mongodb.net/studentDB?retryWrites=true&w=majority'
).then(() => console.log("MONGO is ready !!"))
.catch(err => console.log(err))


// Routes
fastify.get('/', async (request, reply) => {
    return { visiter: ' FACE RECOGNITION' };
})

routes.forEach((route, index) => {
    fastify.route(route)
})

// Starting Server
const start = async () => {
    try {
        await fastify.listen(8080)
        fastify.log.info(`Server is running at ${address}`)
    } catch (error) {

    }
}
start()