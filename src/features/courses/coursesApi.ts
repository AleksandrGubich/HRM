import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Course } from "../../types/Course";

type Product = {
  id: number;
  title: string;
  category: string;
};

type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

type GetCoursesArgs = {
  skip?: number;
  limit?: number;
};

type CoursesResponse = {
  courses: Course[];
  total: number;
  skip: number;
  limit: number;
};

const mapProductToCourse = (product: Product) => ({
  id: product.id,
  title: product.title,
  type: "Course",
  category: product.category,
  studentsAmount: 20,
  passedAmount: 20,
});

export const coursesApi = createApi({
  reducerPath: "coursesApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),

  endpoints: (builder) => ({
    getCourses: builder.query<CoursesResponse, GetCoursesArgs | void>({
      query: (args) => {
        const limit = args?.limit ?? 4;
        const skip = args?.skip ?? 0;

        return {
          url: "/products",
          params: {
            limit,
            skip,
            select: "id,title,category",
          },
        };
      },

      transformResponse: (response: ProductResponse): CoursesResponse => {
        return {
          total: response.total,
          skip: response.skip,
          limit: response.limit,
          courses: response.products.map(mapProductToCourse),
        };
      },
    }),

    getCourseById: builder.query<Course, number>({
      query: (id) => ({
        url: `products/${id}`,
        params: {
          select: "id,title,category",
        },
      }),

      transformResponse: (product: Product): Course => {
        return mapProductToCourse(product);
      },
    }),
  }),
});

export const { useGetCoursesQuery, useGetCourseByIdQuery } = coursesApi;
