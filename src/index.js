import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,createRoutesFromElements,Route,RouterProvider
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import store from './store';
import MoreScreen from './screens/MoreScreen';
import NewsScreen from './screens/NewsScreen';
import 'bootstrap/dist/css/bootstrap.min.css';


const router=createBrowserRouter(
  createRoutesFromElements(
     <Route path="/" element={<App/>}>
     <Route index={true} path="/" element ={<HomeScreen/>}></Route>
     <Route index={true} path="/more" element ={<MoreScreen/>}></Route>
     <Route index={true} path="/news" element ={<NewsScreen/>}></Route>
     </Route>)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <RouterProvider router={router}/>


  </Provider>,
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
