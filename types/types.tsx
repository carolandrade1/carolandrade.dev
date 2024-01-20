// ButtonBG
export interface ButtonBgComponents {
  color: ButtonColor;
  text: string;
  href: string;
}

export enum ButtonColor {
  default = 'bg-black dark:bg-white border border-gray-300 group-hover:scale-110',
  indigo = 'bg-indigo-600 dark:bg-indigo-700 group-hover:opacity-90',
}

// Introduction Section
export interface Introduction {
  h1: string;
  role: string;
  description: string;
  contact: Contacts[];
}

// Contact on Introduction Section
export interface Contacts {
  contactId: string;
  name: string;
  url: string;
}

// Project Section
export interface Projects {
  h2: string;
  description: string;
  gridProject: Project[];
}

// Project on Project Section
export interface Project {
  cardId: string;
  title: string;
  description: string;
  link: string;
  linkCode: string;
  buttonText: string;
  buttonAriaText: string;
  buttonAriaTextCode: string;
}

// Articles on Library Section
export interface Library {
  h2: string;
  description: string;
  tableRef: Article[];
}

export enum Subject {
  ALL = 'All',
  ACCESSIBILITY = 'Accessibility',
  TOOLS = 'Tools',
  STYLE = 'Style',
}

export interface Article {
  id: string;
  title: string;
  author: string;
  url: string;
  subject: Subject[];
}
