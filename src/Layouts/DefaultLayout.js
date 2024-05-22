import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div style={{
                paddingTop: "100px"
            }} className="container">
                {children}
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout; 