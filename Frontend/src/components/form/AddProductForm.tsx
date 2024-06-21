import { useAddGiftIntoDBMutation } from "@/redux/features/Gift Management/addGiftApi";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddProductForm = () => {
  const { register, handleSubmit } = useForm();
  const [addGiftIntoDB] = useAddGiftIntoDBMutation();
  const navigate = useNavigate();
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Gift is Adding.....");

    try {
      const productInfo = {
        productName: data.productName,
        productPrice: Number(data.productPrice),
        productQuantity: Number(data.productQuantity),
        occasion: data.occasion,
        category: data.category,
        theme: data.theme,
        brand: data.brand,
        color: data.color,
        material: data.material,
      };

      await addGiftIntoDB(productInfo).unwrap();
      toast.success("Your gift has been added successfully...", {
        id: toastId,
        duration: 2000,
      });
      navigate("/all-product");
    } catch (error: any) {
      toast.error(error?.data?.message, {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <>
      <div className=" p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold mb-2 text-xl text-gray-600">
              Add Your Gift
            </h2>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Gift Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="lg:col-span-2"
                >
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-3">
                      <label htmlFor="product">Product Name</label>
                      <input
                        type="text"
                        {...register("productName")}
                        name="productName"
                        id="product"
                        required
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Enter a Product Name"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="category">Select Product Category</label>
                      <select
                        {...register("category")}
                        defaultValue={""}
                        className=" w-full px-2 rounded-md py-3 bg-gray-100"
                      >
                        <option value="" disabled>
                          Select Category
                        </option>
                        <option value="home">Home Decor</option>
                        <option value="gadgets">Gadgets</option>
                        <option value="accessories">Accessoires</option>
                      </select>
                    </div>
                    <div className="md:col-span-3">
                      <label htmlFor="occasion">Product Occasion</label>
                      <select
                        {...register("occasion")}
                        defaultValue={""}
                        className=" w-full px-2 rounded-md py-3 bg-gray-100"
                      >
                        <option value="" disabled>
                          Select Occassion
                        </option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="holiday">Holiday</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="productPrice">Price</label>
                      <input
                        type="number"
                        {...register("productPrice")}
                        name="productPrice"
                        id="productPrice"
                        required
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Enter a Price Name"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label htmlFor="brand">Product Brand</label>
                      <select
                        {...register("brand")}
                        defaultValue={""}
                        className=" w-full px-2 rounded-md py-3 bg-gray-100"
                      >
                        <option value="" disabled>
                          Select Brand
                        </option>
                        <option value="mengas">Mengas</option>
                        <option value="whalslow">Whalslow</option>
                        <option value="helio">Helio</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="productQuantity">Product Quantity</label>
                      <input
                        type="number"
                        {...register("productQuantity")}
                        name="productQuantity"
                        id="productQuantity"
                        required
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Enter a Product quantity Name"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label htmlFor="material">Product Material</label>
                      <input
                        type="text"
                        {...register("material")}
                        name="material"
                        required
                        id="material"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Enter a material Name"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="theme">Product Theme</label>
                      <select
                        {...register("theme")}
                        defaultValue={""}
                        className=" w-full px-2 rounded-md py-3 bg-gray-100"
                      >
                        <option value="" disabled>
                          Select Theme
                        </option>
                        <option value="vintage">Vintage</option>
                        <option value="modern">Modern</option>
                        <option value="romantic">Romantic</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="color">Color</label>
                      <input
                        type="text"
                        {...register("color")}
                        name="color"
                        required
                        id="color"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Enter a color Name"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddProductForm;
