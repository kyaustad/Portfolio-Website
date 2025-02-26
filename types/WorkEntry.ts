export interface WorkEntry {
    title: string
    desc: string
    coverImg: string
    stack: string[]
    links: {label: string; severity: string; link: string; icon?: string}[]
    gallery: {itemImageSrc: string}[]
}