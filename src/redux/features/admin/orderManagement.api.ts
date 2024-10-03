import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam } from "../../../types/global.type";

const orderManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
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
          url: "/orders",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["order"],
    }),

    getSingleOrder: builder.query({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "GET",
      }),
    }),

    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: "/orders",
        method: "POST",
        body: newOrder,
      }),
      invalidatesTags: ["order"],
    }),

    updateAOrder: builder.mutation({
      query: ({ id, updatedOrder }) => ({
        url: `orders/${id}`,
        method: "PATCH",
        body: updatedOrder,
      }),
      invalidatesTags: ["order"],
    }),

    deleteAOrder: builder.mutation({
      query: (id) => ({
        url: `orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useGetSingleOrderQuery,
  useCreateOrderMutation,
  useUpdateAOrderMutation,
  useDeleteAOrderMutation,
} = orderManagementApi;
