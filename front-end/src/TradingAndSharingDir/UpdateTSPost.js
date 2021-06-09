import { useParams, useHistory } from 'react-router-dom';
import SHNavBarAdmin from '../Admin/SH-NavBarAdmin';
import MahNavbar from '../Admin/MahNavbar';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';

const UpdateTSPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [pic, setPic] = useState('');
  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    Axios.get(`http://localhost:3001/getTsPost/${id}`).then((Response) =>{  
    setTitle(Response.data.title);
    setBody(Response.data.content);
    setPic(Response.data.pic);
    })
  }, [])
  const Update = (id) => {
    Axios.put("http://localhost:3001/updateTsPost", {id,title,body,pic});
    }
  return (  
      <div className="updatePost">
        <SHNavBarAdmin/>
        <MahNavbar/>
        <div className="posts_form">
          <h3 className="posts_heading">Update Trading and Sharing Post</h3>
          <br/>
          <br/>
          <form>
            <div className="register-inputs">
              <label className="form-label">Post title:</label>
              <input className="forminputs" 
                type="text" 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="register-inputs">
              <label className="form-label">Post Content:</label>
              <input className="forminputs"
                type="text" 
                required 
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <div className="register-inputs">
              <label className="form-label"> Post Image</label>
              <input className="forminputs"
                type="file" 
                required 
                value={pic}
                onChange={(e) => setPic(e.target.file[0])}
              />
            </div>
            <Link to="/TSPostList">
              <button onClick={() => Update(id)}>Update Post</button>
            </Link>
          </form>
        </div>
      </div>
    );
}
 
export default UpdateTSPost;