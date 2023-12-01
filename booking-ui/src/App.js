import {RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/custom.css';
import createRouter from './routes/BookingRoute';
import Footer from "./components/Footer";

function App() {
  const router = createRouter();

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Footer/>
    </div>
  );
}

export default App;
