import React, { useState } from 'react';
import './LoginRegister.css'; // Add CSS styling for login and register

const LoginRegister = () => {
    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <div className="login-register">
            {isRegistering ? (
                <form className="register-form">
                    <h2>Register</h2>
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required />
                    <input type="date" placeholder="Date of Birth" required />
                    <input type="text" placeholder="Address" required />
                    <input type="text" placeholder="ID Number" required />
                    <input type="tel" placeholder="Phone Number" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder="Confirm Password" required />
                    <button type="submit">Register</button>
                    <p onClick={() => setIsRegistering(false)}>Have an account? Login</p>
                </form>
            ) : (
                <form className="login-form">
                    <h2>Login</h2>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                    <p onClick={() => setIsRegistering(true)}>Don't have an account? Register</p>
                </form>
            )}
        </div>
    );
};

export default LoginRegister;
