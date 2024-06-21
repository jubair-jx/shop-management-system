import { Modal } from "antd";

const SalesHistoryModal = ({ modal2Open, setModal2Open, item }: any) => {
  const { buyer, date, quantity, productId } = item || {};
  return (
    <Modal
      title="Sell Info Details"
      centered
      open={modal2Open}
      onCancel={() => setModal2Open(false)}
    >
      <div>
        <h1>
          {" "}
          <span className=" font-semibold">Buyer :</span> {buyer}
        </h1>
        <h1>
          {" "}
          <span className=" font-semibold">Product Name :</span>{" "}
          {productId.productName}
        </h1>
        <h1>
          {" "}
          <span className=" font-semibold">Product Quantity :</span>{" "}
          {productId.productQuantity}
        </h1>
        <h1>
          {" "}
          <span className=" font-semibold">Product Brand :</span>{" "}
          {productId.brand}
        </h1>
        <h1>
          {" "}
          <span className=" font-semibold">Product Price :</span>{" "}
          {productId.productPrice} $
        </h1>
        <h1>
          {" "}
          <span className=" font-semibold">Selling Date :</span> {date}
        </h1>
        <h1>
          {" "}
          <span className=" font-semibold">Selling Quantity:</span> {quantity}
        </h1>
        <h1>
          {" "}
          <span className=" font-semibold">Product Category:</span>{" "}
          {productId.category}
        </h1>
        <h1>
          {" "}
          <span className=" font-semibold">Product Material:</span>{" "}
          {productId.material}
        </h1>
        <h1>
          {" "}
          <span className=" font-semibold">Product Theme:</span>{" "}
          {productId.theme}
        </h1>
      </div>
    </Modal>
  );
};

export default SalesHistoryModal;
