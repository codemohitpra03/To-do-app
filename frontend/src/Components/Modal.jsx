import React, { useState } from 'react'

const Modal = () => {
    const handleTitle = (e) =>{
        setTitle(e.target.value);
    }
    const handleBody = (e) =>{
        setBody(e.target.value);
    }
    const handleAdd = async () =>{
        const add = await fetch("http://localhost:3000/add_note", {
            method: "POST",

            body: JSON.stringify({
                title:title,
                text:body
            }),
            
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        setTitle("");
        setBody("");

        const response = await add.json();
        console.log(response);
    }

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">Add new Note</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <label className="form-label">Title</label>
            <input className="form-control" placeholder="title" onChange={handleTitle} value={title} />
            <label className="form-label">Note</label>
            <textarea className="form-control" placeholder="notes" onChange={handleBody} value={body} />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleAdd} >Add </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Modal