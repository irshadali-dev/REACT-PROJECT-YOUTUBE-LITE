import './App.css';
import { AppContext } from './context/contextApi.js';

function App() {
  return (
    <AppContext>
      <div className="bg-red-400 rounded-2xl text-blue-700 text-4xl">
        App
      </div>
    </AppContext>
  );
}

export default App;
