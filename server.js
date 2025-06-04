import { fastify } from "fastify" 
import { dataBaseMemory } from "./database-memory.js" 
import { create } from "node:domain"

const server = fastify()

const database = new dataBaseMemory()

// http://localhost:3333/videos


server.post('/videos', (request, reply) => {
   database.create({
    title: 'Video 01',
    description: 'Ele esta postado',
    duration: 180,
   })

   return reply.status(201).send()
})

server.get('/videos', () => {
    return 'hello jet'
})

//Roud paramenter :id
// http://localhost:3333/videos/id

server.put('/videos/:id', () => {
    return 'hello Node.js'
})


// http://localhost:3333/videos/id
server.delete('/videos/:id', () => {
    return 'hello Node.js'
})

server.listen({
    port: 3333,
})







// USANDO NODE
// FASTIFY
//GET busca
//POST criar registro
//PUT auteracao
//DELETE deletar