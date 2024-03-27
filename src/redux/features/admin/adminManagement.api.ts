import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam } from "../../../types/global.type";

const adminManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAdmins: builder.query({
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
          url: "/admins",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["admin"],
    }),

    getSingleAdmin: builder.query({
      query: (id) => ({
        url: `/admins/${id}`,
        method: "GET",
      }),
    }),

    updateAnAdmin: builder.mutation({
      query: ({ id, updatedAdmin }) => ({
        url: `admins/${id}`,
        method: "PUT",
        body: updatedAdmin,
      }),
      invalidatesTags: ["admin"],
    }),

    deleteAnAdmin: builder.mutation({
      query: (id) => ({
        url: `admins/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["admin"],
    }),
  }),
});

export const {
  useGetAllAdminsQuery,
  useGetSingleAdminQuery,
  useUpdateAnAdminMutation,
  useDeleteAnAdminMutation,
} = adminManagementApi;
