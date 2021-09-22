export interface IUser{
    id:string;
    name:string;
    surname:string;
    mail: string;
    imageUrl:string;
    location: Location;
    orders: Order[];
}

export interface Location {
    address: string;
    city: string;
    cap: string;
}

export interface Product{
    name:string;
    price:number;

}

export interface Order{
    id:string;
    date: string;
    product: Product;
    quantity: number;
}

