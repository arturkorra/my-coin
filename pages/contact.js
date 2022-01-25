import Link from 'next/link';
import Footer from "../components/footer";
import Header from "../components/header";
import React from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';
import jQuery from 'jquery';
import getConfig from 'next/config';

function Contact(){
    const {publicRuntimeConfig} = getConfig();
    const baseApiUrl = publicRuntimeConfig.baseApiUrl;
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const validEmail = String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    
    async function handleContact(e) {
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
        }else if(!subject){
            toast.warn('Please fill the subject field!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme:"dark",
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else if(!message){
            toast.warn('Please fill the message!', {
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
                const request = new Request(baseApiUrl + '/contact', {
                method: 'POST',
                body: JSON.stringify({ username: username, email: email, subject: subject, message: message }),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Accept: '*/*'
                })
            });
                const response = await fetch(request);
                if (response.status < 200 || response.status >= 500) {
                    const data = await response.json();
                    throw new Error(data.message);
                }
                jQuery("#loader-page").delay(100).fadeOut("slow");
                toast.success('Thank you for contacting us!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    theme:"dark",
                    draggable: true,
                    progress: undefined,
                })
                setUsername("");
                setEmail("");
                setSubject("");
                setMessage("");
                return Promise.resolve();
        } catch (error) {
            jQuery("#loader-page").delay(100).fadeOut("slow");
            toast.error(error +'!', {
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
<div className="contact-item">
<h4 className="main-title py-4">Contact</h4>
<div className="contact-info-card pb-4">
<div className="d-flex align-items-center mb-3">
<div className="flex-shrink-0">
<svg fill="currentColor"  width="25" height="25"
viewBox="0 0 512.021 512.021"
xmlns="http://www.w3.org/2000/svg">
<path d="m367.988 512.021c-16.528 0-32.916-2.922-48.941-8.744-70.598-25.646-136.128-67.416-189.508-120.795s-95.15-118.91-120.795-189.508c-8.241-22.688-10.673-46.108-7.226-69.612 3.229-22.016 11.757-43.389 24.663-61.809 12.963-18.501 30.245-33.889 49.977-44.5 21.042-11.315 44.009-17.053 68.265-17.053 7.544 0 14.064 5.271 15.645 12.647l25.114 117.199c1.137 5.307-.494 10.829-4.331 14.667l-42.913 42.912c40.482 80.486 106.17 146.174 186.656 186.656l42.912-42.913c3.838-3.837 9.361-5.466 14.667-4.331l117.199 25.114c7.377 1.581 12.647 8.101 12.647 15.645 0 24.256-5.738 47.224-17.054 68.266-10.611 19.732-25.999 37.014-44.5 49.977-18.419 12.906-39.792 21.434-61.809 24.663-6.899 1.013-13.797 1.518-20.668 1.519zm-236.349-479.321c-31.995 3.532-60.393 20.302-79.251 47.217-21.206 30.265-26.151 67.49-13.567 102.132 49.304 135.726 155.425 241.847 291.151 291.151 34.641 12.584 71.866 7.64 102.132-13.567 26.915-18.858 43.685-47.256 47.217-79.251l-95.341-20.43-44.816 44.816c-4.769 4.769-12.015 6.036-18.117 3.168-95.19-44.72-172.242-121.772-216.962-216.962-2.867-6.103-1.601-13.349 3.168-18.117l44.816-44.816z"/>
</svg>
</div>
<div className="flex-grow-1 ms-3">
<h5 className="mb-1 fs-16">Mobile Phone</h5>
<span className="text-gray fs-14">+355-68-555-*** </span>
</div>
</div>
<div className="d-flex align-items-center mb-3">
<div className="flex-shrink-0">
<svg fill="currentColor"  width="25" height="25"
viewBox="0 0 479.058 479.058"
xmlns="http://www.w3.org/2000/svg">
<path d="m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"/>
</svg>
</div>
<div className="flex-grow-1 ms-3">
<h5 className="mb-1 fs-16">Email</h5>
<span className="text-gray fs-14">mycoincryptowallet@gmail.com </span>
</div>
</div>
<div className="d-flex align-items-center mb-3">
<div className="flex-shrink-0">
<svg fill="currentColor" width="25" height="25"
viewBox="0 0 512 512"
xmlns="http://www.w3.org/2000/svg">
<g>
<path d="m256.001 512c-11.176 0-21.184-5.796-26.77-15.505-.059-.102-.116-.205-.173-.308l-126.962-232.386c-30.306-55.471-29.437-121.312 2.325-176.124 31.073-53.624 86.265-86.385 147.639-87.637 2.622-.054 5.258-.054 7.878 0 61.375 1.252 116.567 34.013 147.641 87.637 31.762 54.812 32.631 120.652 2.325 176.124l-126.962 232.386c-.057.103-.114.206-.173.308-5.585 9.708-15.592 15.505-26.768 15.505zm-.001-480c-1.099 0-2.195.011-3.289.033-50.099 1.022-95.185 27.821-120.604 71.688-26.107 45.055-26.829 99.162-1.93 144.736l125.823 230.3 125.822-230.299c24.899-45.575 24.178-99.682-1.931-144.737-25.419-43.866-70.505-70.666-120.604-71.688-1.091-.022-2.188-.033-3.287-.033z"/>
<path d="m256 232c-39.701 0-72-32.299-72-72s32.299-72 72-72 72 32.299 72 72-32.298 72-72 72zm0-112c-22.056 0-40 17.944-40 40s17.944 40 40 40 40-17.944 40-40-17.944-40-40-40z"/>
</g>
</svg>
</div>
<div className="flex-grow-1 ms-3">
<h5 className="mb-1 fs-16">Our Location</h5>
<span className="text-gray fs-14"> Tirane Albania</span>
</div>
</div>
</div>
<div className="contact-form">
<form onSubmit={handleContact} id="contact-form">
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
placeholder="Subject"
type="text"
value={subject}
onChange={(e) => setSubject(e.target.value)}/>
</div>
<div className="form-group position-relative">
<textarea className="form-control" type="text"
name="comment" id="comment" cols="30" rows="5" 
placeholder="Message"
value={message}
onChange={(e) => setMessage(e.target.value)}></textarea>
</div>
<div className="form-group">
<button className="btn btn-main btn-lg w-100" id="submit-message" type="submit">Send</button>
<div className="toast toast-msg" id="msg" role="alert" aria-live="assertive" aria-atomic="true">
<div className="toast-body">
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</main>
<Footer></Footer>
</>
}
export default Contact;