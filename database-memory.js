import { randomUUID } from "node:crypto"
import { title } from "node:process"

export class dataBaseMemory {
    #videos = new Map()

    list(search) {
        return Array.from(this.#videos.entries())
            .map((videoArray) => {
                const id = videoArray[0]
                const data = videoArray[1]

                return {
                    id,
                    ...data,
                }
            })
            .filter(video => {
                if (search) {
                    return video.title.includes(search)
                }

                return true
            })
    }


    create(video) {

        const videoId = randomUUID()

        this.#videos.set(videoId, video)

    }

    update(id, video) {
        this.#videos.set(video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}