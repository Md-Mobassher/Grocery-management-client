/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";

const baseQuery = fetchBaseQuery({
  // baseUrl: "https://grocery-management-server.vercel.app/api/v1",
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `$(token)`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result;
  try {
    result = await baseQuery(args, api, extraOptions);
  } catch (error) {
    // Handle any fetch errors
    console.error("Fetch error:", error);
    return { error };
  }

  if (result && result.error) {
    if (result.error.status === 404) {
      toast.error(
        (result.error.data as { message?: string })?.message || "Not Found",
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
    } else if (result.error.status === 403) {
      toast.error(
        (result.error.data as { message?: string })?.message || "Forbidden",
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
    } else if (result.error.status === 401) {
      console.log("Sending refresh token");
      if (result?.error?.status === 401) {
        //* Send Refresh
        console.log("Sending refresh token");

        const res = await fetch(
          "https://grocery-management-server.vercel.app/api/v1/auth/refresh-token",
          {
            method: "POST",
            credentials: "include",
          }
        );

        const data = await res.json();

        if (data?.data?.accessToken) {
          const user = (api.getState() as RootState).auth.user;

          api.dispatch(
            setUser({
              user,
              token: data.data.accessToken,
            })
          );
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logout());
        }

        return result;
      }
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: [
    "product",
    "cart",
    "category",
    "order",
    "admin",
    "seller",
    "buyer",
  ],
  endpoints: () => ({}),
});
