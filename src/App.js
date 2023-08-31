import useAxios from './hooks/useAxios.JS';
import Images from './components/Images'; // Adjust the path according to your project structure
import Jumbutron from "./components/Jumbutron";
import SearchField from "./components/SearchField";


function App() {

  const{ response, isLoading, error, fetchData } = useAxios()

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
