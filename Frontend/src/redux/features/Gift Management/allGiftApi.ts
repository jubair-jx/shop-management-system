import { baseApi } from "../api/api";

const getAllGiftFromDB = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllGifts: builder.query({
      query: (filterQuery) => {
        const query = Object?.entries(filterQuery || {})
          ?.map((el) => `${el[0]}=${el[1]}`)
          .join("&");

        return {
          url: `/product?${query}`,
          method: "GET",
        };
      },
      providesTags: ["Gifts"],
    }),
  }),
});

export const { useGetAllGiftsQuery } = getAllGiftFromDB;
