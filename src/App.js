import { Routes, Route } from 'react-router-dom';
import NewsPage from './Pages/NewsPage/NewsPage';
import ProgramsPage from './Pages/ProgramsPage/ProgramsPage';
import CounterPage from './Pages/CounterPage/CounterPage';
import ShopPage from './Pages/ShopPage/ShopPage';
import CitiesPage from './Pages/CitiesPage/CitiesPage';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/news' element={ <NewsPage/> }/>
        <Route path='/programs' element={ <ProgramsPage /> } />
        <Route path='/counter' element={ <CounterPage />} />
        <Route path='/shopping_list' element={ <ShopPage />} />
        <Route path='/cities_list' element={ <CitiesPage />} />
        <Route path='*' element={<div><h1>404 error. Page not found</h1></div>}/>
      </Routes>

    </div>
  );
}

export default App;
