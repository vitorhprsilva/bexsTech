import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import {Checkout} from '../views'


const Routers = ()=>{
  return(
      <BrowserRouter>
          <div className='corpo'>
            <Routes >
              <Route exact path="/"  element={<Checkout />} />

            </Routes>
          </div>
      </BrowserRouter>
  );
}


export default Routers;