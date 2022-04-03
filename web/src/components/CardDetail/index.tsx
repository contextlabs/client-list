import Avatar from '../Avatar';

export interface CardDetailProps {
  readonly name: string;
  readonly title: string;
  readonly avatar: string;
  readonly nationality: string;
  readonly quote: string;
}

export const CardDetail: React.FC<CardDetailProps> = ({
  name,
  title,
  nationality,
  avatar,
  quote
}) => {
  return (
    <>
      <div className="relative mx-auto -mt-24 mb-6 w-32">
        <Avatar src={avatar} size="xlarge" />
      </div>
      <h3 className="text-base font-bold text-teal-500">{title}</h3>
      <h2
        className="my-2 text-xl font-bold sm:my-0"
        dangerouslySetInnerHTML={{ __html: name || '' }}
      ></h2>

      <div className="block mb-3  w-full text-base leading-normal text-gray-800 sm:w-48">
        {nationality}
      </div>

      {quote && (
        <blockquote className="italic text-neutral-600">
          <p className="text-base text-gray-600">
            <span className="h-3 text-3xl">“</span>
            {quote}
            <span className="h-3 text-3xl">”</span>
          </p>
        </blockquote>
      )}
    </>
  );
};
