import { useState, useEffect } from "react";

const useSWAPI = () => {
  const [requestLink, setRequestLink] = useState(
    "https://swapi.dev/api/people"
  );
  const [characters, setCharacters] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [pagination, setPagination] = useState({
    count: 0,
    previous: null,
    next: null,
    currentPage: 0,
  });
  useEffect(() => {
    async function fetchData() {
      await fetch(requestLink)
        .then((response) => response.json())
        .then((response) => {
          setLoadingState(false);
          setCharacters(response.results);
          setPagination(() => {
            return {
              previous: response.previous,
              next: response.next,
              count: response.count,
              currentPage: pagination.currentPage,
            };
          });
        });
    }
    fetchData();
  }, [requestLink]);

  const newRequest = (event, newPage) => {
    setCharacters([]);
    setLoadingState(true);
    if (pagination.currentPage < newPage) {
      setRequestLink(pagination.next);
    } else if (pagination.currentPage > newPage) {
      setRequestLink(pagination.previous);
    }
    setPagination(() => {
      return { currentPage: newPage, count: pagination.count };
    });
  };

  const searchCharacter = (input) => {
    setCharacters([]);
    setLoadingState(true);
    setRequestLink(`https://swapi.dev/api/people/?search=${input.target.value}`);
  };

  return { characters, pagination, loadingState, newRequest, searchCharacter };
};

export default useSWAPI;