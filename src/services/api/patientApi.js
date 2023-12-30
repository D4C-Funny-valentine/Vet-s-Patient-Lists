import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3005";

export const patientApi = createApi({
  reducerPath: "patientApi",
  tagTypes: ["patient"],
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    getAllPatients: builder.query({
      query: () => ({
        url: "/patients",
        method: "GET",
      }),
      providesTags: ["patient"],
    }),
    getSinglePatient: builder.query({
      query: (id) => ({
        url: `/patients/${id}`,
        method: "GET",
      }),
      providesTags: ["patient"],
    }),
    createPatient: builder.mutation({
      query: (data) => ({
        url: "/patients",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["patient"],
    }),
    updatePatient: builder.mutation({
      query: ({ id, data }) => ({
        url: `/patients/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["patient"],
    }),
    deletePatients: builder.mutation({
      query: (id) => ({
        url: `/patients/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["patient"],
    }),
  }),
});

export const {
  useGetAllPatientsQuery,
  useGetSinglePatientQuery,
  useCreatePatientMutation,
  useUpdatePatientMutation,
  useDeletePatientsMutation,
} = patientApi;
