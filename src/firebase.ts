import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { BlogData, EducationData, ProjectData, SocialData } from "./custom-types";

const firebaseConfig = {
    apiKey: "AIzaSyCK6kDJ6sYaEMXHba-gzNRLJNHzhtYN0OU",
    authDomain: "mandarbhide.firebaseapp.com",
    projectId: "mandarbhide",
    storageBucket: "mandarbhide.appspot.com",
    messagingSenderId: "166674358367",
    appId: "1:166674358367:web:6a85005ec89fc6c8ecfbea",
    measurementId: "G-EZ4VW1SV4C"
};

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
