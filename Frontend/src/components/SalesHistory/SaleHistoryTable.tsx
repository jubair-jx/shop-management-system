import { useGetSellGiftsQuery } from "@/redux/features/Sales Management/getAllSellProductapi";
import { useState } from "react";
import Loading from "../ui/Loading";
import ShowSaleHistoryTable from "./ShowSaleHistoryTable";

const SaleHistoryTable = () => {
  const [filter, setFilter] = useState("");

  const { data, isLoading, isError } = useGetSellGiftsQuery(filter, {
    refetchOnMountOrArgChange: true,
    skip: false,
    refetchOnReconnect: true,
    refetchOnFocus: true,
  });

  let gifts = null;
  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !isError) {
    gifts = data.data;
  }
  if (isError) {
    return <h1>Gift has not retrived</h1>;
  }

  return (
    <>
      <section className="bg-gray-50 p-3 sm:p-5 w-auto">
        <div>
          <div className=" relative  overflow-hidden">
            <div className=" flex justify-between">
              <h1 className="font-outfit text-[26px] font-bold mb-3">
                Sales History
              </h1>
              <div className=" flex flex-wrap justify-center items-center gap-2 font-outfit">
                <select
                  onChange={(e) => setFilter(e.target.value)}
                  className="select h-10 bg-neutral-300 rounded-lg p-2 select-accent select-sm w-32"
                >
                  <option value={""} selected className="">
                    Filter By
                  </option>
                  <option value="weekly">Weekly</option>
                  <option value="daily">Daily</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto border rounded-md mb-2">
              <table className="table-auto min-w-full text-left ">
                <thead
                  style={{ fontFamily: "Roboto" }}
                  className="bg-[#ebebeb] font-medium"
                >
                  <tr className="">
                    <th scope="col" className=" text-center py-2">
                      Product Name
                    </th>
                    <th scope="col" className="px-4 py-2">
                      Price
                    </th>
                    <th scope="col" className="px-4 py-2">
                      Quantity
                    </th>
                    <th scope="col" className="px-4 py-2 text-center">
                      Buyer
                    </th>
                    <th scope="col" className="px-4 py-2 text-center">
                      Date
                    </th>
                    <th scope="col" className="px-4 py-2 text-center">
                      Category
                    </th>

                    <th scope="col" className="px-4 py-2 text-center">
                      Brand
                    </th>

                    <th scope="col" className="px-4 py-2.5 text-center">
                      Theme
                    </th>
                    <th scope="col" className="px-4 py-2.5 text-center">
                      Info
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {gifts?.map((item: object, index: number) => (
                    <ShowSaleHistoryTable item={item} key={index} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SaleHistoryTable;
