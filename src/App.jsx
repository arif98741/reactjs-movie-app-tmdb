import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/inc/Header.jsx';
import SearchBox from './Components/SearchBox.jsx';
import Movies from './Components/Movies.jsx';
import Footer from './Components/inc/Footer.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  return (
    <>
      <Header />
      <SearchBox onSearch={setSearchQuery} setCurrentPage={setCurrentPage} />



      <Movies searchQuery={searchQuery}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        setTotalPages={setTotalPages} />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Footer />
    </>

  )
}

export default App
