import { useState } from "react";
import { ComicCard } from "~/components/organisms/comic-card";
import { Modal } from "~/components/organisms/modal";
import { ComicProps } from "~/models/comic";

type ComicListType = {
  comics: ComicProps[];
};

export const ComicList = ({ comics }: ComicListType): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickComic = (id: ComicProps["id"]) => {
    console.log(id);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {comics.map((comic) => (
          <ComicCard onClick={handleClickComic} key={comic.id} comic={comic} />
        ))}
      </div>

      <Modal isOpen={isModalOpen} setOpen={setIsModalOpen}>
        <h1>modal test</h1>
      </Modal>
    </>
  );
};
