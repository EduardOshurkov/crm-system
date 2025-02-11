import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Counterparty } from "../types/types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/api" }),
  tagTypes: ["Counterparty"],
  endpoints: (builder) => ({
    getCounterparties: builder.query<Counterparty[], void>({
      query: () => "/counterparties",
    }),
    createCounterparty: builder.mutation({
      query: (newCounterparty) => ({
        url: "/counterparties",
        method: "POST",
        body: newCounterparty,
      }),
      invalidatesTags: ["Counterparty"],
    }),
    updateCounterparty: builder.mutation({
      query: ({ id, updateData }) => ({
        url: `/counterparties/${id}`,
        method: "PUT",
        body: updateData,
      }),
      invalidatesTags: ["Counterparty"],
    }),
    deleteCounterparty: builder.mutation({
      query: ({ id }) => ({
        url: `/counterparties/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Counterparty"],
    }),
  }),
});

export const {
  useGetCounterpartiesQuery,
  useCreateCounterpartyMutation,
  useUpdateCounterpartyMutation,
  useDeleteCounterpartyMutation,
} = api;
