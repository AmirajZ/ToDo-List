import React, { useState } from 'react'

export default function TextArea(props) {

    
    
    const Appendtoarray = ()=>{
        if(text==="Good day"){
            alert("Its Empty")
            return
        }

        const item = {
            id:Math.floor(Math.random()*100),
            value:text
        }

        setItems(oldList => [...oldList,item])
        setText("Good day")
        // console.log(items)
     
    }

    const Handlechange = (event)=>{
        console.log("work is being added")
        setText(event.target.value)
    }

    const WorkDone = ()=>{
        const newlist = items.filter(remove)
        function remove(id) {
          return id=items.id  
        }
        setItems(newlist) 

    }

    

    

    const [text,setText] = useState("Good day");    
    const [items,setItems] = useState([]);    
  return (
    <>
            <div>
                <h2 my-3="true">{props.title}</h2>
                <div className="my-2">
                    <textarea className="form-control" value={text} onChange={Handlechange} id="Textarea" rows="2"></textarea>
                </div>
                <button className='btn' onClick={Appendtoarray}>Add your work</button>
                
            </div>
            <ul>
            {items.map(item =>{
                return(
                    <li key={(item.id)}>{item.value} <button className='btn1' onClick={WorkDone}>Done</button></li>
                )
            })}
            </ul>
            
    </>
  )
}
