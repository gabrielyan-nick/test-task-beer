"use client";

import cn from "clsx";
import Link from "next/link";
import { Dispatch, MouseEvent, SetStateAction, memo } from "react";

interface IBeerCard
  extends Pick<IBeer, "name" | "image_url" | "tagline" | "id"> {
  selectedIds: number[];
  setSelectedIds: Dispatch<SetStateAction<number[]>>;
}

export const BeerCard = ({
  image_url,
  name,
  tagline,
  id,
  setSelectedIds,
  selectedIds,
}: IBeerCard) => {
  const isSelected = selectedIds.includes(id);
  const displayedName = name.length > 25 ? name.slice(0, 25) + "..." : name;
  const displayedTagline =
    tagline.length > 30 ? tagline.slice(0, 30) + "..." : tagline;

  const toggleSelectId = (id: number, arr: number[]) => {
    const index = arr.indexOf(id);
    index === -1
      ? setSelectedIds([...arr, id])
      : setSelectedIds(arr.filter((item) => item !== id));
  };

  const handleRightClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    toggleSelectId(id, selectedIds);
  };

  return (
    <Link href={`recipe/${id}`}>
      <div
        className={cn(
          `relative flex gap-4 w-[250px] max-w-[90%]  md:w-[300px] h-[170px] py-3 px-4 overflow-hidden rounded-lg bg-amber-200 m-auto animate-fadeIn transition-all`,
          {
            "shadow-cardDel": isSelected,
            "hover:shadow-cardHover": !isSelected,
          }
        )}
        onContextMenu={handleRightClick}
      >
        <span className="absolute top-0 right-1 text-base font-bold">{id}</span>
        <div className="w-[30%]">
          <img
            src={image_url}
            alt={name}
            className="object-cover h-full m-auto"
          />
        </div>
        <div className="w-[70%] flex flex-col justify-around">
          <h3 className="font-title text-xl md:text-2xl text-amber-900">
            {displayedName}
          </h3>
          <p className="mb-3 font-bold text-amber-950">{displayedTagline}</p>
        </div>
      </div>
    </Link>
  );
};

export const MemoBeerCard = memo(BeerCard);
