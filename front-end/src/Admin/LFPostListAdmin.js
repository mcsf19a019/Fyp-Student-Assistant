import { useState } from 'react';
const LFPostListAdmin = () => {
    const [posts,setposts]=useState([
        {title: 'Lost and Found First post', body: 'hello G :)', author: 'Sehar', id: 1 },
        {title: 'I.D card Found', body: 'I found an I.D card...', author: 'Ameena', id: 2 },
        {title: 'Motivation Lost', body: 'I lost my Motivation in studies if someone found it, give it to me. :D ', author: 'Maham', id: 3 }
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
 
export default LFPostListAdmin;