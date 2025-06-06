import { fastify } from "fastify" 
import { dataBaseMemory } from "./database-memory.js" 
import { create } from "node:domain"

const server = fastify()

const database = new dataBaseMemory()

// http://localhost:3333/videos


server.post('/videos', (request, reply) => {

   const {title, description, duration} = request.body


   database.create({
    title,
    description,
    duration,
   })

   return reply.status(201).send()
})

server.get('/videos', (request) => {
    const search = request.query.search

    const videos = database.list(search)

    return videos
})

//Roud paramenter :id
// http://localhost:3333/videos/id

server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id
     const {title, description, duration} = request.body

    database.update(videoId, {
        title,
        description,
        duration
    })
    return reply.status(204).send

})


// http://localhost:3333/videos/id
server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id

    database.delete(videoId)

    return reply.status(204).send()
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