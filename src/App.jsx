import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/inc/Header.jsx';
import Section from './Components/Section';
import SearchBox from './Components/SearchBox.jsx';
import Movies from './Components/Movies.jsx';
import Pagination from './Components/partials/Pagination.jsx';
import Footer from './Components/inc/Footer.jsx';

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

      <Pagination currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage} />
      <Footer />
    </>
    
  )
}

export default App
