export interface IRegisterUser {
    name: string
    email: string
    password: string
    address: string
    phone: string
}

export interface ICredentials{
    password:string
    id:number;
}


export interface IRegisterUserResponse {
    name: string
    email: string
    password: string
    address: string
    phone: string
    role:string
    credential:ICredentials;
}

export interface User{
    id:number;
    name:string;
    email:string;
    address:string;
    phone:string;
    password:string;
    orders?:number[]
}


export interface ILoginUserResponse {
   login:boolean;
   user: Partial<User>|null;
   token:string;
}



export interface ICreateOrder {
    userId: number;
    products: number[];
}



export interface IProduct{
    id:number;
    name:string;
    price:number;
    description:string;
    image:string;
    categoryId:number;
    stock:number;
}  


export interface IProductListProps{
    products:IProduct[];
}

export interface IProductProps{
    product:IProduct
}

export interface ILoginProps{
    email:string;
    password:string;
}
export interface ILoginError{
    email?:string;
    password?:string;
}

export interface ISignUpProps{
    email:string;
    password:string;
    name:string;
    phone:string;
    address:string;
}

export interface ISignUpError{
    email?:string;
    password?:string;
    first_name?:string;
    last_name?:string;
    phone?:string;
    address?:string;
}


export interface userSession{
    token:string;
    userData:{
        id:number;
        name:string;
        email:string;
        address:string;
        phone:string;
        orders:[]
    }

}

export interface IOrder{
    id:number;
    date:string;
    status:string;
    products:IProduct[]
}