import type { Provider } from "@auth/core/providers";
import { SvelteKitAuth } from "@auth/sveltekit";

export const handle = SvelteKitAuth({
  // The type assertion is necessary:
  // https://github.com/nextauthjs/next-auth/issues/6174
  providers: [
    /*
    Discord({
      clientId: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET,
    }),
    */
  ] as Provider[],

  // adapter: PrismaAdapter(db),
});

/** Has to be above the `handle` definition since function expressions are not hoisted. */
/*
export const postSessionRetrieval: Handle = async ({ event, resolve }) => {
  await getUser(event);
  return resolve(event);
};

export const handle = handleSession(
  {
    secret: SESSION_KEY,
    expires: 365, // 1 year
    // TODO: add secure cookie settings
  },
  postSessionRetrieval,
);

async function getUser(event: RequestEvent) {
  const { data } = event.locals.session;

  // If there is already a user session, then we do not have to query the Discord API.
  if (data.user !== undefined) {
    return;
  }

  // If they have not granted us access to their Discord account, then we cannot proceed.
  if (data.discordAccessToken === undefined) {
    return;
  }

  const userRes = await fetch("https://discord.com/api/v6/users/@me", {
    headers: {
      Authorization: `Bearer ${data.discordAccessToken}`,
    },
  });

  const userText = await userRes.text();
  if (!userRes.ok) {
    return;
  }

  const userData = JSON.parse(userText) as Record<string, unknown>;

  // `userData` will be something like:
  /*
    {
      id: '71242588694249472',
      username: 'Zamiel',
      avatar: 'f9600b33eaab162d36ca7698d6d37987',
      avatar_decoration: null,
      discriminator: '8743',
      public_flags: 0,
      flags: 0,
      banner: null,
      banner_color: null,
      accent_color: null,
      locale: 'en-US',
      mfa_enabled: true,
      premium_type: 2
    }
  */

/*
  const discordID = userData.id;
  if (typeof discordID !== "string") {
    return;
  }

  const user = await models.users.get(discordID);
  if (user === null) {
    return;
  }

  await event.locals.session.update(() => ({ user }));
}

// TODO: check for unique username
// https://github.com/FGRibreau/node-unidecode/issues/16
*/
