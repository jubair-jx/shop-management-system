import { baseApi } from "../api/api";

const getAllSellProductFromDB = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSellGifts: builder.query({
      query: (query: string) => ({
        url: `/product/item/sell?byDate=${query}`,
        method: "GET",
      }),
      providesTags: ["Sell"],
    }),
  }),
});

export const { useGetSellGiftsQuery } = getAllSellProductFromDB;
