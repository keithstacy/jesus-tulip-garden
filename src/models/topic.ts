export class Topic {
    id: number;
    key: string;
    name: string;
    description: string;
    content: string;
    image: string;

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.key = data.key;
            this.name = data.name;
            this.description = data.description;
            this.content = data.content;
            this.image = data.image;
        }
    }
}