import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./components/About";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  return(

  <div className ="page-container">
    <div className ="content-wrap">
   
   <BrowserRouter>
   <NavBar />
   <Switch>
    <Route component={About} path="/" exact/>
    <Route component={About} path="/about" />
    {/* <Route component={SinglePost} path="/post/:slug" /> */}
    <Route component={Post} path="/portfolio" />
    <Route component={Project} path="/contact" />
   </Switch>  
   </BrowserRouter>
   </div>
   <Footer />
   </div>

  )
}

export default App;
