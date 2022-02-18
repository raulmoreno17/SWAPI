import CharactersList from "../Organisms/CharactersList";
import useSWAPI from "../../Hooks/useSWAPI";
import SearchBox from "../Atoms/SearchBox";

const StarWarsCharacters = () => {
  const { characters, pagination, loadingState, newRequest, searchCharacter } = useSWAPI();

  return (
    <div>
      <SearchBox onChange={searchCharacter} />
      <CharactersList
        characters={characters}
        pagination={pagination}
        loadingState={loadingState}
        onPageChanged={newRequest}
      />
    </div>
  );
};

export default StarWarsCharacters;