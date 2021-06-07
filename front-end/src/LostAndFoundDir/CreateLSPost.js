import { useState } from "react";
import NavBarHome from '../RegistrationDir/NavbarHome';
import { useHistory } from "react-router-dom";
import LSPostList from "./LSPostList";
import HomeLostFound from "./HomeLostFound";
import MiniNavBar from './MiniNavbar';
import Axios from 'axios';

const CreateLSPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [pic, setPic] = useState('');

  const handleSubmit = (e) => {
    Axios.post("http://localhost:3001/insertLfPosts", {title, body, author, pic});
    history.push("/HomeLostFound");
  }

  return (
    <div className="createparant">
      <NavBarHome/>
      <MiniNavBar/>
      <div className="create">
        <h2>Add a New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="register-inputs">
            <label className="form-label">Post title:</label>
            <input className="forminputs" 
              type="text" 
              required 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Enter Title'
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
            <label className="form-label"> Profile Image</label>
            <input className="forminputs"
              type="text" 
              required 
              value={pic}
              onChange={(e) => setPic(e.target.file[0])}
            />
          </div>
          <Link to="/LSPostList">
            <button type='submit'>
              Add Post
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
 
export default CreateLSPost;