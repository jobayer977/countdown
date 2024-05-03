<script>
  import Counter from './Counter.svelte';
</script>

<body
  class="grid grid-rows-[1fr_auto] items-center min-h-lvh bg-gradient-to-b from-blue-800 to-purple bg-blue-800 font-bold text-center"
>
  <main class="px-6">
    <h1
      class="uppercase tracking-[0.3rem] text-md text-white leading-tight mb-16"
    >
      We're launching soon
    </h1>
    <Counter />
  </main>
  <div class="p-20 bg-purple"></div>
</body>
