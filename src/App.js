import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/cart';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
