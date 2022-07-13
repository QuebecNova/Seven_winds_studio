export interface IItemCount {
    number: number;
    title: string;
}

export interface IItem {
    data: IItemCount[];
    dateEnd: number;
    dateStart: number;
    subTitle: string;
    title: string;
}

export interface ISubData {
    title: string;
    items: IItem[];
}

export interface IData {
    items: ISubData[];
    title: string;
}