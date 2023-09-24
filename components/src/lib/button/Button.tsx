import { FC, ReactNode } from "react";
import '@global.css'
interface Props{
    children?: ReactNode;
    variant?:string;
}
export const Button:FC<Props>=({children,variant})=>{
    return <button className="btn-blue" >{children}</button>
}