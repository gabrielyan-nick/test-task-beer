interface IBeer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  food_pairing: string[];
  brewers_tips: string;
  attenuation_level: number;
  ingredients: {
    malt: IIngredient[];
    hops: IIngredient[];
  };
  abv: number;
  ebc: number;
  ibu: number;
  ph: number;
  srm: number;

}

interface IIngredient {
  name: string;
  amount: TValue;
  add?: string;
  attribute?: string;
}

type TValue = {
  value: number;
  unit: string;
};
