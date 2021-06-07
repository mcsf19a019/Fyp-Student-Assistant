import { useState } from "react";
import Axios from "axios";
import NavBarHome from '../RegistrationDir/NavbarHome';
import MiniNavBar from './MiniNavbar';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
  }
  

  return (
    <div className="createparant">
      <NavBarHome/>
    <MiniNavBar/>
    <div className="create">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Post title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Post Content:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Create Post by:</label>
        <input
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button>Add Post</button>
      </form>
    </div>
    </div>
  );
}
 
export default Create;