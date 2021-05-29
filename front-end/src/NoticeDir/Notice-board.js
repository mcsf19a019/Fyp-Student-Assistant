import { useState, useEffect } from 'react';
import NoticeList from './NoticeList';
import Importants from './Importants';
import NavBarHome from '../RegistrationDir/NavbarHome';
import Axios from 'axios';

const NoticeBoard = () => {
    const [notices, setnotice] = useState([]);
    useEffect(() => {
      Axios.get("http://localhost:3001/getNotices").then((Response) =>{  
        setnotice(Response.data);
      })
      
    }, [])
    return (  
        <div className="noticeboard">
        <NavBarHome/>
        <div className="flex2">
      <div className="childT 1">
        <h3>Announcments:</h3>
      </div>
      <div className="childT 2">
        <h3>Importants:</h3>
      </div>
    </div>
    <div className="flex">
        <div className="outer"> 
        <NoticeList notices={notices} user={"student"}/>
        </div>
        <Importants className="outer 2"/>
        </div>
    </div>
    );
}
 
export default NoticeBoard;