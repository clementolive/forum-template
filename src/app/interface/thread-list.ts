export interface ThreadList {
        title: string
        content: string
        threads: ThreadDto[]
}

export interface ThreadDto {
    title: string
    createdAt: string
    user: string
    replies: number
    latest_post: LatestPost
}

export interface LatestPost {
    user: string
    picture: string
    createdAt: string
}
      

