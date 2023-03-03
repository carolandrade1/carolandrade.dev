// Button 3D
export interface Button3dComponents {
    href: string;
    text: string;
}

// ButtonBG
export interface ButtonBgComponents {
    color: ButtonColor;
    text: string;
    href: string;
}

export enum ButtonColor {
    zinc = "bg-zinc-800 dark:bg-zinc-700 group-hover:opacity-90",
    darkPurple = "bg-purple-600"
}

// All data
// export interface Database {
//     name: string
//     photoUrl: string
//     photoAlt: string
//     introductionSection: Introduction
//     projectSection: Projects
//     librarySection: Library
// }

// Introduction Section
export interface Introduction {
    h1: string,
    role: string,
    description: string,
    contact: Contacts[]
}

// Contact on Introduction Section
export interface Contacts {
    contactId: string
    name: string
    url: string
}

// Project Section
export interface Projects {
    h2: string
    description: string
    gridProject: Project[]
}

// Project on Project Section
export interface Project {
    cardId: string
    title: string
    description: string
    link: string
    linkCode: string
    buttonText: string
}


// Articles on Library Section
export interface Library {
    h2: string
    description: string
    tableRef: Article[]
}

export enum Subject {
    ACCESSIBILITY = 'Accessibility',
    TOOLS = 'Tools',
    STYLE = 'Style',
}

export interface Article {
    id: string
    title: string
    author: string,
    url: string
    subject: Subject[]
}