import { useState , useEffect} from 'react';
import Axios from 'axios';

const TEPostListAdmin = () => {

    const [posts,setposts]=useState([]);
    const [status,setstatus]=useState(Boolean);
    useEffect(() => {
        Axios.get("http://localhost:3001/getTePosts").then((Response) =>{  
          setposts(Response.data);
        })        
      }, [])

    const updateStatus =(Boolean)=>{
        Axios.put("http://localhost:3001/updateTePosts",{
            id:id,
            status:true,
        });
    }
    const deletePost =(_id)=>{
        Axios.delete(`http://localhost:3001/deleteTePosts/${_id}`)
    };
    return (
        <div className="TSListAdmin">     
            {posts.map((posts)=>(
                <div className="post-preview" key={posts.id}>
                    <h2>{posts.title}</h2>
                    <p>{posts.content}</p>
                    <href>{posts.pic}</href>
                    <h2>{posts.date}</h2>
                    <button onClick={()=>updateStatus(posts._id)}>Approve</button>
                    <button onClick={()=>deletePost(posts._id)}>Delete</button>
                </div>
            ))}
        </div>
     );
}
 
export default TEPostListAdmin;