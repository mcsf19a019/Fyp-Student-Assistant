import { useState } from 'react';

const TEPostListAdmin = () => {

    const [posts,setposts]=useState([
        {title: 'Trips & events First post', body: 'hello G :)', author: 'Sehar', id: 1 },
        {title: 'Going to Moon ', body: 'We are going to Moon in dreams....', author: 'Ameena', id: 2 },
        {title: 'Arranging an Event', body: 'I am arraning an event for Lazy people like me...', author: 'Maham', id: 3 }
    ]);    
    
    const handleDelete =(id)=>{
        const newPost= posts.filter(posts=>posts.id !==id);
        setposts(newPost);
    }
 
    return (
        <div className="TSListAdmin">     
            {posts.map((posts)=>(
                <div className="post-preview" key={posts.id}>
                    <h2>{posts.title}</h2>
                    <p>{posts.body}</p>
                    <h5>Post by {posts.author}</h5>
                    <button>Approve</button>
                    <button onClick={()=> handleDelete(posts.id)}>Delete</button>
                </div>
            ))}
        </div>
     );
}
 
export default TEPostListAdmin;