import { useGetAllGiftsQuery } from "@/redux/features/Gift Management/allGiftApi";
import { useDeleteGiftIntoDBMutation } from "@/redux/features/Gift Management/deleteGiftApi";
import { useMultipleDeleteGiftIntoDBMutation } from "@/redux/features/Gift Management/multipleDeleteProductApi";
import { FormEvent, useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Loading from "../ui/Loading";
import AllProductTopbar from "./AllProductTopbar";

const AllProductTable = () => {
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [occasion, setOcassion] = useState("");
  const [theme, setTheme] = useState("");
  const [priceRange, setPrice] = useState("");
  const [filter, setFilter] = useState({});

  const { data, isError, isLoading, refetch } = useGetAllGiftsQuery(filter, {
    refetchOnMountOrArgChange: true,
    skip: false,
    refetchOnReconnect: true,
    refetchOnFocus: true,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFilter({ category, brand, occasion, theme, priceRange });
  };

  const [deleteGiftIntoDB] = useDeleteGiftIntoDBMutation();
  const [multipleDeleteGiftIntoDB] = useMultipleDeleteGiftIntoDBMutation();
  const [selectedGifts, setSelectedGifts] = useState<string[]>([]);
  const handleCheckboxChange = (id: string) => {
    if (selectedGifts.includes(id)) {
      setSelectedGifts((prevSelected) =>
        prevSelected.filter((item) => item !== id)
      );
    } else {
      setSelectedGifts((prevSelected) => [...prevSelected, id]);
    }
  };

  let gifts = null;
  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && isError) {
    return <h1>Gift has not retrived</h1>;
  }

  if (!isLoading) {
    gifts = data.data;
  }

  const handleMultipleDelete = async () => {
    const toastId = toast.loading("Gift is Deleting.....");

    try {
      await multipleDeleteGiftIntoDB(selectedGifts).unwrap();
      toast.success("Your gifts has been deleted successfully...", {
        id: toastId,
        duration: 2000,
      });
      refetch();
    } catch (error: any) {
      toast.error(error?.data?.message, {
        id: toastId,
        duration: 2000,
      });
    }
  };

  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Gift is Deleting.....");

    try {
      await deleteGiftIntoDB(id).unwrap();
      toast.success("Your gift has been deleted successfully...", {
        id: toastId,
        duration: 2000,
      });
      refetch();
    } catch (error: any) {
      toast.error(error?.data?.message, {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <>
      {" "}
      <h1 className="font-outfit text-[26px] font-bold">All Gifts</h1>
      <AllProductTopbar />
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
                  <option value="home">Home</option>
                  <option value="gadgets">Gadgets</option>
                  <option value="accessories">Accessories</option>
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
                  <option value="mengas">Mengas</option>
                  <option value="whalslow">Whalslow</option>
                  <option value="helio">Helio</option>
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
                  <option value="romantic">Romantic</option>
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
              value={priceRange}
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
      <div className="overflow-x-auto border rounded-md mb-2">
        <table className="table-auto min-w-full text-left text-sm font-light">
          <thead className="bg-[#ebebeb] font-medium">
            <tr>
              <th scope="col" className="  text-center py-2.5">
                {/* when selected the checkbox then the delete button will be visible  */}
                <button
                  onClick={handleMultipleDelete}
                  style={{ fontFamily: "Poppins" }}
                  disabled={selectedGifts.length === 0}
                  className={`px-2 py-2 ${
                    selectedGifts.length === 0
                      ? "bg-white text-red-300"
                      : "bg-red-200 text-red-600 "
                  } text-xs rounded-md ml-2`}
                >
                  Delete
                </button>
              </th>
              <th scope="col" className=" text-center py-2.5">
                Name
              </th>
              <th scope="col" className="px-4 py-2.5">
                Price
              </th>
              <th scope="col" className="px-4 py-2.5">
                Quantity
              </th>
              <th scope="col" className="px-4 py-2.5">
                Occasion
              </th>
              <th scope="col" className="px-4 py-2.5">
                Category
              </th>
              <th scope="col" className="px-4 py-2.5">
                Theme
              </th>
              <th scope="col" className="px-4 py-2.5">
                Color
              </th>
              <th scope="col" className="px-4 py-2.5">
                Brand
              </th>

              <th scope="col" className="px-4 py-2.5 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {gifts
              ?.filter((item: { isDeleted?: boolean }) => !item.isDeleted)
              ?.map((item: any, index: number) => (
                <tr
                  key={index}
                  className="border-b cursor-pointer hover:bg-[#ebebeb] duration-300 border-dashed font-normal"
                >
                  {/* here is my main multiple deleted checkbox */}
                  <td className="whitespace-nowrap px-4 py-4 text-sm">
                    <input
                      type="checkbox"
                      name={`checkbox-${item._id}`}
                      id={`checkbox-${item._id}`}
                      checked={selectedGifts.includes(item._id)}
                      onChange={() => handleCheckboxChange(item._id)}
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 capitalize py-4 text-sm">
                    {item.productName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm">
                    {item.productPrice} $
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm">
                    {item.productQuantity}
                  </td>

                  <td className="whitespace-nowrap px-4 capitalize py-4">
                    {item.occasion}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 capitalize">
                    {item.category}
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 capitalize">
                    {item.theme}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 capitalize">
                    {item.color}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 capitalize">
                    {item.brand}
                  </td>
                  <td className="whitespace-nowrap flex gap-3 px-4 py-4 ">
                    <FaRegTrashAlt
                      onClick={() => handleDelete(item._id)}
                      className="size-9 px-2 py-2 rounded bg-red-100 text-red-600"
                    />
                    <Link to={`/${item._id}`}>
                      <FaRegEdit className="size-9 px-2 py-2 rounded bg-blue-100 text-blue-600" />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllProductTable;
