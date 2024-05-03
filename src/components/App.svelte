<script>
  import Counter from './Counter.svelte';
  import Footer from './Footer.svelte';
</script>

<body
  class="grid grid-rows-[1fr_auto] items-center min-h-lvh bg-gradient-to-b from-blue-800 to-purple font-bold text-center"
>
  <main class="px-6">
    <h1
      class="uppercase tracking-[0.3rem] text-md text-white leading-tight mb-16"
    >
      We're launching soon
    </h1>
    <Counter />
  </main>
  <Footer />
</body>
