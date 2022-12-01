
import {useState} from "react";

export default function ToDoList(){
    const [titulo, setTitulo]=useState("Titulo");

    const[listatodo,setListatodo]=useState([]);
    
    
    function handlerChange(event){
        const value = event.target.value;
        setTitulo(value);
    }

    function handleSubmit(p)
    {
        p.preventDefault();

        const newToDo={
            id:crypto.randomUUID(),
            titulo:titulo
        }

        setListatodo([...listatodo,newToDo]);
        
    }

    function handleDelete(id)
    {
        const temp=listatodo.filter((item)=>item.id!==id);
        setListatodo(temp);
    }

    return(
        <div className = "Contenedor">
            <form className= "FormularioCrear" onSubmit={handleSubmit}>
                <input onChange={handlerChange} className="Input" value={titulo}></input>
                <input onClick={handleSubmit}
                type = "submit" 
                value ="Agregar" 
                required
                maxLength={20}
                minLength={3}
                className="BotonCrear"></input>
            </form>

            <div className="listaContenedor">
                {listatodo.map(item => (<label><button type="cheackbox"><div key={item.id}>{item.titulo}<button onClick={(e)=>handleDelete(item.id)}>Eliminar</button></div> </button></label>))}
            </div>

            <div>
                Total Tareas: {listatodo.length}
            </div>
        </div>
    );
}


    