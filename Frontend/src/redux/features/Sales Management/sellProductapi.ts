import { baseApi } from "../api/api";

const sellGiftApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sellGiftFromDB: builder.mutation({
      query: ({ sellInfo, id }) => ({
        url: `product/${id}/sell`,
        method: "POST",
        body: sellInfo,
      }),
      invalidatesTags: ["Sell"],
    }),
  }),
});

export const { useSellGiftFromDBMutation } = sellGiftApi;
