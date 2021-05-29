const NoticeList = ({ Notices, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(blogs);
  
    return (
      <div className="notice-list">
        <h2>{ title }</h2>
        {Notices.map(notice => (
          <div className="SH-notice-preview" key={notice.id} >
            <h2>{ notice.title }</h2>
            <p>Written by { notice.author }</p>
            <button className="SH-Admin-approveBtn" >Approve</button>
            <button className="SH-Admin-approveBtn" >Disapprove</button>
          </div>
        ))}
      </div>
    );
  }
   
  export default NoticeList;