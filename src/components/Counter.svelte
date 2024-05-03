<script>
  import { onMount, onDestroy } from 'svelte';
  import CounterItem from './CounterItem.svelte';

  // Timestamp in seconds
  const targetTime = 1720519200;

  let intervalId = undefined;

  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  onMount(() => {
    updateCountdown();
    intervalId = setInterval(updateCountdown, 1000);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });

  function updateCountdown() {
    const currentTime = new Date().getTime();
    const timeDifference = targetTime * 1000 - currentTime;

    if (timeDifference <= 0) {
      console.log('Countdown finished!');
      clearInterval(intervalId);
      return;
    }

    days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  }
</script>

<div
  class="grid grid-cols-[repeat(auto-fit_,minmax(4.25rem_,auto))] justify-center gap-4 sm:gap-8"
>
  <CounterItem label="days" value={days} />
  <CounterItem label="hours" value={hours} />
  <CounterItem label="minutes" value={minutes} />
  <CounterItem label="seconds" value={seconds} />
</div>
