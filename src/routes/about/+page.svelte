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
              You must start the run as the character from the category you are
              playing. If you accidently start a run as a different character
              from the streak you are working on, you are allowed to exit the
              game and restore a previously backed up save file in order to
              preserve the streak count.
            </li>
            <li>
              You must trigger the ending cinematic of the goal for the category
              you are playing. (For example, if you complete the goal but die
              before jumping into the chest, your streak is not incremented and
              it is counted the same as if you died to the boss. Ending a run at
              Cathedral or Sheol is not allowed.)
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
              rolling", delete champions, reset the Holy Mantle, and so on.) You
              are allowed to save and quit and continue if it the only way to
              recover from a softlock such as a bugged room.
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
              fact does not count.) You must also
              <a
                href="https://streamersplaybook.com/how-to-enable-vod-on-twitch/"
                >enabled VODs</a
              > so that administrators can review your runs after the fact.
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
              </a> for this purpose. Otherwise, you can pause at the beginning or
              at the end of your run.)
            </li>
            <li>
              Playing on PC is preferred, but you are allowed to play on any
              other system if you want (such as the Nintendo Switch), as long as
              the seeds would be indentical to what they would be on PC for
              verification purposes.
            </li>
            <li>
              You are allowed to end the run on another character than the one
              you started with. (For example, you are allowed to take Judas'
              Shadow and revive as Dark Judas.)
            </li>
            <li>
              When your streak starts, the donation machine in the shop can be
              at any value between 0 and 999. However, once the streak starts,
              you are not allowed to change this value in any way other than by
              donating coins to the machine and bombing the machine. (For
              example, you are not allowed to edit the save file in manually
              change the value.) You are allowed to bomb the donation machine in
              the shop in order to get coins that were donated in a previous
              run.
            </li>
            <li>
              You are not allowed to use the debug console, Cheat Engine, or any
              other way of modifying the game.
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
              - <a
                href="https://github.com/Zamiell/isaac-save-installer/releases"
                >100% save file installer</a
              >.
            </li>
            <li>
              <a
                href="https://isaacrankings.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Isaac Rankings
              </a> - The most skilled Isaac players in the world participate in tournaments.
            </li>
            <li>
              <a
                href="https://isaacracing.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Isaac Racing
              </a> - Home of Racing+, a racing mod.
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
