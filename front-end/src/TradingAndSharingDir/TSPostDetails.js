import { useParams } from "react-router-dom";
import NavBarHome from '../RegistrationDir/NavbarHome';
import MiniNavBar from './MiniNavbar';

const TSPostDetails = () => {
  const { id } = useParams();

  return (
    <div className="post-details">
    <NavBarHome/>
    <MiniNavBar title={"Trading & Sharing"}/>
      <h1>Done</h1>
      <h2>Trading Post no {id}</h2>
    </div>
  );
}
 
export default TSPostDetails;