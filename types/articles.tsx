export enum Subject {
    NEXT = 'Next.js',
    ACCESSIBILITY = 'Accessibility',
    TOGGLETHEME = 'Toggle Theme',
    TOOLS = 'Tools'
}

export interface Article {
    id: string
    title: string
    author: string,
    url: string
    subject: Subject[]
}