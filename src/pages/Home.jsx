import Navbar from "../components/Navbar"
import { useEffect } from "react"
import axios from "axios"
import Card from "../components/card"
import { useState } from "react"

function Home(){
    const[blogs,setblogs]=useState([])
 const fetchblog= async()=>{
 const response= await axios.get("https://67da6e7335c87309f52c6e35.mockapi.io/blogs")
//  console.log(response)
setblogs(response.data)
}
useEffect(()=>{
fetchblog()
},[])
// console.log(blogs) //const [blogs] chai halnu parcha pass garna
    return(
<>
<Navbar/>

{
    blogs.map(blog=>{ //()yesko bhitra j ni name halda huncha
        return(
            <div key={blog.id} className="card">
            <Card blog={blog}/>
           </div>
        )
    })
}


</>
    )
}
export default Home