import Link from 'next/link';
import Footer from "../components/footer";
import Header from "../components/header";
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Image from 'next/image';
import getConfig from 'next/config';
import jQuery from 'jquery';

function ForgotPassword(){
    const {publicRuntimeConfig} = getConfig();
    const baseApiUrl = publicRuntimeConfig.baseApiUrl;
    const router = useRouter();
    const [email, setEmail] = useState("");
    const validEmail = String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    
    async function handleReset(e) {
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
        }else{
            try {
                jQuery("#loader-page").delay(100).fadeIn("slow");
                const request = new Request(baseApiUrl + '/register/resetPassword', {
                method: 'POST',
                headers: new Headers({
                    'Email': email,
                    'Content-Type': 'application/json',
                    Accept: '*/*'
                })
            });
                const response = await fetch(request);
                if (response.status < 200 || response.status >= 300) {
                    const data = await response.json();
                    throw new Error(data.message);
                }
                toast.success('New password was sent to your Email! Check Spam also!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    theme:"dark",
                    draggable: true,
                    progress: undefined,
                })
                jQuery("#loader-page").delay(100).fadeOut("slow");
                router.push('/login');
                return Promise.resolve();
        } catch (error) {
            jQuery("#loader-page").delay(100).fadeOut("slow");
            toast.error(error+'!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme:"dark",
                draggable: true,
                progress: undefined,
            });
        }
    }
};

return<>
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
Reset Password
</h4>
<form onSubmit={handleReset}>
<div className="form-group">
<input className="form-control" placeholder="Email"
type="text"
value={email}
onChange={(e) => setEmail(e.target.value)}/>
</div>
<div className="form-group">
<button className="btn btn-main btn-lg w-100" type="submit">Reset Password</button>
</div>
</form>
<div className="text-left my-4">
<div>Back to
<Link href={{ pathname: '/login' }}>
<a className="fw-bold text-primary"> Login </a>
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
export default ForgotPassword;