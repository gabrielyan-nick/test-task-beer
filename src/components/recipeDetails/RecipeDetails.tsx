"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import IngredientTable from "./IngredientTable";

interface IRecipeDetails {
  beer: IBeer;
}

const RecipeDetails = ({ beer }: IRecipeDetails) => {
  const router = useRouter();

  return (
    <section className="pb-10">
      <button
        className="text-amber-100 ml-1 mb-2 hover:text-amber-400 transition-colors"
        onClick={() => router.back()}
      >
        Back to list
      </button>
      <div className="py-5 px-3 sm:px-5 bg-amber-200 rounded-lg">
        <div className="md:flex gap-5">
          <div>
            <h1 className="font-title text-3xl text-amber-900">{beer.name}</h1>
            <p className="my-2 font-bold text-lg text-amber-900">
              {beer.tagline}
            </p>
            <p className="font-semibold text-amber-950">{beer.description}</p>
          </div>
          <div className="flex shrink-0 gap-4 sm:gap-10 h-[200px] mt-5 justify-center md:justify-normal">
            <img
              src={beer.image_url}
              alt={beer.name}
              className="object-cover h-full"
            />

            <div className="grid grid-cols-[70%,_30%] gap-x-3 font-semibold ">
              <div>abv</div>
              <div>{beer.abv}</div>
              <div>attenuation</div>
              <div>{beer.attenuation_level ?? "-"}</div>
              <div>ebc</div>
              <div>{beer.ebc ?? "-"}</div>
              <div>ibu</div>
              <div>{beer.ibu ?? "-"}</div>
              <div>ph</div>
              <div>{beer.ph ?? "-"}</div>
              <div>srm</div>
              <div>{beer.srm ?? "-"}</div>
            </div>
          </div>
        </div>

        <h3 className="mt-4 text-amber-900 font-bold mb-2">Ingredients</h3>
        <div className="md:flex gap-10">
          <div>
            <h5 className="font-semibold">Hops</h5>
            <IngredientTable data={beer.ingredients.hops} />
          </div>
          <div className="mt-3 md:mt-0">
            <h5 className="font-semibold">Malt</h5>
            <IngredientTable data={beer.ingredients.malt} />
          </div>
        </div>
        <h3 className="mt-4 text-amber-900 font-bold mb-1.5">Tips</h3>
        <p className="font-semibold">{beer.brewers_tips}</p>
        <h3 className="mt-4 text-amber-900 font-bold mb-1.5">Food pairing</h3>
        <ul>
          {beer.food_pairing.map((item, i) => (
            <li className="font-semibold" key={i}>
              {item}
            </li>
          ))}
        </ul>
        <p className="font-semibold"></p>
      </div>
    </section>
  );
};

export default RecipeDetails;
