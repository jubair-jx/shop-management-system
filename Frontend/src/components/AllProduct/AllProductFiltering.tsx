import { FormEvent, useState } from "react";

const AllProductFiltering = () => {
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [ocassion, setOcassion] = useState("");
  const [theme, setTheme] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ category, brand, ocassion, theme, price });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className=" mb-4">
        <div className=" flex justify-between flex-wrap">
          <div>
            <div className=" mb-2 flex items-center gap-2">
              <div className=" flex gap-1 flex-wrap">
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  className="select h-10 bg-neutral-200 text-sm font- rounded-lg p-1 select-accent select-sm w-40"
                >
                  <option value={""} selected className=" t">
                    Filter By Category
                  </option>
                  <option value="vintage">Vintage</option>
                  <option value="modern">Modern</option>
                  <option value="unique">Unique</option>
                </select>
              </div>
            </div>

            <div className=" flex items-center gap-2">
              <div className=" mb-2 flex items-center gap-2">
                <select
                  onChange={(e) => setBrand(e.target.value)}
                  className="select h-10 bg-neutral-200 text-sm font- rounded-lg p-1 select-accent select-sm w-40"
                >
                  <option value={""} selected className=" ">
                    Filter By Brand
                  </option>
                  <option value="okala">Okala</option>
                  <option value="magic">Magic</option>
                  <option value="deer">deer</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <div className=" flex items-center gap-2">
              <div className=" mb-2 flex items-center gap-2">
                <select
                  onChange={(e) => setOcassion(e.target.value)}
                  className="select h-10 bg-neutral-200 text-sm font- rounded-lg p-1 select-accent select-sm w-40"
                >
                  <option value={""} selected className=" t">
                    Filter By Occasion
                  </option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversaries</option>
                  <option value="holiday">Holiday</option>
                </select>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <div className=" mb-2 flex items-center gap-2">
                <select
                  onChange={(e) => setTheme(e.target.value)}
                  className="select h-10 bg-neutral-200 text-sm font- rounded-lg p-1 select-accent select-sm w-40"
                >
                  <option value={""} selected className=" t">
                    Filter By Theme
                  </option>
                  <option value="vintage">Vintage</option>
                  <option value="modern">Modern</option>
                  <option value="unique">Unique</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative mb-10 w-3/6">
            <label
              htmlFor="price-range-input"
              className=" text-sm font-semibold"
            >
              Filter by Price
            </label>
            <input
              id="price-range-input"
              type="range"
              min="100"
              name="price"
              max="1500"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
              Min ($100)
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
              $500
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
              $1000
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
              Max ($1500)
            </span>
          </div>
        </div>
        <button className=" px-4 font-semibold py-2 rounded-md bg-violet-800 text-white">
          Submit
        </button>
      </form>
    </>
  );
};

export default AllProductFiltering;
