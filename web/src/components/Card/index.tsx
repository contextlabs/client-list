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
      className="sm:flex-row sm:my-8 flex flex-col mx-10 my-16 shadow-md rounded-md justify-between bg-white m-4 p-4 border-l-4 border-teal-500 border-solid"
      onClick={onClickNavigate}
    >
      <div className="sm:flex-row flex flex-col">
        <div>
          <Avatar src={avatar} />
        </div>
        <div className="ml-4 flex flex-col justify-between">
          <h3 className="text-teal-500 text-base font-bold">{title}</h3>
          <h2
            className="sm:my-0 font-bold text-xl my-2"
            dangerouslySetInnerHTML={{ __html: name }}
          ></h2>
        </div>
      </div>
    </div>
  );
};
