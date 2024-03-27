import { baseApi } from "@/redux/api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllItemsFromCart: builder.query({
      query: () => ({
        url: `/cart`,
        method: "GET",
      }),
      providesTags: ["cart"],
    }),

    addToCart: builder.mutation({
      query: (newItem) => ({
        url: "/cart",
        method: "POST",
        body: newItem,
      }),
      invalidatesTags: ["cart"],
    }),

    updateCart: builder.mutation({
      query: ({ itemId, updatedCart }) => ({
        url: `cart/${itemId}`,
        method: "PUT",
        body: updatedCart,
      }),
      invalidatesTags: ["cart"],
    }),

    clearItemFromCart: builder.mutation({
      query: (itemId) => ({
        url: `cart/${itemId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),

    clearCart: builder.mutation({
      query: () => ({
        url: `cart`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useGetAllItemsFromCartQuery,
  useAddToCartMutation,
  useUpdateCartMutation,
  useClearItemFromCartMutation,
  useClearCartMutation,
} = cartApi;
