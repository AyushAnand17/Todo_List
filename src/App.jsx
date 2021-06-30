import React, { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
//import Footer from "./Footer"
import CreateNote from "./CreateNote"
import Note from "./Note"



const App =() => {
    const[arr,setArr]=useState([]);
    const addNote=(name)=>{
        setArr((pre)=>{
            return[
                ...pre,name
            ]
        })}

    const onDelete = (id)=>{
        setArr((old)=>{
            return old.filter((cur,index)=>{
                return index !== id;
            })

        })
    }
    

    


    return(
        <>
        <Header/>
        <Footer/>
        <CreateNote passNote={addNote}/>
        {arr.map((val,index)=>{
            return(
            <Note 
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
            />
            )
        })}
        
     
        
        </>
    )
}

export default App;