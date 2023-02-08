import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// create the api

export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (user) => ({
                url: "/users/signup",
                method: "POST",
                body: user,
            }),
        }),

        login: builder.mutation({
            query: (user) => ({
                url: "/users/login",
                method: "POST",
                body: user,
            }),
       
        }),

        createProduct: builder.mutation({
            query: (product) => ({
                url: "/products",
                body: product,
                method: "POST",
            }),
        }),

        deleteProduct: builder.mutation({
            query: ({ product_id, user_id }) => ({
                url: `/products/${product_id}`,
                body: {
                    user_id,
                },
                method: "DELETE",
            }),
        }),

        updateProduct: builder.mutation({
            query: (product) => ({
                url: `/products/${product.id}`,
                body: product,
                method: "PATCH",
            }),
        }),


    }),
});

export const {useSignupMutation,useLoginMutation,useCreateProductMutation} = appApi;

export default appApi;