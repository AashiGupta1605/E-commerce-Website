import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'; 
import React from 'react';
import LoginPage from './Admin/Pages/LoginPage';
import HeaderComp from './Admin/Components/HeaderComp';

import HomePage from './Admin/Pages/HomePage';
import AddItemPage from './Admin/Pages/AddItemPage';
import AddRootCategoryPage from './Admin/Pages/AddRootCategoryPage'
import AddSubCategoryPage from './Admin/Pages/AddSubCategoryPage'
import DisplayItemPage from './Admin/Pages/DisplayItemPage';
import DisplayRootCategoryPage from './Admin/Pages/DisplayRootCategoryPage';
import DisplaySubCategoryPage from './Admin/Pages/DisplaySubCategoryPage';

const App = () => {
  return (
    <Routes>
      <Route path='/admin' element={<LoginPage/>}/>
      <Route path='/admin/home' element={<HeaderComp/>}>
        {/* ...........NOte: <Route index path='/' element={<HomePage/>}/> Not Valid and <Route index path='' element={<HomePage/>}/> and <Route path='' element={<HomePage/>}/> both same */}
        <Route path='' element={<HomePage/>}/>
        <Route path='additem' element={<AddItemPage/>}/>
        <Route path='addcategory' element={<AddRootCategoryPage/>}/>
        <Route path='addstylescategory' element={<AddSubCategoryPage/>}/>
        <Route path='items' element={<DisplayItemPage/>}/>
        <Route path='categories' element={<DisplayRootCategoryPage/>}/>
        <Route path='stylecategories' element={<DisplaySubCategoryPage/>}/>
      </Route>
    </Routes>
  )
}

export default App









// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Routes,Route} from 'react-router-dom'; 
// import React from 'react';
// import LoginPage from './Admin/Pages/LoginPage';
// import LoginFromReg from './User/Components/LoginFromReg';
// import Header from './User/Components/Header';
// import PublicHome from './User/Pages/PublicHome';
// import AddItemComp from './Admin/Components/AddItemComp';
// import DisplayItem from './User/Components/DisplayItem';
// import LoginComp from './Admin/Components/LoginComp';


// const App = () => {
//   return (
//     <Route path='/' element={<Header/>}/>
//       <Route path='/login' element={<LoginFromReg/>}/>
//       <Route path='/admin' element={<LoginComp/>}/>
//       <Route path='/home' element={<PublicHome/>}/>
//       <Route path='/additem' element={<AddItemComp/>}/>
//       <Route path='/display' element={<DisplayItem/>}/>
//   )
// }

// export default App
