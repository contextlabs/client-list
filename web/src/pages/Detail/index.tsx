import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getClientByName } from 'api/client.api';
import { Client } from '../../types/client.types';
import { CardDetail } from '../../components/CardDetail';

export const Detail = () => {
  const { name } = useParams();
  const [client, setClient] = useState<Client>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (name) {
      setIsLoading(true);
      getClientByName(name).then((result) => {
        setIsLoading(false);
        setClient(result.data[0]);
      });
    }
  }, [name]);

  return (
    <div className="p-6 w-full bg-white rounded-lg border-l-4 border-teal-500 border-solid shadow-md">
      {isLoading && <div>Loading ...</div>}
      {!isLoading && client && (
        <CardDetail
          avatar={client?.avatar}
          name={client?.name}
          title={client?.title}
          nationality={client?.nationality}
          quote={client?.quote}
        />
      )}
    </div>
  );
};
