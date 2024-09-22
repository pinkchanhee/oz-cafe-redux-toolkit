import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { Route, Routes } from 'react-router-dom';
import { setMenu } from './redux/redux';  
import data from './assets/data';  

function App() {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.app.menu);  
  const cart = useSelector((state) => state.app.cart);  

  useEffect(() => {
    console.log("data.menu: ", data.menu);
    dispatch(setMenu(data.menu));  
  }, [dispatch]);

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Menu menu={menu} cart={cart} />} />
          <Route path='/cart' element={<Cart cart={cart} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;