import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import { Home, Todo } from './pages'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
