<script>
  export let label;
  export let value = 0;
</script>

<div class="relative overflow-clip">
  <div
    class="board flex items-center justify-center bg-gradient-to-b from-blue-600/50 to-50% to-blue-600 from-50% size-[4.25rem] rounded-md shadow-lg before:bg-blue-900 after:bg-blue-900"
  >
    <p class="text-primary-red text-xl">
      {value.toLocaleString('en-US', { minimumIntegerDigits: 2 })}
    </p>
  </div>
  <p class="text-primary-blue text-sm uppercase tracking-[2px] my-4">{label}</p>
</div>

<style>
  .board::before,
  .board::after {
    --radius: 0.5rem;
    content: '';
    position: absolute;
    width: var(--radius);
    height: var(--radius);
    border-radius: 50%;
  }

  .board::before {
    left: calc(var(--radius) / -2);
  }

  .board::after {
    right: calc(var(--radius) / -2);
  }
</style>
