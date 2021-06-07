import { useState } from "react";
import NavBarHome from '../RegistrationDir/NavbarHome';
import { useHistory } from "react-router-dom";
import TEPostList from "./TEPostList";
import HomeTripsEvents from "./HomeTripsEvents";
import TEMiniNavBar from './TEMiniNavbar';
import Axios from 'axios';

const CreateTEPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [pic, setPic] = useState('');

  const handleSubmit = (e) => {
    Axios.post("http://localhost:3001/insertTePosts", {title, body, author, pic});
    history.push("/HomeTripsEvents");
  }

  return (
    <div className="createparant">
      <NavBarHome/>
      <TEMiniNavBar/>
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
              type="file" 
              required 
              value={pic}
              onChange={(e) => setPic(e.target.file[0])}
            />
          </div>
          <Link to="/TEPostList">
            <button type='submit'>
              Add Post
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
 
export default CreateTEPost;