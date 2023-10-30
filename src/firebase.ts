import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { BlogData, EducationData, ProjectData, SocialData } from "./types";
import { firebaseConfig } from "./firebase-config";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)

export async function getResumeUrl(){
    return (await getDownloadURL(ref(storage,"MandarBhide_Resume.pdf")));
}

export async function getData(tablename:string){
    if(tablename===null || tablename===""){
        throw Error("tablename is required");
    }
    let retArray:any[] = [];
    try{
        const data = (await getDocs(collection(db,tablename))).docs;
        switch(tablename){
            case 'social':
                data.forEach((d)=>retArray.push(SocialData.fromFirestore(d)));
                break;
            case 'blogs':
                data.forEach((d)=>retArray.push(BlogData.fromFirestore(d)));
                break;
            case 'education':
                data.forEach((d)=>retArray.push(EducationData.fromFirestore(d)));
                break;
            case 'projects':
                data.forEach((d)=>retArray.push(ProjectData.fromFirestore(d)));
                break;
        }
        return retArray;
    }catch(e){
        console.log(e);
    }
}
