import Avatar from '../Avatar';
import React from 'react';

export interface CardProps {
  readonly name: string;
  readonly title: string;
  readonly avatar: string;
  readonly onClickNavigate: () => void;
}

export const Card: React.FC<CardProps> = ({
  name,
  title,
  avatar,
  onClickNavigate
}) => {
  return (
    <div
      className="flex flex-col justify-between p-4 m-4 my-16 mx-10 bg-white rounded-md border-l-4 border-teal-500 border-solid shadow-md sm:flex-row sm:my-8"
      onClick={onClickNavigate}
    >
      <div className="flex flex-col sm:flex-row">
        <div>
          <Avatar src={avatar} />
        </div>
        <div className="flex flex-col justify-between ml-4">
          <h3 className="text-base font-bold text-teal-500">{title}</h3>
          <h2
            className="my-2 text-xl font-bold sm:my-0"
            dangerouslySetInnerHTML={{ __html: name }}
          ></h2>
        </div>
      </div>
    </div>
  );
};
