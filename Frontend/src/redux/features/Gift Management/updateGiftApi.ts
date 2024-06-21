import { baseApi } from "../api/api";

const updateGiftApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateGiftIntoDB: builder.mutation({
      query: ({ productInfo, id }) => ({
        url: `/product/${id}`,
        method: "PUT",
        body: productInfo,
      }),
      invalidatesTags: (arg) => ["Gifts", { type: "Gift", id: arg.id }],
    }),
  }),
});

export const { useUpdateGiftIntoDBMutation } = updateGiftApi;
