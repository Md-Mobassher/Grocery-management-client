import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam } from "../../../types/global.type";

const buyerManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBuyers: builder.query({
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
          url: "/buyers",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["buyer"],
    }),

    getSingleBuyer: builder.query({
      query: (id) => ({
        url: `/buyers/${id}`,
        method: "GET",
      }),
    }),

    updateABuyer: builder.mutation({
      query: ({ id, updatedBuyer }) => ({
        url: `buyers/${id}`,
        method: "PUT",
        body: updatedBuyer,
      }),
      invalidatesTags: ["buyer"],
    }),

    deleteABuyer: builder.mutation({
      query: (id) => ({
        url: `buyers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["buyer"],
    }),
  }),
});

export const {
  useGetAllBuyersQuery,
  useGetSingleBuyerQuery,
  useUpdateABuyerMutation,
  useDeleteABuyerMutation,
} = buyerManagementApi;
