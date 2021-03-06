import Link from 'next/link';
import Footer from "../components/footer";
import Header from "../components/header";
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from 'react-toastify';
import jwt_decode from "jwt-decode";
import getConfig from 'next/config';
import jQuery from 'jquery';



export default function LogIn(){
  const {publicRuntimeConfig} = getConfig();
  const baseApiUrl = publicRuntimeConfig.baseApiUrl;
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState();
  const recaptchaRef = React.useRef();
  const validEmail = String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

  async function handleLogin(e) {
    e.preventDefault()
    if (!email) {
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
    }else if (!validEmail) {
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
      jQuery("#loader-page").delay(100).fadeIn("slow");
        const request = new Request(baseApiUrl + '/auth', {
            method: 'POST',
            referrerPolicy:"unsafe-url",
            body: JSON.stringify({ email: email, password: password }),
            headers: new Headers({
              'X-Recaptcha-Token': recaptchaToken,
              'Content-Type': 'application/json',
              Accept: '*/*'
            })
          });
            const response = await fetch(request);
            if (response.status < 200 || response.status >= 300) {
              const data = await response.json();
              throw new Error(data.message);
            }
            const sessionToken = await response.text();
            const decodedToken = await jwt_decode(sessionToken);
            //Get the roles and save them ecrypted in localStorage
            const permissionsArray = await JSON.parse(
              JSON.stringify(decodedToken)
            ).role.split(',');
            window.localStorage.setItem('logs', permissionsArray);
            window.localStorage.setItem('sessionToken', sessionToken);
            router.push('/');
            jQuery("#loader-page").delay(100).fadeOut("slow");
            return Promise.resolve();
     } catch (error) {
      jQuery("#loader-page").delay(100).fadeOut("slow");
      toast.error(error +"!", {
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


return(<>
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
                    Login
                </h4>
                <form onSubmit={handleLogin}>
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
                        <button className="btn btn-main btn-lg w-100" type="submit">Sign In</button>
                    </div>
                </form>
                <div className="text-left my-4">
                    <div className="mb-1">
                       <Link href={{ pathname: '/forgotPassword' }}> 
                        <a className="fw-bold text-primary">Forgot password?</a>
                       </Link>
                    </div>
                    <div>Don't have an account? 
                    <Link href={{ pathname: '/register' }}> 
                    <a className="fw-bold text-primary"> Register Here</a>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
    <Footer></Footer>
    </>)
};