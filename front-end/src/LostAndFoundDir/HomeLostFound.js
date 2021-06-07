import LSPostList from "./LSPostList";
import { useState, useEffect } from "react";
import NavBarHome from '../RegistrationDir/NavbarHome';
import MiniNavBar from './MiniNavbar';
import Axios from 'axios';

const HomeLostFound = () => {
  const [lfblogs, setBlogs] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/getLfPosts").then((Response) =>{  
      setBlogs(Response.data);
    })
  }, [])

  return (
    <div className="home">
    <NavBarHome/>
    <MiniNavBar title={"Lost & Found"}/>
      <LSPostList blogs={lfblogs} user={"student"} />
    </div>
  );
}
 
export default HomeLostFound;
