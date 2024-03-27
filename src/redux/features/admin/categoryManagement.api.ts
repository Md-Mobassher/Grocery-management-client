import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam } from "../../../types/global.type";

const categoryManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
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
          url: "/categories",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["category"],
    }),

    getSingleCategory: builder.query({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "GET",
      }),
    }),

    addCategory: builder.mutation({
      query: (newCategory) => ({
        url: "/categories",
        method: "POST",
        body: newCategory,
      }),
      invalidatesTags: ["category"],
    }),

    updateACategory: builder.mutation({
      query: ({ id, updatedCategory }) => ({
        url: `categories/${id}`,
        method: "PUT",
        body: updatedCategory,
      }),
      invalidatesTags: ["category"],
    }),

    deleteACategory: builder.mutation({
      query: (id) => ({
        url: `categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["category"],
    }),

    bulkDeleteCategories: builder.mutation({
      query: (categoryIds) => ({
        url: `categories/bulk-delete`,
        method: "DELETE",
        body: categoryIds,
      }),
      invalidatesTags: ["category"],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetSingleCategoryQuery,
  useAddCategoryMutation,
  useUpdateACategoryMutation,
  useDeleteACategoryMutation,
  useBulkDeleteCategoriesMutation,
} = categoryManagementApi;
