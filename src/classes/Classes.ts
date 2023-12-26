export class Blog {
    title: string
    desc: string
    url: string
    imageURL: string
    author: string
    source: string
    content: string

    constructor(title: string, desc: string, url: string, imageURL: string, author: string, source: string, content:string) {
        this.title = title
        this.desc = desc
        this.url = url
        this.imageURL = imageURL
        this.author = author
        this.source = source
        this.content = content
    }
}