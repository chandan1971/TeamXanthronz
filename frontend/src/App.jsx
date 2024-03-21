import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import TodoApp from './components/TodoApp'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<SignUp></SignUp>}/>
          <Route path="/login" element={<Login></Login>}/>
          <Route path="/TodoApp" element={<TodoApp></TodoApp>}/>
          <Route path="/" element={<Home></Home>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
