import './App.css';

import {Routes,Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Contack from './Components/Contact/Contack';
import { createContext, useState } from 'react';
import Content from "./Components/Content.js"
import Service from './Components/Service/Service';
import Aboutus from './Components/About Us/Aboutus';




export const Global = createContext();
function App() {
const [first, setfirst] = useState(false)
// console.log(Content);
  return (
    <div className="App">

      <Global.Provider value={{obj:Content}}>    
      <Header first={first} setfirst={setfirst}/>

      <Routes>
      <Route path='/' element={<Home first={first}/>} />
      <Route path='/home' element={<Home first={first}/>} />
      <Route path='/contact' element={<Contack first={first}/>} />
      <Route path='/service' element={<Service first={first} />}/>
      <Route path="/aboutus" element={<Aboutus first={first}/>}/>
      </Routes>
      </Global.Provider>

    </div>
  );
}

export default App;
