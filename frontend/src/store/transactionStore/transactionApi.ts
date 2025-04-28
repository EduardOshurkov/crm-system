import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Transaction } from "../../types/types";

export const transactionApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://crm-system-31t5.onrender.com/api" }),
  tagTypes: ["Transaction"],
  endpoints: (builder) => ({
    getTransaction: builder.query<Transaction[], void>({
      query: () => "/transaction",
      providesTags: ["Transaction"],
    }),
    createTransaction: builder.mutation({
      query: (newTransaction) => ({
        url: "/transaction",
        method: "POST",
        body: newTransaction,
      }),
      invalidatesTags: ["Transaction"],
    }),
    updateTransaction: builder.mutation({
      query: ({ id, updateData }) => ({
        url: `/transaction/${id}`,
        method: "PUT",
        body: updateData,
      }),
      invalidatesTags: ["Transaction"],
    }),
    deleteTransaction: builder.mutation({
      query: ({ _id }) => ({
        url: `/transaction/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Transaction"],
    }),
  }),
});

export const {
  useGetTransactionQuery,
  useCreateTransactionMutation,
  useDeleteTransactionMutation,
  useUpdateTransactionMutation,
} = transactionApi;
