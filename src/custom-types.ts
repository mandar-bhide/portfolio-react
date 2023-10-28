import { QueryDocumentSnapshot, QuerySnapshot, Timestamp } from "firebase/firestore"

export class SocialData{
    name: string;
    icon: string;
    url: string;
    constructor(name:string,icon:string,url:string){
        this.name = name;
        this.icon = icon;
        this.url = url;
    }

    static fromFirestore =  (snapshot:QueryDocumentSnapshot) => new SocialData(snapshot.get("name"),snapshot.get("icon"),snapshot.get("url"));
}

export class BlogData {
    title:string;
    subtitle:string;
    imageLink:string;
    imageBgColor:string;
    date:Timestamp;
    link:string;
    time:string;
    tag:string;

    constructor(title:string,subtitle:string,imageLink:string,imageBgColor:string,date:Timestamp,link:string,time:string,tag:string){
        this.title = title;
        this.subtitle = subtitle;
        this.imageLink = imageLink;
        this.imageBgColor = imageBgColor;
        this.date = date;
        this.link = link;
        this.time = time;
        this.tag = tag;
    }

    static fromFirestore =  (snapshot:QueryDocumentSnapshot) => new BlogData(snapshot.get("title"),snapshot.get("subtitle"),snapshot.get("imageLink"),snapshot.get("imageBgColor"),snapshot.get("date"),snapshot.get("link"),snapshot.get("time"),snapshot.get("tag"),);
}

export class EducationData {
    degree:string;
    uni:string;
    fromto:string;
    grade:string;
    index:number;

    constructor(degree:string,uni:string,fromto:string,grade:string,index:number){
        this.degree = degree;
        this.uni = uni;
        this.fromto = fromto;
        this.grade = grade;
        this.index = index;
    }

    static fromFirestore =  (snapshot:QueryDocumentSnapshot) => new EducationData(snapshot.get("degree"),snapshot.get("uni"),snapshot.get("fromto"),snapshot.get("grade"),snapshot.get("index"));
}

export class ProjectData {
    title:string;
    image:string;
    description:string;
    technologies:string[];
    codeLink:string;
    type:string;
    index:number;

    constructor(title:string,image:string,description:string,technologies:string[],codeLink:string,type:string,index:number){
        this.title = title;
        this.image = image;
        this.description = description;
        this.technologies = technologies;
        this.codeLink = codeLink;
        this.type = type;
        this.index = index;
    }

    static fromFirestore = (snapshot:QueryDocumentSnapshot) => new ProjectData(snapshot.get("title"),snapshot.get("image"),snapshot.get("description"),snapshot.get("technologies"),snapshot.get("codeLink"),snapshot.get("type"),snapshot.get("index"));
}
