import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ locals }) => {
  console.log(locals);
  // await locals.session.destroy();
  throw redirect(307, "/");
};
