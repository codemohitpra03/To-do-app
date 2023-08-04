import React from 'react'

const List = (props) => {
  const handleDelete = async () =>{
    const x= await fetch("http://localhost:3000/delete_note", {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id:props.info.id})  
    })

    let y = await x.json();
    // console.log(y);
    props.setter(y);
  }
  const handleDone = async () =>{
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id:props.info.id})
    };
    const response = await fetch('http://localhost:3000/update', requestOptions);
    let y = await response.json();
    
    props.setter(y);
  }
  
  return (
    <>
        <div class="card" style={{margin:"3%"}}>
          <div class="card-header">
            
            {
              props.info.status==="pending"?(
                <span style={{color:"red"}}><h4>Pending</h4></span>
              ):(
                <span style={{color:"green"}}><h4>Done</h4></span>
              )
            }
            
          </div>
          <div class="card-body">
            <h5 class="card-title">{props.info.data.title}</h5>
            <p class="card-text">{props.info.data.text}</p>
            <button type="button" class={`btn btn-${props.info.status==="pending"?"success":"warning"}`} onClick={handleDone}>Mark {props.info.status==="pending"?"done":"pending"}</button>
            <button type="button" class="btn btn-danger mx-3" onClick={handleDelete} >Delete</button>
          </div>
        </div>
    </>
  )
}

export default List