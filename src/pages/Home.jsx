import { hydrateRoot } from "react-dom/client"
import Navbar from "../components/Navbar"


import Contact from "./Contact"
import Section from "../components/section"
import Service from "./service"
import About from "./About"

function Home(){
    return(
<>
<Navbar/>
<Section/>
<Service/>
<About/>
<Contact/>

</>
    )
}
export default Home