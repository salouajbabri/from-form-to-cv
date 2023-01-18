import React from 'react';

import Formulaire from './formulaire';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='\' element={<Formulaire/>}/>
        {/* <Route path='\' element={<Cv_react/>}/>   */}
      </Routes>
      </BrowserRouter>
      
    </div>
    
  )
}
export default App;