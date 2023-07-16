const IngredientTable = ({ data }: { data: IIngredient[] }) => {
  const keys = Object.keys(data[0]) as (keyof IIngredient)[];

  return (
    <table className="bg-[#ffb80057] rounded-md">
      <thead>
        <tr>
          {keys.map((key) => (
            <th key={key} className="text-sm sm:text-base px-2 py-1 bg-[#8936022b]">
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr
            key={i}
            className={`border-b ${
              i !== data.length - 1 ? "border-slate-500" : ""
            }`}
          >
            {keys.map((key) => (
              <td key={key} className="px-1 sm:px-2 py-1 text-sm sm:text-base font-semibold">
                {key === "amount"
                  ? `${item.amount.value} ${item.amount.unit}`
                  : String(item[key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IngredientTable;
