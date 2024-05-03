<script>
  export let label;
  export let value = 0;
</script>

<div>
  <p class="text-primary-red text-xl">
    {value.toLocaleString('en-US', { minimumIntegerDigits: 2 })}
  </p>
  <p class="text-primary-blue text-sm uppercase tracking-[3px]">{label}</p>
</div>
