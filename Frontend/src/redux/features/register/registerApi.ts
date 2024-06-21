import { baseApi } from "../api/api";

const registerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userInfo) => ({
        url: "/user/create-user",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});
export const { useRegisterUserMutation } = registerApi;
