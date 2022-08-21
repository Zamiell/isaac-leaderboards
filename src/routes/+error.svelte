<script>
  import { page } from "$app/stores";
</script>

<header>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center my-12">
      <p
        class="mt-1 text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl lg:tracking-tight"
      >
        {$page.status}
      </p>
      <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
        {$page.error.message}
      </p>
    </div>
  </div>
</header>
