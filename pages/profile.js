import withAuth from "./withAuth";
import Footer from "../components/footer";
import Header from "../components/header";
import {Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement, registerables } from 'chart.js';
import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useState } from 'react';
import getConfig from 'next/config';
import jQuery from 'jquery';
import Loader from "../components/loader";
import Compress from 'compress.js';

function Profile(){
    const {publicRuntimeConfig} = getConfig();
    const baseApiUrl = publicRuntimeConfig.baseApiUrl;
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [image, setImage] = useState("");
    const [profileId ,setProfileId] = useState("");
    const validEmail = String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    const validMobile = String(mobile).toLowerCase().match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
    const [profileData, setProfileData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        async function getProfile(){
            try {
                const token = window.localStorage.getItem('sessionToken');
                const request = new Request(baseApiUrl + '/profile', {
                    method: 'GET',
                    referrerPolicy:"unsafe-url",
                    headers: new Headers({
                        'Authorization': 'Bearer '+token,
                        'Content-Type': 'application/json',
                        Accept: '*/*'
                    })
                });
                const response = await fetch(request);
                const data = await response.json();
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(profileData.message);
                }
                setEmail(data.email);
                setUsername(data.username);
                setMobile(data.mobile);
                setAddress(data.address);
                setImage(data.image);
                setProfileId(data.profileId);
                setProfileData(data)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                toast.error(error+"!", {
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
        getProfile()
    }, []);
    Chart.register(ArcElement);
    //Chart.register(...registerables);
    
    const dataChart = {
        labels: [
            'Bitcoin',
            'Etherum',
            'Solana'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };
    
    async function handleUpdate(e) {
        e.preventDefault()
        try {
            jQuery("#loader-page").delay(100).fadeIn("slow");
            const token = window.localStorage.getItem('sessionToken'); 
            const request = new Request(baseApiUrl + '/profile', {
                method: 'PUT',
                body: JSON.stringify({ email: email, username: username,
                    address:address, mobile:mobile, image:image, profileId:profileId}),
                    headers: new Headers({
                        'Authorization': 'Bearer '+token,
                        'Content-Type': 'application/json',
                        Accept: '*/*'
                    })
                });
                const response = await fetch(request);
                const newData = await response.json();
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
                    throw new Error(data.message);
                }
            setEmail(newData.email);
            setUsername(newData.username);
            setMobile(newData.mobile);
            setAddress(newData.address);
            setImage(newData.image);
            setProfileId(newData.profileId);
            setProfileData(newData);
            jQuery("#loader-page").delay(100).fadeOut("slow");
            return Promise.resolve();
            } catch (error) {
                jQuery("#loader-page").delay(100).fadeOut("slow");
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
            }
        };
        function encodeImageFileAsURL(event) {
            var file =event.target.files[0];
            var reader = new FileReader();
            reader.onloadend = function() {
            console.log('RESULT', reader.result)
            setImage(reader.result);
            }
            reader.readAsDataURL(file);
          };

          if(isLoading){
            return <Loader></Loader>
        } 
        return<>
        <Header></Header>
        <main className="main-content">
        <div className="container">
        <div className="profile-item">
        <div className="profile-thumbnail-item position-relative align-items-center py-4">
        <div className="thumbnail position-relative text-center">
        <img id="avatar" src={image ? image  : "/logo.png"} onChange={(e) => setImage(e.target.value)} className="rounded-circle" alt="avatar"/>
        <div className="change-thumbnail">
        <form>
        <input accept="image/*" onChange={encodeImageFileAsURL} className="form-control-file" type="file"/>
        <button>
        <svg version="1.1"  width="16" height="16" fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        x="0px" y="0px"
        viewBox="0 0 471.04 471.04"
        xmlSpace="preserve">
        <path d="M414.72,112.64h-49.152l-27.136-40.96c-10.24-15.36-28.16-24.576-46.592-24.576H179.2
        c-18.432,0-36.352,9.216-46.592,24.576l-27.136,40.96H56.32C25.088,112.64,0,137.728,0,168.96v198.656
        c0,31.232,25.088,56.32,56.32,56.32h358.4c31.232,0,56.32-25.088,56.32-56.32V168.96C471.04,137.728,445.952,112.64,414.72,112.64
        z M235.52,377.856c-70.144,0-126.976-56.832-126.976-126.976c0-70.144,56.832-126.464,126.976-126.464
        s126.976,56.832,126.976,126.976C362.496,321.024,305.664,377.856,235.52,377.856z M407.552,192c-0.512,0-1.024,0-2.048,0h-20.48
        c-9.216-0.512-16.384-8.192-15.872-17.408c0.512-8.704,7.168-15.36,15.872-15.872h20.48c9.216-0.512,16.896,6.656,17.408,15.872
        C423.424,183.808,416.768,191.488,407.552,192z"/>
        <path d="M235.52,180.736c-38.912,0-70.656,31.744-70.656,70.656s31.744,70.144,70.656,70.144s70.656-31.744,70.656-70.656
        C306.176,211.968,274.432,180.736,235.52,180.736z"/>
        </svg>
        </button>
        </form>
        </div>
        <h4 className="my-2">{username}</h4>
        <p className="mb-0 text-gray">ID: {profileId}</p>
        </div>
        </div>
        <div className="card">
        <div className="card-body d-flex align-items-center my-auto">
        <div className="me-3">
        <Doughnut
        data={dataChart}
        width={80}
        height={80}>
        </Doughnut>
        </div>
        <div>
        <h2>0.0 BTC</h2>
        <p className="mb-0 text-gray">$0USD</p>
        </div>
        </div>
        </div>
        <div className="profile-info-item pt-4">
        <h4 className="main-title py-4">Account Info</h4>
        <form onSubmit={handleUpdate}>
        <div className="form-group">
        <input type="text" className="form-control" placeholder="Username" value={username}
        onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
        <input type="text" className="form-control" placeholder="Email"  value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
        <input type="text" className="form-control" placeholder="Address"  value={address}
        onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div className="form-group">
        <input type="text" className="form-control" placeholder="Mobile"  value={mobile}
        onChange={(e) => setMobile(e.target.value)}/>
        </div>
        <div className="form-group">
        <button className="btn btn-main btn-lg w-100" type="submit">Update</button>
        </div>
        </form>
        </div>
        </div>
        </div>
        </main>
        <Footer active="profile"></Footer>
        </>
    }
    export default withAuth(Profile);