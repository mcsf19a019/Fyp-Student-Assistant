import { useState } from 'react';
const TSPostListAdmin = () => {
    const [posts,setposts]=useState([
        {title: 'Selling Calculus Notes', body: 'I want to sell...', author: 'Sehar', id: 1 },
        {title: 'CR seat Available', body: 'I want to sell my CR position :D', author: 'Ameena', id: 2 },
        {title: 'No notes, No books', body: 'I am back bencher. I do not have any books & notes :D ', author: 'Maham', id: 3 }
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
 
export default TSPostListAdmin;