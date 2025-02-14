import Header from '../Components/Header/Header';
import './App.module.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardList from '../Pages/Products/Products';
import CreateProduct from '../Pages/CreateProduct/CreateProduct';
import Card from '../Components/Card/Card';

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/products" element={<CardList />} />
          <Route path="/products/:id" element={<Card />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Routes>       
      </div>
    </Router>
  );
};

export default App;