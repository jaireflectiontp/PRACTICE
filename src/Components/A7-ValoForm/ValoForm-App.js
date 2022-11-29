import Form from './Form/Form';
import './FormApp.scss';
import Poster from './Poster/Poster';
function App() {
  return (
    <div className="app">
   <div className='left_section'><Form/></div>
     <div className='right_section'><Poster/></div>
    </div>
  );
}

export default App;
