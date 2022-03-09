export class Photo {
    constructor(data) {
        this.id = data.id
        this.date = data.date
        this.explanation = data.explanation
        this.mediaType = data.media_type
        this.title = data.title
        this.imgUrl = data.url
    }
}