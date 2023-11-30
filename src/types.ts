export interface Root {
    social: Social[]
    education: Education[]
    projects: Project[]
    blogs: Blog[]
  }
  
  export interface Social {
    name: string
    icon: string
    url: string
  }
  
  export interface Education {
    degree: string
    uni: string
    fromto: string
    grade: string
    index: number
  }
  
  export interface Project {
    title: string
    image: string
    description: string
    technologies: string[]
    codeLink: string
    type: string
    index: number
  }
  
  export interface Blog {
    title: string
    subtitle: string
    imageLink: string
    imageBgColor: string
    date: string
    link: string
    time: string
    tag: string
  }
  