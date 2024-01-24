import './asserts/all.scss';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">甜點蛋糕店</span>
          <button className='btn btn-outline-dark position-relative' type='submit'>購物車
            <span className="badge rounded-pill bg-danger 
              position-absolute top-0 start-100 translate-middle">99</span>
          </button>
        </div>
      </nav>
      <div className='container mt-4'>
        <div className="row">
          <div className="col-md-7">
            <div className="row row-cols-3 g-3">
              <div className="col">
                <div class="card">
                  <img src="https://images.unsplash.com/photo-1682687220777-2c60708d6889?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" 
                  class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h6 class="card-title">啊吧啊吧
                      <span className='float-end'>NT$220</span>
                    </h6>
                    <button type='button' class="btn btn-outline-primary w-100">加入購物車</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <img src="https://images.unsplash.com/photo-1682687220777-2c60708d6889?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" 
                  class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h6 class="card-title">啊吧啊吧
                      <span className='float-end'>NT$220</span>
                    </h6>
                    <button type='button' class="btn btn-outline-primary w-100">加入購物車</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <img src="https://images.unsplash.com/photo-1682687220777-2c60708d6889?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" 
                  class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h6 class="card-title">啊吧啊吧
                      <span className='float-end'>NT$220</span>
                    </h6>
                    <button type='button' class="btn btn-outline-primary w-100">加入購物車</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <img src="https://images.unsplash.com/photo-1682687220305-ce8a9ab237b1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" 
                  class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h6 class="card-title">啊吧啊吧
                      <span className='float-end'>NT$220</span>
                    </h6>
                    <button type='button' class="btn btn-outline-primary w-100">加入購物車</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <img src="https://images.unsplash.com/photo-1682687220777-2c60708d6889?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" 
                  class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h6 class="card-title">啊吧啊吧
                      <span className='float-end'>NT$220</span>
                    </h6>
                    <button type='button' class="btn btn-outline-primary w-100">加入購物車</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="bg-light p-3">
              <table className="table align-middle">
                <tbody>
                  <tr>
                    <td>
                      <a href='#'>x</a>
                    </td>
                    <td>
                      <img src='https://images.unsplash.com/photo-1682687220305-ce8a9ab237b1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D' 
                      className='table-image'
                      alt=''/>
                    </td>
                    <td>啊吧啊吧
                      <br/>
                      <small className='text-muted'>NT$ 220</small>
                    </td>
                    <td>
                      <select name='' id='' className='form-select'></select>
                    </td>
                    <td className='text-end'>NT$ 440</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className='text-end'>
                    總金額 NT$ 440
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
