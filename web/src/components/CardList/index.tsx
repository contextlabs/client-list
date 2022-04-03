import { Card } from '../Card';
import { Client } from '../../types/client.types';

export interface CardListProps {
  readonly results: Client[];
  readonly onClickNavigate: (name: string) => void;
}

export const CardList: React.FC<CardListProps> = ({
  results,
  onClickNavigate
}) => {
  return (
    <div aria-label="CardList">
      {results &&
        results.map((result: Client, index: number) => (
          <Card
            name={result.name}
            title={result.title}
            avatar={result.avatar}
            key={`card_${index}`}
            onClickNavigate={() => onClickNavigate(result.name)}
          />
        ))}
    </div>
  );
};
