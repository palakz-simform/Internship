
export interface IPost{
    title:string;
    description:string;
}

export class Post{
    title:string;
    description:string;
    constructor(){
        this.title = 'My First Post';
        this.description = "Description"
    }
}
