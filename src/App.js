import './App.css'
import { Provider } from "react-redux"
import store from "./redux/store"
import { BrowserRouter as Router } from "react-router-dom"
import Routing from './components/Routing/Routing'
function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
    <Router>
      <Routing/>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
