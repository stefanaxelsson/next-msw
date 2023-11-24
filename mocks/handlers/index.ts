import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(
    "https://www.google.com/sitemap.xml",
    ({ request, params, cookies }) => {
      console.log("mocked response full url");
    }
  ),
  http.get("/sitemap.xml", ({ request, params, cookies }) => {
    console.log("mocked response path");
  }),
];
