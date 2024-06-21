import { baseApi } from "../api/api";

const getSingleGiftFromDB = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    singleGift: builder.query({
      query: (id: string) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: (args) => [{ type: "Gift", id: args }],
    }),
  }),
});

export const { useSingleGiftQuery } = getSingleGiftFromDB;
