import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Lists from './Components/Lists';
import Jion from './Components/Jion';
import './index.css';
import Edit from './Components/Edit';
function App() {
  return (
      <div className=' bg-blue-400 w-[26rem]  p-5 xl:mx-auto xl:mt-24 md:mx-auto md:mt-24'>
        <Routes>
          <Route path='/' element={<Jion/>}/>
          <Route path='/Edit/:id' element={<Edit/>}/>
        </Routes>
      </div>
  );
}

export default App;
