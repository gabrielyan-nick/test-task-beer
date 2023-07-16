"use client";

import { useStore } from "@/store/store";
import { MemoBeerCard } from "../beerCard/BeerCard";
import { useEffect, useState } from "react";

const BeerList = () => {
  const [visibleBeers, setVisibleBeers] = useState<IBeer[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [isFirstInit, setIsFirstInit] = useState(true);
  const {
    beers,
    isLoading,
    page,
    visibleStart,
    visibleEnd,
    delCount,
    fetchBeers,
    setPage,
    deleteBeer,
    setVisibleStart,
    setVisibleEnd,
    setDelCount,
  } = useStore();
  // const [delCount, setDelCount] = useState(0);

  const delCard = () => {
    setVisibleBeers((beers) =>
      beers.filter((beer) => !selectedIds.includes(beer.id))
    );
    deleteBeer(selectedIds);
    setDelCount(selectedIds.length);
    setSelectedIds([]);
  };

  useEffect(() => {
    if (!isLoading) {
      fetchBeers(page);
      setIsFirstInit(false);
    }
  }, [page]);

  useEffect(() => {
    setVisibleBeers(beers.slice(visibleStart, visibleEnd));
  }, [beers, setVisibleBeers, visibleStart, visibleEnd]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      // scroll to bottom
      if (
        scrollTop + clientHeight >= scrollHeight - 10 &&
        visibleEnd < 325 - delCount
      ) {
        setVisibleStart(5);
        setVisibleEnd(5);
      }
      // scroll to top
      if (scrollTop === 0 && visibleStart > 0) {
        setVisibleStart(-5);
        setVisibleEnd(-5);
        window.scrollBy(0, 5);
      }
      // scroll to bottom and end of page
      if (
        scrollTop + clientHeight >= scrollHeight - 10 &&
        visibleEnd % 25 === 0 &&
        !isLoading &&
        page < 13
      ) {
        setPage(page + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    isLoading,
    page,
    visibleEnd,
    visibleStart,
    setPage,
    setVisibleEnd,
    setVisibleStart,
  ]);

  useEffect(() => {
    if (beers.length < 15 && !isFirstInit && page < 13) {
      setPage(page + 1);
    }
  }, [beers]);

  return (
    <section className="relative flex flex-col items-center pt-[110px] pb-10 gap-5 min-h-listHeight">
      {visibleBeers.map((beer) => (
        <MemoBeerCard
          key={beer.id}
          id={beer.id}
          name={beer.name}
          image_url={beer.image_url}
          tagline={beer.tagline}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
        />
      ))}
      {isFirstInit && (
        <div className="w-8 h-8 rounded-full bg-amber-900 mt-60 mx-auto animate-bounce"></div>
      )}
      {isLoading && !isFirstInit && (
        <div className="w-8 h-8 rounded-full bg-amber-900 mt-10 mb-7 mx-auto animate-bounce"></div>
      )}
      {selectedIds.length > 0 && (
        <button
          className="fixed top-[90px] rounded-xl bg-rose-700 py-2 px-4 animate-appear font-bold text-lg text-amber-100 border-2 border-rose-950 shadow-2xl shadow-rose-950 hover:bg-rose-800 transition-colors"
          onClick={delCard}
        >
          Delete
        </button>
      )}
    </section>
  );
};

export default BeerList;
