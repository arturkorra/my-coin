import Link from 'next/link';
import Footer from "../components/footer";
import Header from "../components/header";
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from 'react-toastify';

function Register(){
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState();
  const recaptchaRef = React.useRef();
  const validEmail = String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

  async function handleRegister(e) {
    e.preventDefault()
    if (!username) {
        toast.warn('Please fill the username field!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme:"dark",
          draggable: true,
          progress: undefined,
          });
        }else if (!email) {
        toast.warn('Please fill the email field!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme:"dark",
        draggable: true,
        progress: undefined,
        });
     } else if (!validEmail) {
            toast.warn('Please enter a valid email!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              theme:"dark",
              draggable: true,
              progress: undefined,
              });
    }else if(!password){
      toast.warn('Please fill the password field!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        theme:"dark",
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }else if(!recaptchaToken){
      toast.warn('Please fill the recaptcha!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme:"dark",
        draggable: true,
        progress: undefined,
        });
    }else{
    try {
        const request = new Request('http://localhost:8080/my-coin-api' + '/register', {
            method: 'POST',
            body: JSON.stringify({ username: username, email: email, password: password }),
            headers: new Headers({
              'X-Recaptcha-Token': recaptchaToken,
              'Content-Type': 'application/json',
              Accept: '*/*'
            })
          });
          try {
            const response = await fetch(request);
            if (response.status < 200 || response.status >= 300) {
              const data = await response.json();
              toast.error(data.message+'!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme:"dark",
                draggable: true,
                progress: undefined,
                });
                // reset the captcha 
              recaptchaRef.current.reset();
              throw new Error(data.message);
            }
            router.push('/login');
            return Promise.resolve();
          } catch (e) {
            toast.error(e, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              theme:"dark",
              draggable: true,
              progress: undefined,
              });
              // reset the captcha 
              recaptchaRef.current.reset()
          }
     } catch (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme:"dark",
        draggable: true,
        progress: undefined,
        });
        // reset the captcha 
        recaptchaRef.current.reset()
        
    }
  }
  };
    
      const verifyCallback = (recaptchaToken) => {
        setRecaptchaToken(recaptchaToken);
      };

return <>
<Header></Header>
<main className="main-content">
<div className="container">
    <div className="login-item">
        <div className="logo-item py-4">
            <div className="d-flex justify-content-center text-center">
                <img src="/logo.png" alt="logo" className="logo-main"/>
            </div>
        </div>
        <div className="login-card-form">
            <h4 className="main-title py-4">
                Register
            </h4>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                     <input className="form-control" placeholder="Username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                <div className="form-group">
                        <input className="form-control" placeholder="Email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control"  
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <ReCAPTCHA 
                        ref={recaptchaRef}
                        size="normal"
                        theme="dark"
                        sitekey="6Lem5_cdAAAAAOGTlGUTApVlelyg9wi_XT3H92db"
                        onChange={verifyCallback}>
                        </ReCAPTCHA>
                     </div>
                <div className="form-group">
                    <button className="btn btn-main btn-lg w-100" type="submit">Sign Up</button>
                </div>
            </form>
            <div className="text-left my-4">
                <div>Already have an account? 
                <Link href={{ pathname: '/login' }}>
                 <a className="fw-bold text-primary"> Login</a>
                </Link>
                </div>
            </div>
        </div>
    </div>
</div>
</main>
<Footer></Footer>
</>
}
export default Register;