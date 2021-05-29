import { Link } from "react-router-dom";

const HomeAdminHandleUser = () => {
  //eslint-disable-next-line

  return (
    <div className="home">
      <Link to="/userlists" style={{ 
          color: 'black',
          fontSize: '20px',
          borderRadius: '8px' 
        }}>Manage users</Link>
    </div>
  );
}
 
export default HomeAdminHandleUser;
