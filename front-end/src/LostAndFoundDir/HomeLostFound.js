import LSPostList from "./LSPostList";
import { useState } from "react";
import NavBarHome from '../RegistrationDir/NavbarHome';
import MiniNavBar from '../TradingAndSharingDir/MiniNavbar';

const HomeLostFound = () => {
  const [lfblogs, setBlogs] = useState([
    { title: 'lost first post', body: 'lorem ipsum...', author: 'Manager', id: 1 },
    { title: 'Welcome Student Assistant!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
    { title: 'PUCIT to FCIT', body: 'body4', author: 'Dr. Shahzad Sarwar', id: 4},
    { title: 'FCIT Faculty', body: 'body5', author: 'Sir Author', id: 5},
    { title: 'FCIT IT Head', body: 'body6', author: 'Sir. Murtaza', id: 6},
    { title: 'Operating System Master Teacher', body: 'body7', author: 'Maam Saadia Shahzad', id: 7},
    { title: 'Data Structure and Algorithm Expert', body: 'body8', author: 'Sir Fareed', id: 8}
  ])

  return (
    <div className="home">
    <NavBarHome/>
    <MiniNavBar title={"Lost & Found"}/>
      <LSPostList blogs={lfblogs} />
    </div>
  );
}
 
export default HomeLostFound;
