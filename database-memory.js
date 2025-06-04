import { randomUUID } from "node:crypto"

export class dataBaseMemory {
    #videos = new Map()

    list() {
        this.#videos.values()

    }


    create(video) {

        const videoId = randomUUID()

        this.#videos.set(videoId, video)

    }

    update(id, video) {
        this.#videos.set(video)
    }

    delete(id) {
        this.#videos.set(id)
    }
}