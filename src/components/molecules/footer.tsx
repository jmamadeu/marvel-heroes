import { useFetchComics } from "~/hooks/use-fetch-comics";

export const Footer = (): JSX.Element => {
  const { data } = useFetchComics();

  return (
    <footer className="bg-[#202020]">
      <div className="container mx-auto text-white p-4">
        <span>{data?.attributionText}</span>
      </div>
    </footer>
  );
};
