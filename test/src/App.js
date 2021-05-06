import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Home</a>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="form-signin">
        <form>
          <img src="https://www.pinclipart.com/picdir/big/117-1177303_1-dbs-group-holdings-ltd-dbs-bank-logo.png" width="250" height="auto"/>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Email address</label>
          </div>

          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
              <label for="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
      </main>
    </div>
  );
}

export default App;
