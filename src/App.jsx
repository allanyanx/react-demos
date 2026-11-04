import Greet from "./components/Greeting";
import Lists from "./components/Lists";
import ProductInfo from "./components/ProductInfo";
import UserList from "./components/UserList";
import UserList2 from "./components/UserList2";

const App = () => {
  return (
    <div>
      <Greet />
      <ProductInfo />
      <Lists />
      <UserList />
      <UserList2 />
    </div>
  );
};

export default App;