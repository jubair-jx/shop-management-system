import { baseApi } from "../api/api";

const deleteGiftApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteGiftIntoDB: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Gifts"],
    }),
  }),
});
export const { useDeleteGiftIntoDBMutation } = deleteGiftApi;
