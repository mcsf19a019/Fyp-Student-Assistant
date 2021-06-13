import { useState, useEffect } from "react";
import NavBarHome from '../RegistrationDir/NavbarHome';
import { useHistory } from "react-router-dom";
import TSMiniNavBar from './TSMiniNavbar';
import Axios from 'axios';

const CreateTSPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  let history = useHistory();

  useEffect( () => {
    Axios.get("http://localhost:3001/getUserInfo").then((Response) => {
          setAuthor(Response.data.email);
        });
  },[]);
  
  const handleSubmit = (e) => {
    Axios.post("http://localhost:3001/insertTsPosts", {title, body, author});
    history.push("/HomeTradingSharing");
  }

  return (
    <div className="createparant">
      <NavBarHome/>
      <TSMiniNavBar/>
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
            <label className="form-label">Post By:</label>
            <input className="forminputs"
              type="text" 
              required
              onChange={(e) => setAuthor(e.target.value)} 
              readOnly value={author}/>
          </div>
          <button type='submit'>
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
}
 
export default CreateTSPost;