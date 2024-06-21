import { useSingleGiftQuery } from "@/redux/features/Gift Management/singleGiftgetApi";
import { useUpdateGiftIntoDBMutation } from "@/redux/features/Gift Management/updateGiftApi";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

interface ParamsType {
  id?: string;
}

const EditGiftForm = () => {
  const { id }: ParamsType = useParams();
  const { data, isLoading } = useSingleGiftQuery(id || "");
  const [updateGiftIntoDB, { data: updatedData }] =
    useUpdateGiftIntoDBMutation();
  let singleGift;

  if (!isLoading) {
    singleGift = data.data;
  }

  const {
    productName,
    productPrice,
    productQuantity,
    occasion,
    category,
    theme,
    brand,
    color,
    material,
  } = singleGift || {};

  console.log({
    productName,
    productPrice,
    productQuantity,
    occasion,
    category,
    theme,
    brand,
    color,
    material,
  });
  const { register, handleSubmit } = useForm({
    defaultValues: {
      productName,
      productPrice,
      productQuantity,
      occasion,
      category,
      theme,
      brand,
      color,
      material,
    },
  });
  const navigate = useNavigate();
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Gift is Updating.....");

    try {
      // Extract the updated fields from the form data
      const updatedFields: Partial<FieldValues> = {};
      if (data.productName) updatedFields.productName = data.productName;
      if (data.productPrice)
        updatedFields.productPrice = Number(data.productPrice);
      if (data.productQuantity)
        updatedFields.productQuantity = Number(data.productQuantity);
      if (data.occasion) updatedFields.occasion = data.occasion;
      if (data.category) updatedFields.category = data.category;
      if (data.theme) updatedFields.theme = data.theme;
      if (data.brand) updatedFields.brand = data.brand;
      if (data.color) updatedFields.color = data.color;
      if (data.material) updatedFields.material = data.material;

      // Update the gift with the extracted fields
      await updateGiftIntoDB({ id, productInfo: updatedFields }).unwrap();
      toast.success("Your gift has been updated successfully...", {
        id: toastId,
        duration: 2000,
      });
      console.log(updatedData);
      navigate("/all-product");
    } catch (error: any) {
      console.log(error);
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
            <h2 className="font-semibold mb-2 text-xl text-gray-800">
              Edit Your Gift
            </h2>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Gift Details</p>
                  <p>Please fill out your relavent the fields.</p>
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
                        defaultValue={productName}
                        id="product"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Enter a Product Name"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="category">Select Product Category</label>
                      <select
                        {...register("category")}
                        defaultValue={category}
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
                        defaultValue={occasion}
                        className=" w-full px-2 rounded-md py-3 bg-gray-100"
                      >
                        <option defaultValue={occasion} value="" disabled>
                          Select Occassion
                        </option>
                        <option value="birthdays">Birthday</option>
                        <option value="anniversaries">Anniversary</option>
                        <option value="holidays">Holiday</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="productPrice">Price</label>
                      <input
                        type="number"
                        {...register("productPrice")}
                        name="productPrice"
                        id="productPrice"
                        defaultValue={productPrice}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Enter a Price Name"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label htmlFor="brand">Product Brand</label>
                      <select
                        {...register("brand")}
                        defaultValue={brand}
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
                        defaultValue={productQuantity}
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
                        id="material"
                        defaultValue={material}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Enter a material Name"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="theme">Product Theme</label>
                      <select
                        {...register("theme")}
                        defaultValue={theme}
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
                        id="color"
                        defaultValue={color}
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

export default EditGiftForm;
