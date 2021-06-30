import React, { useState } from "react"

const CreateNote =(props) => {
    const[expand,setExpand]= useState(false)
    const [name,setName]= useState({
        title:"",
        content:"",
    });

    const added = (event)=>{
        const value = event.target.value;
        const name= event.target.name;

        setName((prevalue) => {
            return({...prevalue,
                [name]:value,
            })
        });

    }

    const clicked =(event)=>{
        props.passNote(name);
       
        setName({
            title:"",
        content:"",

        })
        
     }

     const expandIt=()=>{
         setExpand(true);
     }
    return(
        <>
        <div className="main_note">
        <div className="form">
        {expand?
            <input type="text" placeholder="Title" value={name.title} name="title" onChange={added}/>:null}
            <textarea rows=" " columns="" placeholder="Add a Note" value={name.content} name="content" onChange={added} onClick={expandIt}></textarea>
            <button className="btn" onClick={clicked}>
                Add
            </button>
        </div>
        </div>

        </>
        
     
    )
}

export default CreateNote;