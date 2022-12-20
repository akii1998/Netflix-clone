// import React from "react";
// import {  Routes, Route, BrowserRouter } from "react-router-dom";

// import "./App.css";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <div className="App">
//         <Route path='/' element={<Home/>} />
//       </div>
//     </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import {  createBrowserRouter ,RouterProvider } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import NetflixShowPage from "./pages/NetflixShowPage";

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/netflix-show',
    element:<NetflixShowPage/>
  }
])

function App() {
  return (
      <div className="App">
        <RouterProvider router={router} />
        <Footer/>
      </div>
  );
}

export default App;
