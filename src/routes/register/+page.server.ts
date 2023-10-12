import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ locals }) => {
  console.log(locals);

  /*
  const { data } = locals.session;

  if (data.user !== undefined) {
    throw redirect(307, "/profile");
  }

  if (data.discordAccessToken === undefined) {
    throw redirect(307, "/login");
  }
  */
};
