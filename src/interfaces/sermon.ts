export interface Sermon {
    name: string;
    date: string;
    videoID: string;
}

export interface SermonData {
    sermons: Sermon[];
}
