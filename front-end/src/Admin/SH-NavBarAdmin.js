import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import logo from './image-removebg-preview.png';

//Maham's import
import TEPostListAdmin from './TEPostListAdmin';
import TSPostListAdmin from './TSPostListAdmin';

const SHNavBarAdmin = () => {
    return ( 
        <div className="navbar">
        <nav className="navbar navbar-expand-sm ">
        <a class="navbar-brand" href="#">
            <img src={logo} width="331" heigth="110" className="d-inline-block align top" alt="STUDENT ASSISTANCE"></img>
        </a>
        <div className="adminNav-content">
         
        <ul className="navbar-nav" >
        <li className="nav-item"><Link to="/admin" className="nav-link">NOTICES</Link></li>
            <li className="nav-item"><a href="#" className="nav-link">USERS</a></li>
            <li className="nav-item"><a href="#" className="nav-link">POSTS</a></li>
            <li className="nav-item"><a href="#" className="nav-link">LOG OUT</a></li>
        </ul>
        </div>
        
        </nav>
        <div className="nav-buttons">
            <Link to="/tspostListAdmin" alt="allPosts" className="SH-Admin-nav-button">View Posts</Link>
            <Link to="/tepostListAdmin" alt="Posts" className="SH-Admin-nav-button">Manage Posts</Link>
            <button className="SH-Admin-nav-button">View Users</button>
            <Link to="/adminUserlists" className="SH-Admin-nav-button">Manage users</Link>
        </div>
        </div>

        
     );
}
 
export default SHNavBarAdmin;