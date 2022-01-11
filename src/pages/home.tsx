import { FiSearch as FiSearchIcon } from "react-icons/fi";
import { Logo } from "~/components/molecules/logo";
import { ComicList } from "~/components/organisms/comic-list";
import { useFetchComics } from "~/hooks/use-fetch-comics";

export function Home() {
  const { data } = useFetchComics();

  console.log(data);

  return (
    <>
      <main className="bg-[#f5f5f5] pb-6">
        <header className="bg-black-100 h-24 flex align-center pl-52">
          <Logo />
        </header>
        <section className="bg-marvel bg-cover h-60 flex items-center justify-center flex-col">
          <div className="container max-w-md mx-auto">
            <label htmlFor="search" className="text-white font-bold text-4xl">
              Explore the most powerful <br /> comics in Marvel
            </label>

            <div className="mt-4 flex justify-between h-16 w-full rounded-tl-md rounded-bl-3xl rounded-tr-3xl rounded-br-md bg-gray-10">
              <input
                id="search"
                type="text"
                placeholder="type in a comic name"
                className="pl-7 text-2xl bg-gray-10 font-normal text-gray-20 w-full rounded-bl-3xl rounded-tl-md outline-none"
              />
              <button
                className="bg-rose-800 p-4 rounded-tr-3xl rounded-tl-md rounded-br-md"
                title="search button"
              >
                <FiSearchIcon color="#fff" size={28} />
              </button>
            </div>
          </div>
        </section>
        <section className=" bg-[#f5f5f5]">
          <div className="container mx-auto pt-4">
            {data?.comicContent?.results ? (
              <ComicList comics={data?.comicContent?.results} />
            ) : null}
          </div>
        </section>
      </main>
    </>
  );
}
