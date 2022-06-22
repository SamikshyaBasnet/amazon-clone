import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';


const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        ///some fancy firebase login
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                navigate("/");
                console.log("auth", auth)
            })
            .catch(error => setEmail(error.message))

    }

    const register = (e) => {
        e.preventDefault();

        ///some fancy firebase register 

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => setError(error.message))
    }

    return (
        <div className="login">
            <Link className='link' to="/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    className="login__logo"
                    alt="Logo" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email"
                        value={email}
                        required
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input type="password"
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Link className='link' to="/">
                        <button
                            className="login__signInButton"
                            type="submit"
                            onClick={signIn}

                        >Sign in</button>
                    </Link>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button
                    className="login__registerButton"
                    onClick={register}
                >Create your Amazon account</button>

                <p className='error'>{error}</p>
            </div>

        </div>
    )
}

export default Login