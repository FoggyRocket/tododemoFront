import "./App.css";
//importar las rutas a utilizar
import routes from "./config/routes";
import {Routes,Route} from 'react-router-dom';
function App() {

  return (
    <div className="App">
    <Routes>
                    {/*(route,index)=> <Route key={path} path={path} element={element} />  */}  
      {routes().map(({path,element},index_route)=> <Route key={path} {...{path, element}} />)}
    </Routes>
    </div>
  );
}

export default App;
