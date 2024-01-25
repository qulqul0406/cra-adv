import { useReducer } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/cart';
import { CartContext } from './store';

function App() {
  const cartReducer = useReducer((state, action) => {
    const cartList = [...state.cartList]
    console.log(action)
    switch(action.type){
      case 'ADD_TO_CART':
        cartList.push(action.payload)
        return {
          ...state,
          cartList,
        }
      default:
        return state;
    }
  }, {
    cartList:[],
  })
  return (
    <CartContext.Provider value={cartReducer}>
      <Navbar />
      <div className='container mt-4'>
        <div className="row">
          <div className="col-md-7">
            <Products />
          </div>
          <div className="col-md-5">
            <Cart />
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;
