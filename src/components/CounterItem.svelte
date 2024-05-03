<script>
  export let label;
  export let value = 0;
</script>

<div>
  <div
    class="flex items-center justify-center bg-gradient-to-b from-blue-600/50 to-50% to-blue-600 from-50% size-[4.25rem]"
  >
    <p class="text-primary-red text-xl">
      {value.toLocaleString('en-US', { minimumIntegerDigits: 2 })}
    </p>
  </div>
  <p class="text-primary-blue text-sm uppercase tracking-[3px]">{label}</p>
</div>
