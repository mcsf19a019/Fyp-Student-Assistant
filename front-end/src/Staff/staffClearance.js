//import { Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import StaffNavBar from './StaffNavBar';
import { Fragment } from "react";
import { useState } from "react";
const StaffClearance = () => {
    
    const [clearnaceStatus,setclearnceStatus] = useState([
        {name:'Anmian Khan',rollnbr:'MCSF19A026' ,appliaction:'Dear Sir/Madam , As I have completed my degree so, I want clearance from university.Thank You', id: 1},
        {name:'Imran Munawar',rollnbr:'MCSF19A027' ,appliaction:'Dear Sir/Madam , As I have completed my degree so, I want clearance from university.Thank You', id: 2},
        {name:'Zeeshan Faiz',rollnbr:'MCSF19A029' ,appliaction:'Dear Sir/Madam , As I have completed my degree so, I want clearance from university.Thank You', id: 3},
        {name:'Shoaib Sabir',rollnbr:'MCSF19A017' ,appliaction:'Dear Sir/Madam , As I have completed my degree so, I want clearance from university.Thank You', id: 4}
    ]) ;  

    return(
        <div className="im-clearnce-status">
            <StaffNavBar/>
            {clearnaceStatus.map((status)  =>(

                <div className="im-card">
                    <div className="im-studentsInfo">
                    <h4>{status.name}</h4>
                    <h4>{status.rollnbr}</h4>
                    <h5>{status.appliaction}</h5>
                    </div>
                   

                    <div className="im-clreance-buttons">
                          <button   className="im-accept"> Accept</button>
                          
                          <button className="im-reject" >Reject</button>
                    
                          
                          <br></br>
                          <br></br>
                    </div>

                    
                </div>

                
                
            )) }
            
        </div>
    )




}
   
 
export default StaffClearance;