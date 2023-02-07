import { Routes, Route } from "react-router-dom";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home"
import Project from "../Pages/Project";

const AllRoutes = () => {
    return <div>
      <Routes>
        <Route path={"/home"} element={<Home/>}/>
        <Route path={"/project"} element={<Project/>}/>
        <Route path={"/contact"} element={<Contact/>}/>
      </Routes>
    </div>;
  };
  
  export { AllRoutes };