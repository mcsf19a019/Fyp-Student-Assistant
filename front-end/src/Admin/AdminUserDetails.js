import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();

  return (
    <div className="post-details">
      <h1>Done</h1>
      <h2>Post no {id}</h2>
    </div>
  );
}
 
export default UserDetails;
