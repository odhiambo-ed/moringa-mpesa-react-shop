import './App.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StoreIcon from '@mui/icons-material/Store';

function App() {
  return (
    <div className="App">
      <div className="header__logo">
        <StoreIcon />
        <h1>edSHOP</h1>
      </div>
      <div className="header__search">
        <input className="search__input" type="text" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="item__lineOne">
            Hi Guest
          </span>
          <span className="item__lineTwo">
            Sign In
          </span>         
        </div>
        <div className="nav__item">
          <span className="item__lineOne">
            Your
          </span>
          <span className="item__lineTwo">
            Shop
          </span>
        </div>
        <div className="nav__item">
          <span className="item__lineOne">
            <AddShoppingCartIcon />
          </span>
          <span className="item__lineTwo">
            1
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
