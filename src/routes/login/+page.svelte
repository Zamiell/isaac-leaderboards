<main>
  <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
    <div class="bg-gray-50 shadow sm:rounded-lg sm:overflow-hidden">
      <div class="divide-y divide-gray-200">
        <div class="px-4 py-5 sm:px-6">
          <h2>Sign In</h2>
          <p class="section-text">
            <a href="https://discord.com/">Discord</a> is a popular voice and text
            chat application. In order to avoid having to store usernames and passwords,
            Isaac Streaking accounts are tied to your Discord account. Thus, you
            must first have a Discord account to sign in.
          </p>

          <p class="mb-6" />

          <a href="/api/login">
            <button
              type="button"
              class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <img
                src="/discord.png"
                class="-ml-1 mr-3 h-5 w-5 relative"
                aria-hidden="true"
                alt="Discord"
              />
              Sign in with Discord
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</main>

<style lang="postcss">
  h2 {
    @apply text-3xl font-medium text-gray-900 mb-8;
  }

  .section-text {
    @apply text-base font-medium text-gray-900;
  }
</style>
