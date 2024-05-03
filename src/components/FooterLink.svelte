<script>
  export let iconPath;
  export let link = '#';
</script>

<li>
  <a href={link} target="_blank" class="group">
    <svg
      class="group-hover:fill-primary-red transition-[fill] duration-300"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#8385A9"><path d={iconPath} /></svg
    >
  </a>
</li>
