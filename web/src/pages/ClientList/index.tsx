import { useDebounce } from '../../hooks/useDebounce';
import { useEffect, useState } from 'react';
import { Client } from '../../types/client.types';
import { getClientByFilter, getClients } from '../../api/client.api';
import { SearchInput } from '../../components/SearchInput';
import { CardList } from '../../components/CardList';
import { useNavigate } from "react-router-dom";

export const ClientList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const navigate = useNavigate();

  const search = (debouncedSearchTerm?: string) => {
    if (debouncedSearchTerm) {
      setIsLoading(true);
      getClientByFilter(debouncedSearchTerm).then((results) => {
        setIsLoading(false);
        setResults(results.data);
      });
    } else {
      setIsLoading(true);
      getClients().then((results) => {
        setIsLoading(false);
        setResults(results.data);
      });
    }
  }

  useEffect(
    () => {
      search(debouncedSearchTerm);
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  useEffect(() => {
    search();
  }, []);

  const onClickNavigate = (name: string) => {
    navigate(`/detail/${encodeURIComponent(name)}`);
  };

  return (
    <>
      <SearchInput setSearchTerm={setSearchTerm} />
      {isLoading && <div>Searching ...</div>}
      {!isLoading && <CardList results={results} onClickNavigate={onClickNavigate}/>}
    </>
  );
};


