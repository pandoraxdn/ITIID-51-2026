//import { mockGifs } from "./mock-gif/gif.mock";
import { HeaderGif } from "./components/HeaderGif";
import { SearchBar } from "./components/SearchBar";
import { GifList } from "./components/Giflist";
import { PreviousSearches } from "./components/PreviousSearches";
import { useGifApi } from "./hooks/useGifApi";
import { useFormReducer } from "./hooks/useFormReducer";
import { usePreviousTerms } from "./hooks/usePreviousTerms";

const App = () => {

  const { isLoading, listGif, sendQuery } = useGifApi();
  const { state, handleSubmit, handleInputChange } = useFormReducer();
  const { previousTerms, addTerm } = usePreviousTerms()

  return (
    <div>
        {/*Header*/}
        <HeaderGif
            title="Buscador de GIFS"
            description="Encuentra el mejor gif"
        />
        {/*SearchBar*/}
        <SearchBar
            placeholder="Buscar Gif"
            state={state}
            handleSubmit={ handleSubmit }
            handleInputChange={handleInputChange}
            sendQuery={ sendQuery }
            addTerm={ addTerm }
        />
        {/*PreviousSearches*/}
        <PreviousSearches
            title="Elementos buscados"
            terms={previousTerms}
            onLabelClick={ sendQuery }
        />
        {/*ListGif*/} 
        { 
            (!isLoading) && <GifList data={ listGif }/>
        }
    </div>
  );
};

export default App;
