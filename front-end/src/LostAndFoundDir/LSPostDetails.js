import { useParams } from "react-router-dom";
import NavBarHome from '../RegistrationDir/NavbarHome';
import MiniNavBar from '../TradingAndSharingDir/MiniNavbar';

const LSPostDetails = () => {
  const { id } = useParams();

  return (
    <div className="post-details">
      <NavBarHome/>
      <MiniNavBar title={"Lost & Found"}/>
      <h1>Done</h1>
      <h2>Lost Post no {id}</h2>
    </div>
  );
}
 
export default LSPostDetails;

/* { blog && (
        <div>
          <h2>{ blog.title }</h2>
          <h3>Written by { blog.author }</h3>
          <p>{ blog.body }</p>
          <h5>{id}</h5>
          </div>
      )}*/