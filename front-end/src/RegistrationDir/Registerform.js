import { Link } from "react-router-dom";
import Navbar from './NavBar';

const Registerform = () => {
    return (

        <div className="form-content">
            <Navbar />
            <form className="form1">
                <div className="form-headings">
                    <h2>Let's get started today!</h2>
                </div>

                <div className="register-inputs">
                    <label className="form-label">Name</label>
                    <input className="forminputs"
                        type="text"
                        required
                        name='name'
                        placeholder='Enter your name here'
                    ></input>
                </div>

                <div className="register-inputs">
                    <label className="form-label">Email</label>
                    <input className="forminputs"
                        type="email"
                        required
                        name='email'
                        placeholder='jon@pucit.edu.pk'
                    ></input>
                </div>

                <div className="register-inputs">
                    <label className="form-label">Password</label>
                    <input className="forminputs"
                        type="password"
                        required
                        name='password'
                        placeholder='Password'
                    ></input>
                </div>

                <div className="register-inputs">
                    <label className="form-label"> Confirm Password</label>
                    <input className="forminputs"
                        type="password"
                        required
                        name='password'
                        placeholder='Confirm Password'
                    ></input>
                </div>

                {/* <Link to="/login"> */}
                    <button className='Signup-butn' type='submit'>
                        Sign Up
                     </button>
                {/* </Link> */}
                <span className='form-input-login'>
                    <h5>Already have an account? Login</h5>
                    <Link to="/login"> here </Link>

                    {/*  Already have an account? Login <a href='#'>here</a>*/}
                </span>
            </form>


        </div>
    );
}

export default Registerform;