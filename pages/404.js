import Link from 'next/link';
import Footer from "../components/footer";
import Header from "../components/header";
import React from 'react';
import Image from 'next/image';

function Error(){
    return<>
    <Header></Header>
    <main>
    <div className="error-item d-flex align-items-center justify-content-center text-center">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5">
                    <div className="pb-5">
                        <img src="/error.png" alt="404" className="img-fluid"/>
                    </div>
                    <p>Sorry Page Not Fount</p>
                    <Link href={{ pathname: '/' }}>
                    <a className="btn btn-main btn-lg w-100 mt-3">
                        Go back to home
                    </a>
                    </Link>
                    
                </div>
            </div>
        </div>
    </div>
</main>
    <Footer></Footer>
    </>
}
export default Error;