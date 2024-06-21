import { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import SalesHistoryModal from "./SalesHistoryModal";

const ShowSaleHistoryTable = ({ item }: any) => {
  const { buyer, date, quantity, productId } = item || {};
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
      <tr
        style={{ fontFamily: "Poppins" }}
        className="border-b text-xs cursor-pointer hover:bg-[#ebebeb] duration-300 border-dashed font-normal"
      >
        <td className="whitespace-nowrap  capitalize px-4 py-3 text-sm text-center ">
          {productId?.productName}
        </td>
        <td className="whitespace-nowrap  capitalize px-4 font-medium py-3 text-sm ">
          {productId?.productPrice} $
        </td>
        <td className="whitespace-nowrap   capitalizepx-4 py-3 font-medium text-center text-sm">
          {quantity}
        </td>

        <td className="whitespace-nowrap  capitalize  px-4 py-3 text-center font-medium ">
          {buyer}
        </td>
        <td className="whitespace-nowrap  capitalize px-4 py-3">{date}</td>
        <td className="whitespace-nowrap  capitalize px-4 py-3 text-center ">
          {productId?.category}
        </td>

        <td className="whitespace-nowrap  capitalize px-4 py-3 text-center ">
          {productId?.brand}
        </td>
        <td className="whitespace-nowrap  capitalize px-4 py-3 text-center">
          {productId?.theme}
        </td>
        <td
          onClick={() => setModal2Open(true)}
          className="whitespace-nowrap capitalize px-5 py-4  text-center"
        >
          <BsInfoCircleFill fontSize={20} />
        </td>
      </tr>

      <SalesHistoryModal
        item={item}
        modal2Open={modal2Open}
        setModal2Open={setModal2Open}
      />
    </>
  );
};

export default ShowSaleHistoryTable;
