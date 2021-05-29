import { Link } from 'react-router-dom';

const TEPostList = ({ blogs }) => {
  return (
    <div className="post-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/teblogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default TEPostList;