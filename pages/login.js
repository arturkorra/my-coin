import Link from 'next/link';
import Footer from "../components/footer";
import Header from "../components/header";

function LogIn(){
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
                    Login
                </h4>
                <form action="#">
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-main btn-lg w-100" type="submit">Sign In</button>
                    </div>
                </form>
                <div className="text-left my-4">
                    <div className="mb-1">
                       <Link href="forgotPassword"> 
                        <a className="fw-bold text-primary">Forgot password?</a>
                       </Link>
                    </div>
                    <div>Don't have an account? 
                    <Link href="register"> 
                    <a className="fw-bold text-primary"> Register Here</a>
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
export default LogIn;