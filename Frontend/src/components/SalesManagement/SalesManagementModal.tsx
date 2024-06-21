import { useSellGiftFromDBMutation } from "@/redux/features/Sales Management/sellProductapi";
import { Modal } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const SalesManagementModal = ({ setModal2Open, modal2Open, refetch }: any) => {
  const id = modal2Open.itemId;

  const { handleSubmit, register } = useForm({});
  const [sellGiftFromDB] = useSellGiftFromDBMutation();

  const handleOnSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Selling Product .....");

    try {
      const sellInfo = {
        productId: id,
        quantity: Number(data.quanity),
        buyer: data.buyer,
        date: data.date,
      };

      await sellGiftFromDB({ id, sellInfo }).unwrap();

      toast.success("Gift has been successfully sold...", {
        id: toastId,
        duration: 2000,
      });
      refetch();
    } catch (err:any) {
      console.log(err);
      toast.error(err?.data?.message, {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <>
      <Modal
        title="Sell Your product to seller"
        centered
        open={modal2Open.isOpen}
        onCancel={() => setModal2Open(false)}
      >
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="max-w-sm mx-auto"
        >
          <div className="mb-5">
            <label
              htmlFor="quanity"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Quantity
            </label>
            <input
              type="text"
              id="quanity"
              {...register("quanity")}
              name="quanity"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Enter your Product Quantity"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="buyer"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name of the buyer
            </label>
            <input
              type="text"
              {...register("buyer")}
              id="buyer"
              name="buyer"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              placeholder="Name of the buyer"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date of the sale
            </label>
            <input
              type="date"
              id="date"
              {...register("date")}
              name="date"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              placeholder="Date of the sale"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sell the product
          </button>
        </form>
      </Modal>
    </>
  );
};

export default SalesManagementModal;
