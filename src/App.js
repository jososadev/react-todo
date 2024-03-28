import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import { Home, Todo, Calculator } from './pages'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },
]);

function App() {
  return (
    <div>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
