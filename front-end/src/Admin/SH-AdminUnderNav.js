import {useState} from 'react';
import NoticeList from './SH-NoticeList';
const SHAdminUnderNav = () => {

  const[Notices,setNotices]=useState([
              
    {title : 'Trip',body:'Trip to naran kaghan,All classes of MSC morning,evening included',author:'Sehar',id:1},
    {title : 'Shahkar',body:'A Photography Event,All classes of MSC morning,evening included',author:'Mahnoor',id:2},
    {title : 'BDS',body:'A Blood Donating Event,All classes of MSC morning,evening included',author:'Aymen',id:3}
  ]);
    return (
        <div className="SH-AdminUnderNav">
            <NoticeList Notices={Notices} title="All Notices" /> 
        </div>
      );
}
 
export default SHAdminUnderNav;