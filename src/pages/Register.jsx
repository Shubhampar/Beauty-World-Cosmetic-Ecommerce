import React,{useState}from 'react'
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);
  
    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
    };
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Check if user is already registered with the given email
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const isExistingUser = existingUsers.some((user) => user.email === email);
  
      if (isExistingUser) {
        alert("You are already signed up. Please log in.");
        return;
      }
  
      // Save new user data
      const newUser = { firstName, email, password };
      localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
  
      setIsRegistered(true);
      window.location.href = "./Login"
      
     
    };
  
    const handleSignInClick = () => {
      window.location.href = "./Login"
    };
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                    {isRegistered ? (
        {handleSignInClick}
      ) : (
                        <form onSubmit={handleSubmit}>
                            <div class="form my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    value={email} 
                                    onChange={handleEmailChange} 
                                    required
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="Password"
                                    value={password} 
                                    onChange={handlePasswordChange}
                                    required
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" onClick={handleSignInClick}>
                                    Register
                                </button>
                            </div>
                        </form>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register