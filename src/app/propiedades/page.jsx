"use client";
import { useState,useEffect } from "react";
import axios from "axios";

async function loadPropiedades(){
    try {
        const response = await axios.get('/api/propiedades');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error loading propiedades ...', error);
        return[];
    }
}

function PropiedadesList() {
    const estadosPermitidos = ["Libre", "Ocupado", "Mantenimiento"];
    const [propiedades,setPropiedades] = useState([]);
    useEffect(()=>{
        const fetchPropiedades = async () =>{
            const propiedadesData = await loadPropiedades();
            setPropiedades(propiedadesData);
        };
        fetchPropiedades();
    }, []);
    const deletePropiedades = async (propiedadesId) => {
        try {
        if (confirm('Are you sure you want to delete this propiedades?')) {
            const res = await axios.delete(`/api/propiedades/${propiedadesId}`);
            if (res.status === 204) {
            // Update the products state after successful deletion
            setPropiedades((prevPropiedades) =>
                prevPropiedades.filter((propiedades) => propiedades.id !== propiedadesId)
                    );
                }
            }
        } catch (error) {
        console.error('Error deleting propiedades:', error);
        }
      };

    return (
        <>
        <div className="text-2x2 m-2 font-extrabold text-blue-400 hover:text-blue-950">Lista de Propiedades</div>
        <div className="shadow-md rounded-md px-8 pt-6 pb-8 mb-4"> 
            <table className="min-w-full text-left text-sm font-light">
                <thead>
                    <tr className="border-b font-medium border-b-indigo-500">
                        <th>Options</th>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Direccion</th>
                        <th>Caracteristicas</th>
                        <th>Estado</th>
                        <th>Precio Alquiler</th>
                    </tr>
                </thead>
                <tbody>
                {propiedades.map((propiedades,index)=>{
                    return (
                    <tr key={index} className="border-b dark:border-neutral-500 hover:bg-gray-100">
                        <td className="whitespace-nowrap px-6 py-4"> <button
                        className="text-white bg-red-500 hover:bg-red-700 py-2 px-3 rounded"
                        onClick={() => deletePropiedades(propiedades.id)}
                        >
                        Delete
                        </button> </td>
                        <td className="whitespace-nowrap px-6 py-6">{propiedades.id}</td>
                        <td className="whitespace-nowrap px-6 py-6">{propiedades.nombre}</td>
                        <td className="whitespace-nowrap px-6 py-6">{propiedades.direccion}</td>
                        <td className="whitespace-nowrap px-6 py-6">{propiedades.caracteristicas}</td>
                        <td className="whitespace-nowrap px-6 py-6">
                            {estadosPermitidos.includes(propiedades.estado) ? propiedades.estado : ''}
                        </td>
                        <td className="whitespace-nowrap px-6 py-6">{propiedades.precio_alquiler}</td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default PropiedadesList