import { useGetAllGiftsQuery } from "@/redux/features/Gift Management/allGiftApi";
import { Button } from "antd";
import { useState } from "react";
import { FaPeopleArrows } from "react-icons/fa";
import AllProductTopbar from "../AllProduct/AllProductTopbar";
import Loading from "../ui/Loading";
import SalesManagementModal from "./SalesManagementModal";

const SalesManagementTable = () => {
  const [modal2Open, setModal2Open] = useState({ isOpen: false, itemId: null });

  const { data, isError, isLoading, refetch } = useGetAllGiftsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    skip: false,
    refetchOnReconnect: true,
    refetchOnFocus: true,
  });
  console.log(data);
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
      {" "}
      <h1 className="font-outfit text-[26px] font-bold">Sales Management</h1>
      <AllProductTopbar />
      <div className="overflow-x-auto border rounded-md mb-2">
        <table className="table-auto min-w-full text-left text-sm">
          <thead
            style={{ fontFamily: "Poppins" }}
            className="bg-[#ebebeb] font-medium"
          >
            <tr>
              <th scope="col" className=" text-center py-2">
                Product Name
              </th>
              <th scope="col" className="px-4 py-2">
                Price
              </th>
              <th scope="col" className="px-4 py-2">
                Quantity
              </th>
              <th scope="col" className="px-4 py-2">
                Occasion
              </th>
              <th scope="col" className="px-4 py-2">
                Category
              </th>
              <th scope="col" className="px-4 py-2">
                Theme
              </th>
              <th scope="col" className="px-4 py-2">
                Color
              </th>
              <th scope="col" className="px-4 py-2">
                Brand
              </th>

              <th scope="col" className="px-4 py-2.5 text-center">
                Sell
              </th>
            </tr>
          </thead>
          <tbody>
            {gifts
              ?.filter((item: { isDeleted?: boolean }) => !item.isDeleted)
              ?.map((item: any, index: number) => (
                <tr
                  style={{ fontFamily: "Roboto" }}
                  key={index}
                  className="border-b capitalize cursor-pointer hover:bg-[#ebebeb] duration-300 border-dashed font-normal"
                >
                  <td className="whitespace-nowrap px-4 py-3 text-sm">
                    {item?.productName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm">
                    {item?.productPrice} $
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-center text-sm">
                    {item?.productQuantity}
                  </td>

                  <td className="whitespace-nowrap px-4 py-3">
                    {item?.occasion}
                  </td>
                  <td className="whitespace-nowrap  px-4 py-3">
                    {item.category}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">{item?.theme}</td>
                  <td className="whitespace-nowrap px-4 py-3">{item?.color}</td>

                  <td className="whitespace-nowrap px-4 py-3">{item?.brand}</td>
                  <td className="whitespace-nowrap flex  gap-3 px-4 text-blue-600 py-3 ">
                    <Button
                      className=" flex items-center gap-1 bg-blue-700 px-2 py-1 rounded-sm"
                      type="primary"
                      onClick={() =>
                        setModal2Open({ isOpen: true, itemId: item?._id })
                      }
                    >
                      <FaPeopleArrows className="size-4 rounded" />
                      <span> Sell</span>
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <SalesManagementModal
        modal2Open={modal2Open}
        refetch={refetch}
        setModal2Open={setModal2Open}
      />
    </>
  );
};

export default SalesManagementTable;
