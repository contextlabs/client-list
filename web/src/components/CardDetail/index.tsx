import Avatar from "../Avatar";

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
      <div className="w-32 mx-auto relative -mt-24 mb-6">
        <Avatar src={avatar} size="xlarge" />
      </div>
      <h3 className="text-teal-500 text-base font-bold">{title}</h3>
      <h2
        className="sm:my-0 font-bold text-xl my-2"
        dangerouslySetInnerHTML={{ __html: name || '' }}
      ></h2>

      <div className="w-full sm:w-48  block leading-normal text-gray-800 text-md mb-3">
        {nationality}
      </div>

      {quote && (
        <blockquote className="italic text-neutral-600 quote">
          <p className="text-md text-gray-600">
            <span className="h-3 text-3xl">“</span>
            {quote}
            <span className="h-3 text-3xl">”</span>
          </p>
        </blockquote>
      )}
    </>
  );
}
