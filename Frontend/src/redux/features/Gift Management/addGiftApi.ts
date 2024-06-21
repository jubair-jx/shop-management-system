import { baseApi } from "../api/api";

const addGiftApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addGiftIntoDB: builder.mutation({
      query: (productInfo) => ({
        url: "/product/create-product",
        method: "POST",
        body: productInfo,
      }),
    }),
  }),
});

export const { useAddGiftIntoDBMutation } = addGiftApi;
