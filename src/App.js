import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();
  // console.log(user);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <label htmlFor="sidebar" className="app__toggleSidebar">
                Toggle Sidebar
              </label>
              <input type="checkbox" name="" id="sidebar" />
              <Sidebar />
              <Switch>
                {/* React-Router -> Chat screen*/}
                <Route path="/room/:roomId">
                  {/* <h1>CHAT SCREEN</h1> */}
                  <Chat />
                </Route>
                <Route path="/">
                  <h1 className="welcome">Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
