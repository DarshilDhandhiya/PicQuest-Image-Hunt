import Images from './components/Images'; // Adjust the path according to your project structure
import Jumbutron from "./components/Jumbutron";
import SearchField from "./components/SearchField";


function App() {
  return (
    <>
      <Jumbutron>
        <SearchField></SearchField>
      </Jumbutron>
      <Images/>
    </>
  );
}

export default App;
