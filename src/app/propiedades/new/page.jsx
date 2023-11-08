"use client";
import axios from "axios";
import React, { useState } from "react";

function PropiedadesForm() {
    const estadosPermitidos = ["Libre", "Ocupado", "Mantenimiento"];
    const [propiedades, setPropiedades] = useState({
        nombre: "", 
        direccion: "", 
        caracteristicas: "",
        estado: "", 
        precio_alquiler: ""
    });

    const handleChange=(e)=>{
        //console.log(e.target.value, e.target.name);
        setPropiedades({
            ...propiedades,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        //console.log(propiedades);
        const res = await axios.post('/api/propiedades', propiedades);
        if (res.status == 200) {
            alert("Registro exitoso");
            location.href= "/propiedades";
        } else {
            alert("Error al registrar");
        }
    }
    return (
        
        <div className="m-6"    >
        
        <h1 className="text-2x1 font-extrabold text-emerald-500 hover:text-emerald-800" >Propiedades</h1>
        <form onSubmit={handleSubmit} className="px-8 pt-6 mb-4 rounded-md shadow-md bg-gray-50 ">
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="name">Nombre</label>
            <input type="text" name="nombre" onChange={handleChange} className="bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="ingrese el nombre"></input>

            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="name">Direccion</label>
            <input type="text" name="direccion" onChange={handleChange} className="bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="ingrese el direccion"></input>

            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="name">Caracteristicas</label>
            <input type="text" name="caracteristicas" onChange={handleChange} className="bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="ingrese las Caracteristicas"></input>

            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="name">Estado</label>
                <select name="estado" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                    <option value="">Seleccione un estado</option>
                    {estadosPermitidos.map((estado, index) => (
                        <option key={index} value={estado}>{estado}</option>
                    ))}
                </select>

            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="name">Precio Alquiler</label>
            <input type="text" name="precio_alquiler" onChange={handleChange} className="bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="ingrese el precio del alquiler"></input>

            <button className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded mt-5">
                Guardar</button>
        </form>
        </div>
    )
}

export default PropiedadesForm