import { useState } from "react";
import NavBarHome from '../RegistrationDir/NavbarHome';
import { useHistory } from "react-router-dom";
import TEMiniNavBar from './TEMiniNavbar';
import Axios from 'axios';

const CreateTEPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [pic, setPic] = useState('');
  let history = useHistory();

  const handleSubmit = (e) => {
    Axios.post("http://localhost:3001/insertTePosts", {title, body, author, pic});
    //history.push("/HomeTripsEvents");
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
            <label className="form-label"> Post Image </label>
            <input className="forminputs"
              type="file"
              value={pic}
              onChange={(e) => setPic(e.target.file[0])}
            />
          </div>
            <button type='submit'>
              Add Post
            </button>
        </form>
      </div>
    </div>
  );
}
 
export default CreateTEPost;