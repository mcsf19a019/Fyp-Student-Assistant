import { useState } from "react";
import HomeAdminHandleUser from "./HomeAdminHandleUser";
import { Link } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { name, email, profileImage, password };
  }

  return (
    <div className="create">
      <h2>Add a New User</h2>

      <form onSubmit={handleSubmit}>
        <div className="register-inputs">
          <label className="form-label">Username</label>
          <input className="forminputs" 
            type="text" 
            required 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter Username'
          />
        </div>
        <div className="register-inputs">
          <label className="form-label">User's email</label>
          <input className="forminputs"
            type="text" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='kelen@pucit.edu.pk'
          />
        </div>
        <div className="register-inputs">
         <label className="form-label">Password</label>
         <input className="forminputs"
          type="text" 
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          />
        </div>
        <div className="register-inputs">
          <label className="form-label"> Profile Image</label>
          <input className="forminputs"
            type="file" 
            required 
            value={profileImage}
            onChange={(e) => setProfileImage(e.target.file[0])}
          />
        </div>
        <Link to="/userlists">
          <button type='submit'>
            Add User
          </button>
        </Link>
      </form>
    </div>
  );
}
 
export default Create;