export enum Color{
    Rojo,
    Verde,
    Azul,
    Amarillo,
    Blanco,
    Negro
}

export interface Heroe{
    nombre:string;
    vuela:boolean;
    color: Color
}