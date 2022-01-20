import withAuth from "./withAuth";
import Footer from "../components/footer";
import Header from "../components/header";

function Settings(){
    return<>
    <Header></Header>
<Footer></Footer>
</>
}
export default withAuth(Settings);