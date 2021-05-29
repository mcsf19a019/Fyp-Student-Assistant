import { Link } from "react-router-dom";



const LoginForm = () => {
    return ( 
        <div className="form-content">
            <form className="form">
             <div className="form-headings">
             <h2>Welcome to </h2>
            <h2>Student Assistance</h2>
                 </div>   
           
             <div className="form-inputs">
                 <label className="form-label" >Email</label>
                 <br></br>
                <input className="my-forminputs"
                type="email"
                name='name'
                placeholder ='Enter your email here'
                 ></input>
             </div>

             <div className="form-inputs">
                 <label className="form-label" >Password</label>
                <input className="my-forminputs"
                type="password"
                name='name'
                placeholder='Password'
                 ></input>
             </div>
<Link to="/Home">
             <button className='Signup-butn' type='submit'>
          Log In
        </button>
        </Link>
        <br></br>
        {/* <div className='forgot-password'>
            <Link to="/forgot" >Forgot Password</Link>
         
        </div> */}
            </form>
        </div>

     );
}
 
export default LoginForm;   