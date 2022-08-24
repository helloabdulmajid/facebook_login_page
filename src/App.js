import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="home">
        <div className="leftSide">
          <h1 className="fb_title">facebook</h1>
          <h3 className="fb_subtitle">
            Facebook helps you connect and share with the people in your life.
          </h3>
        </div>
        <div className="rightSide">
          <div className="card">
            <div className="form_card">
              <form>
                <input
                  type="email"
                  id="name"
                  placeholder="Email address or phone number"
                />

                <input type="password" id="name" placeholder="Password" />

                <button className="login_btn">Login</button>
                <p>Forgotten password?</p>
                <hr/>
                <button className="create_btn">Create New Account</button>
              </form>
            </div>
          </div>
          <p className="card_footer">
          <span>Create a Page</span> for a celebrity, brand or business.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
