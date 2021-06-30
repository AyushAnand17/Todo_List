import React from "react"

const Note =(props) => {



    return(
        <>
        <div className="note">
        <h1>{props.title}</h1>
        <br/>
        <p>
            {props.content}
        </p>
        <button className="btn" onClick={()=>{

        props.deleteItem(props.id)}
        }>Delete</button>
        </div>
        </>
    )
}

export default Note;