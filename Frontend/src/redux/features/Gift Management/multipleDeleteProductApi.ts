import { baseApi } from "../api/api";

const multipleDeleteGiftApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    multipleDeleteGiftIntoDB: builder.mutation({
      query: (id: string[]) => ({
        url: `/product/bulk`,
        method: "POST",
        body: id,
      }),
      invalidatesTags: ["Gifts"],
    }),
  }),
});
export const { useMultipleDeleteGiftIntoDBMutation } = multipleDeleteGiftApi;
