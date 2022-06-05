import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import Ongoing from './ongoing';
import Getin from './pages/Getin';

// function App() {
//   return <BrowserRouter>
//   <nav>NavBar</nav>
//   <Routes>
//     <Route path='/' element={<Home/>}></Route>
//     <Route path='about' element={<About/>}></Route>
//     <Route path='products' element={<Products/>}></Route>
//     {/* clearly we dont need slashes in paths in version 6/// also contents of the components can also be written in routes in element tags */}
//     <Route path='*' element={<Error/>}/>
    
//     {/* still can pass components */}

//   </Routes>
//   <footer>footer</footer>
//   </BrowserRouter>;
// }
////simple routing
/////===== lets do nested routing====////
// function App() {
//   return <BrowserRouter>
//   <nav>NavBar</nav>
//   <Routes>
//     <Route path='/' element={<Home/>}>
//     <Route path='about' element={<About/>}/>
//     <Route path='products' element={<Products/>}/>
//     {/* clearly we dont need slashes in paths in version 6/// also contents of the components can also be written in routes in element tags */}
//     <Route path='*' element={<Error/>}/>
//     </Route>
//     {/* so here we have enclosed or nested all other components inside the home one */}

//   </Routes>
//   <footer>footer</footer>
//   </BrowserRouter>;
// }
/////thats it for nested routing, but nothing can be displayed exclusively on home page
////lets learn index pages for that
function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<SharedLayout/>}>
    {/* we would need a special route named index with special syntax see below one */}
    <Route index element={<Home/>}/>
    <Route path='orders' element={<Ongoing/>}/>
    <Route path='message' element={<Ongoing/>}/>
    {/* clearly we dont need slashes in paths in version 6/// also contents of the components can also be written in routes in element tags */}
    <Route path='signin' element={<Getin/>}/>
    <Route path='notifications' element={<Ongoing/>}/>
    <Route path='cart' element={<Ongoing/>}/>
    <Route path='reset' element={<Ongoing/>}/>
    <Route path='Signup' element={<Ongoing/>}/>
    <Route path='*' element={<Error/>}/>
    </Route>
    {/* so here we have enclosed or nested all other components inside the home one */}

  </Routes>
  </BrowserRouter>;
}

export default App;
