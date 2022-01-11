import { ComicHeroSection } from "~/components/molecules/comic-hero-section";
import { Header } from "~/components/molecules/header";
import { ComicList } from "~/components/organisms/comic-list";
import { useFetchComics } from "~/hooks/use-fetch-comics";

export function Home() {
  const { data } = useFetchComics();

  return (
    <main className="bg-[#f5f5f5] pb-6">
      <Header />

      <ComicHeroSection />

      <section className=" bg-[#f5f5f5]">
        <div className="container mx-auto pt-4">
          {data?.comicContent?.results ? (
            <ComicList comics={data?.comicContent?.results} />
          ) : null}
        </div>
      </section>
    </main>
  );
}
