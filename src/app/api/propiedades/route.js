import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        //return NextResponse.json({message: "Привет, студенты USS"})
        //return  NextResponse.json("Listando Recursos");
        const results=await conn.query("SELECT * FROM propiedades");
        return NextResponse.json(results);

    } catch (error) {
        return NextResponse.json(
            {message:error.message},
            {status:500}
        );
    }
}

/*export function POST(){
    return NextResponse.json("Guardando Recursos");
}*/
export async function POST(request){
    try {
        const {nombre, direccion, caracteristicas, estado, precio_alquiler}=await request.json();
        const result = await conn.query("INSERT INTO propiedades SET ?",{
            nombre, 
            direccion, 
            caracteristicas,
            estado, 
            precio_alquiler
        });
        return NextResponse.json({
            id:result.insertId,
            nombre, 
            direccion, 
            caracteristicas,
            estado, 
            precio_alquiler
            
        });
    } catch (error) {
        return NextResponse.json(
            {message:error.message},
            {status:500}
        );
    }
}