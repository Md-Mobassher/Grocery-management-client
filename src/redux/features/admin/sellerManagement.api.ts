import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam } from "../../../types/global.type";

const sellerManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllsellers: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            if (item.value !== undefined) {
              params.append(item.name, item.value as string);
            }
          });
        }
        return {
          url: "/sellers",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["seller"],
    }),

    getSingleSeller: builder.query({
      query: (id) => ({
        url: `/sellers/${id}`,
        method: "GET",
      }),
    }),

    updateASeller: builder.mutation({
      query: ({ id, updatedAdmin }) => ({
        url: `sellers/${id}`,
        method: "PUT",
        body: updatedAdmin,
      }),
      invalidatesTags: ["seller"],
    }),

    deleteASeller: builder.mutation({
      query: (id) => ({
        url: `sellers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["seller"],
    }),
  }),
});

export const {
  useGetAllsellersQuery,
  useGetSingleSellerQuery,
  useUpdateASellerMutation,
  useDeleteASellerMutation,
} = sellerManagementApi;
