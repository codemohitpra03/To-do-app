import { useEffect, useState } from 'react'
import List from './List';
import Empty from './Empty';


function Home() {
  const [arr, setArr] = useState([])

  const getData = async () =>{
    let x = await fetch("http://localhost:3000/notes");
    let y = await x.json();
    setArr(y);
  }

  useEffect(() => {
    getData();
  },[arr])
  

  return (
    <>
      {arr.length===0?<Empty/>:arr.map((e)=>{return <List setter={setArr} info={e}/>})
      }
      
    </>
  )
}

export default Home
