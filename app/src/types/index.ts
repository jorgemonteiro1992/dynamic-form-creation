export interface Field {
    id: string;
    type: string;
    name: string;
    dataUri?: string
}

export interface Metadata {
    id: string;
    title: string;
    fields?: Field[];
}

export interface CardData {
    imageUri: string;
    text: string;
    link: String;
}

export interface Data {
    id: string;
    parent: string;
    data?: CardData[];
}