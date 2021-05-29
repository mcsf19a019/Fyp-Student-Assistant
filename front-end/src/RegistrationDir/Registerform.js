import { Link,useHistory } from "react-router-dom";
import Navbar from './NavBar';
import { useState } from 'react';
import Axios from 'axios';


const Registerform = () => {
    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [confirmPass, SetconfirmPass] = useState('');
    const[studentType,setStudentType]=useState('student');
    let history = useHistory();

    const AddUserToDb=()=>{
        Axios.post("http://localhost:3001/register",
        {
            name,email,password,confirmPass,studentType
        });
        history.push("/login");
    };

    return (

        <div className="form-content">
            <Navbar />
            <form onSubmit={AddUserToDb}className="form1">
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
                        onChange={(event) => {
                            SetName(event.target.value)
                        }}
                    ></input>
                </div>

                <div className="register-inputs">
                    <label className="form-label">Email</label>
                    <input className="forminputs"
                        type="email"
                        required
                        name='email'
                        placeholder='jon@pucit.edu.pk'
                        onChange={(event) => {
                            SetEmail(event.target.value)
                        }}
                    ></input>
                </div>

                <div className="register-inputs">
                    <label className="form-label">Password</label>
                    <input className="forminputs"
                        type="password"
                        required
                        minLength="8"
                        name='password'
                        placeholder='Password'
                        onChange={(event) => {
                            SetPassword(event.target.value)
                        }}
                    ></input>
                </div>

                <div className="register-inputs">
                    <label className="form-label"> Confirm Password</label>
                    <input className="forminputs"
                        type="password"
                        required
                        minLength="8"
                        name='password'
                        placeholder='Confirm Password'
                        onChange={(event) => {
                            SetconfirmPass(event.target.value)
                        }}
                    ></input>
                </div>

                {/* <Link to="/login"> */}
                    <button className='Signup-butn' >

                        Sign Up
                    </button>
                {/* </Link> */}
                <span className='form-input-login'>
                    <h5>Already have an account? Login</h5>
                    <Link to="/login"> here </Link>
                </span>
            </form>


        </div>
    );
}

export default Registerform;