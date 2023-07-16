import RecipeDetails from "@/components/recipeDetails/RecipeDetails";
import { Metadata } from "next";
import React from "react";

interface IParams {
  params: { id: string };
}

export const generateMetadata = async ({
  params,
}: IParams): Promise<Metadata> => {
  const data = await fetchRecipe(params.id);

  return {
    title: `${data[0].name}`,
    description: data[0].description,
  };
};

async function fetchRecipe(id: string): Promise<IBeer[]> {
  const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
  return res.json();
}

const RecipePage = async ({ params: { id } }: IParams) => {
  const data = await fetchRecipe(id);

  return (
    <main className="min-h-screen pt-[85px] px-3">
      <RecipeDetails beer={data[0]} />
    </main>
  );
};

export default RecipePage;
