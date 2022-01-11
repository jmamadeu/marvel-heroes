import { ComicProps } from "~/models/comic";

type ComicCardType = {
  comic: ComicProps;
};

export const ComicCard = ({ comic }: ComicCardType): JSX.Element => {
  return (
    <article className="bg-white w-50 p-4 rounded-tl-md rounded-tr-lg rounded-bl-lg rounded-br-md flex flex-col justify-between">
      <div>
        <h1 className="font-bold text-md">{comic.title}</h1>

        {comic.isbn ? (
          <span className="font-extralight mt-2 block">
            isbn: <span>{comic.isbn}</span>
          </span>
        ) : null}

        <p className="text-base mt-4 hover:text-clip truncate h-7">
          {comic.description}
        </p>
      </div>

      <button className="self-start bg-slate-300 p-2 rounded-md">
        see more
      </button>
    </article>
  );
};
