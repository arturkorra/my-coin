import Link from 'next/link';
import Footer from "../components/footer";
import Header from "../components/header";

function ForgotPassword(){
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
                    <form action="#">
                        <div className="form-group">
                            <input className="form-control"  type="email" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-main btn-lg w-100" type="submit">Reset Password</button>
                        </div>
                    </form>
                <div className="text-left my-4">
                    <div>Back to
                        <Link href="login" >
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