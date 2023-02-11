import './App.css'
// import Child1 from './Component/Child1';
// import Child2 from './Component/Child2';
// import ListNotes from './Component/Notes/ListNotes';
// import CreateNotes from './Component/Notes/CreateNotes';
import NavBar from './E-commerce/NavBar/NavBar';
import ProductList from './E-commerce/ProductList.js/ProductList';
function App(){
  return (
     <div>
      {/* <Child1/>
      <Child2/> */}
      {/* <CreateNotes/>
      <ListNotes/> */}
      <NavBar/>
      <ProductList/>
     </div>
  )
}
export default App;