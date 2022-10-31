import { imgEstandar } from './imgEstandar-interface';

export interface claseMaestra{
    id:number,
    titulo:string,
    tipo?:string
}

export interface estandar extends claseMaestra{
    imagenes:Array<imgEstandar>,
    descripcion:string,
}

export interface proyectoIF extends claseMaestra{
    descripcion:string;
    idImg:Array<number>
}

export interface estYexpIF extends claseMaestra{
    descripcion:string,
    url:string,
}

export interface varios{
    id:number,
    nombre:string,
    titulo:string,
    descripcion:string,
    url:string
}