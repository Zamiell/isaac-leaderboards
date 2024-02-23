import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
  // eslint-disable-next-line deprecation/deprecation
  const session = await event.locals.getSession();
  // console.log(session);
  return {
    session,
  };
};
