import type { Handle } from "@sveltejs/kit";
import * as cookie from "cookie";

export const handle: Handle = async ({ event, resolve }) => {
  const existingCookie = event.request.headers.get("cookie") ?? "";
  const cookies = cookie.parse(existingCookie);
  const userID = cookies.userID === "" ? crypto.randomUUID() : cookies.userID;
  event.locals.userID = userID;

  const response = await resolve(event);

  // If this is the first time the user has visited this app, set a cookie so that we recognize them
  // when they return.
  response.headers.set(
    "set-cookie",
    cookie.serialize("userID", userID, {
      path: "/",
      httpOnly: true,
    }),
  );

  return response;
};
