//import { Button } from "react-bootstrap";
//import {Link} from "react-router-dom"
import StaffNavBar from './StaffNavBar';
import { Fragment, useEffect } from "react";
import { useState } from "react";
import  Axios  from "axios";
const StaffClearance = () => {
    
    const [clearnaceStatus,setclearnceStatus] = useState([]) ;  
    useEffect( () => {

        Axios.get("http://localhost:3001/getclearancereq").then((response) => {
          setclearnceStatus(response.data);
          //console.log(response.data);

        });

    },[]);

    const rejectClrearance = (id)  =>{
        Axios.delete(`http://localhost:3001/deleteClreanceReq/${id}`);

    }

    return(
        <div className="im-clearnce-status">
            <StaffNavBar/>
            <div>
            {clearnaceStatus.map((val,key) => {
        return(
        
          <div className="im-card" key={key}>
              <br></br>
              <h5> Name : Imran Munawar</h5>
              <h5>RollNo: MCSF19A027 </h5>
              <h6>{val.date}</h6>
              <h6>{val.form}</h6>
             
          
              <button type="submit" className="im-accept">Accept</button>
              <button type="submit" className="im-reject" onClick={() => rejectClrearance(val._id)}>Reject</button>
              <br></br>
              <br></br>

          </div>
        );
      })}
            </div>    
            
        </div>
    )




}
   
 
export default StaffClearance;