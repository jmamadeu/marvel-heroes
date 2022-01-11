import { ComicCard } from "~/components/organisms/comic-card";
import { ComicProps } from "~/models/comic";

type ComicListType = {
  comics: ComicProps[];
};

export const ComicList = ({ comics }: ComicListType): JSX.Element => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {comics.map((comic) => (
        <ComicCard key={comic.id} comic={comic} />
      ))}
    </div>
  );
};
