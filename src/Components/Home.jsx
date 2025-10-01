import { ToastContainer } from "react-toastify";
import Movies from "./Movies";
import SearchBox from "./SearchBox";
import Header from "./inc/Header";
import Footer from "./inc/Footer";

const Home = ({
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages }) => {
    return (
        <>
            <Header />
            <SearchBox onSearch={setSearchQuery} setCurrentPage={setCurrentPage} />
            <Movies searchQuery={searchQuery}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
                setTotalPages={setTotalPages} />

           
            <Footer />
        </>
    );
}
export default Home;