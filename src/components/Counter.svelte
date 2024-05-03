<script>
  import CounterItem from './CounterItem.svelte';
</script>

<div class="grid grid-cols-[repeat(auto-fit_,4.25rem)] gap-4">
  <CounterItem label="days" value="08" />
  <CounterItem label="hours" value="23" />
  <CounterItem label="minutes" value="55" />
  <CounterItem label="seconds" value="41" />
</div>
