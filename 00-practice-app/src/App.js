import React, {useState} from 'react';
import Header from './components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import './jass.css';
import './app.css';
import Portfolio from './Pages/Portfolio';

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const renderPage = () => {
  if (currentPage === "home") {
    return <Home />;
  }
  if (currentPage === "about") {
    return <About />;
  }
  if (currentPage === "portfolio") {
    return <Portfolio />;
  }
}
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <main className="app border-1">

   <Header currentPage = {currentPage} handlePageChange = {handlePageChange}/>
{renderPage()}
      
    </main>
  );
}

export default App;
