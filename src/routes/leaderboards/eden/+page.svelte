<script>
  import Leaderboard from "$lib/Leaderboard.svelte";
</script>

<header>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
    <img
      src="/characters/eden.png"
      alt="Tainted Lost"
      class="h-12 w-10 relative bottom-1"
    />
    <div class="pr-6" />
    <h1 class="text-3xl tracking-tight font-bold leading-tight text-gray-900">
      Eden Leaderboards
    </h1>
  </div>
</header>
<main>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <Leaderboard />
  </div>
</main>
