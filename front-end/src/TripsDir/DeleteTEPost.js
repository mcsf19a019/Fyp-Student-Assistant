import { useParams, useHistory } from 'react-router-dom';
import SHNavBarAdmin from '../Admin/SH-NavBarAdmin';
import MahNavbar from '../Admin/MahNavbar';
import { useState, useEffect } from "react";
import Axios from 'axios';

const DeleteTEPost = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [pic, setPic] = useState('');
  let history = useHistory();

  useEffect(() => {
    Axios.get(`http://localhost:3001/getTePost/${id}`).then((Response) =>{  
    setTitle(Response.data.title);
    setBody(Response.data.content);
    setAuthor(Response.data.author);
    setPic(Response.data.pic);
    })
  }, [])

  const DeleteTEPost = (id) => {
    Axios.delete(`http://localhost:3001/deleteTePost/${id}`);
    history.push("/SH-AdminUnderNav");
  }
    return (  
        <div className="deletePost">
           <StaffNavBar/>
           <div >
      <h3 className="posts_heading">Delete Post</h3>
      <br/>
      <br/>
      <div className="posts_detailPosts">
            <h3 className="posts_detailPosts_title">{title.toUpperCase()}</h3>
            <br/>
            <h5 className="posts_detailPosts_body">{body}</h5>
            <h5>{pic}</h5>
            <br/>
            <h6 className="posts_detailPosts_author">{author.toUpperCase()}</h6>
            <br/>
            <br/>
            <button className="posts_button" onClick={() => DeletePost(id)}>Confirm Delete</button>
            </div>
    </div>
        </div>
    );
}
 
export default DeleteTEPost;