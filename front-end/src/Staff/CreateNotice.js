import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import StaffNavBar from './StaffNavBar';
import Axios from 'axios';

const CreateNotice = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  
  const handleSubmit = (e) => {
    //e.preventDefault();
    //const blog = { title, body };
    Axios.post("http://localhost:3001/insertNotice", {title, body});
    console.log("Notice Data Sent to server");
    return (
      <Fragment>
      <Link  to="/StaffHome" ></Link>
      </Fragment>)
  }
    return ( 
        <div className="ss_createnotice">
        <StaffNavBar/>
        <div className="ss_noticeForm">
      <h3 className="ss_heading">Add Notice</h3>
      <br/>
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
        <label className="ss_labelStyle">Notice title:</label>
        <input 
          type="text" 
          required 
          placeholder="Enter Notice Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="ss_labelStyle">Notice Content:</label>
        <textarea className="ss_textbox"
          required
          placeholder="Enter Notice text here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button>Add Notice</button>
      </form>
    </div>
        </div>
     );
}
 
export default CreateNotice;