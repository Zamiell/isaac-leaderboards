<script>
  import Leaderboard from "$lib/Leaderboard.svelte";
</script>

<header>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center my-12">
      <p
        class="mt-1 text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl lg:tracking-tight"
      >
        Isaac Streaking
      </p>
      <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
        Competitive leaderboards for <i
          ><a
            href="https://store.steampowered.com/app/1426300/The_Binding_of_Isaac_Repentance/"
            >The Binding of Isaac: Repentance</a
          ></i
        >.
      </p>
    </div>
  </div>
</header>

<main>
  <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
    <div class="bg-gray-50 shadow sm:rounded-lg sm:overflow-hidden">
      <div class="divide-y divide-gray-200">
        <div class="px-4 py-5 sm:px-6">
          <h2 class="section-header">Intro</h2>
          <p class="section-text">
            The Binding of Isaac is a rougue-like, top-down shooter. The goal of
            the game is to travel through 10 floors and defeat the boss. For the
            best players, doing this is easy. But how many times can it be done
            in a row?
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
    <div class="bg-gray-50 shadow sm:rounded-lg sm:overflow-hidden">
      <div class="divide-y divide-gray-200">
        <div class="px-4 py-5 sm:px-6">
          <h2 class="section-header">Rules</h2>
          <ol class="section-text">
            <li>
              During each run, you must both complete the goal and see the
              credits. (For example, if you complete the goal but die before
              jumping into the chest, your streak is not incremented and it is
              counted the same as if you died to the boss.)
            </li>
            <li>Every run must be played on the "hard" difficulty.</li>
            <li>
              Every run must be played on a fully-unlocked save file (i.e. Dead
              God).
            </li>
            <li>
              You are not allowed to pause the game in order to gain any type of
              gameplay advantage. (For example, you are not allowed to pause in
              the middle of a fight to think about what to do next, go back to
              the menu to escape damage, stop a restock machine from "double
              rolling", and so on.)
            </li>
            <li>
              Every run must be streamed live on
              <a
                href="https://www.twitch.tv"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitch
              </a>
              or
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>. (For example, showing video recordings of your run after the
              fact does not count.)
            </li>
            <li>
              Any mods that affect the gameplay are forbidden. (For example,
              mods that add new items, add new rooms, or change vanilla
              mechanics.) Mods that are only cosmetic are allowed. (For example,
              sprite tweaks.)
            </li>
            <li>
              All runs should have the seeds visible on the screen, so that they
              can be replayed to verify if you are cheating. (We recommend using
              the <a
                href="https://github.com/Rchardon/RebirthItemTracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rebirth Item Tracker
              </a> for this purpose. Otherwise, you can pause at the beginning and
              at the end of your run.)
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>

  <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
    <div class="bg-gray-50 shadow sm:rounded-lg sm:overflow-hidden">
      <div class="divide-y divide-gray-200">
        <div class="px-4 py-5 sm:px-6">
          <h2 class="section-header">Other Links</h2>
          <ul class="section-text">
            <li>
              <a
                href="https://docs.google.com/spreadsheets/d/1So2N0caOnTe7ctLg1OYEYg_8Eqc_ak03Vm4TXsgHG0c/edit#gid=2144039399"
                target="_blank"
                rel="noopener noreferrer"
              >
                The old Isaac Streaking Google spreadsheet
              </a> - This website was based on this resource.
            </li>
            <li>
              <a
                href="https://isaacrankings.com/"
                target="_blank"
                rel="noopener noreferrer">Isaac Rankings</a
              > - The most skilled Isaac players in the world participate in tournaments.
            </li>
            <li>
              <a
                href="https://isaacracing.net/"
                target="_blank"
                rel="noopener noreferrer">Isaac Racing</a
              > - Home of Racing+, a racing mod.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</main>

<style lang="postcss">
  .section-header {
    @apply text-3xl font-medium text-gray-900 mb-4;
  }

  .section-text {
    @apply text-base font-medium text-gray-900;
  }

  .section-text > li {
    @apply list-decimal relative left-5 mb-1;
  }
</style>
