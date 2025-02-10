import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Counterparty } from "../types/types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/api" }),
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
    }),
  }),
});

export const { useGetCounterpartiesQuery, useCreateCounterpartyMutation } = api;
