<script>
  import FooterLink from './FooterLink.svelte';
</script>

<footer class="pt-28 pb-10">
  <ul class="flex justify-center gap-8">
  
  </ul>
</footer>

<style>
  footer {
    background-image: url('/countdown/images/pattern-hills.svg');
    background-size: cover;
    background-position: top;
  }

  @media only screen and (max-width: 640px) {
    footer {
      background-position: top 0 right 15%;
    }
  }
</style>
