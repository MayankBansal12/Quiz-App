import '../styles/App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Quiz from "./Quiz";
import Main from "./Main";
import Result from "./Result"
import { CheckUserExist } from '../helper/helper';

// React Router
const router=createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/quiz",
    element: <CheckUserExist><Quiz /></CheckUserExist>
  },
  {
    path: "/result",
    element: <CheckUserExist><Result /></CheckUserExist>
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
