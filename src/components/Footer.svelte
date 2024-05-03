<script>
  import facebookIcon from '../../public/images/icon-facebook.svg';
  import pinterestIcon from '../../public/images/icon-pinterest.svg';
  import instagramIcon from '../../public/images/icon-instagram.svg';
</script>

<footer class="pt-28 pb-10">
  <ul class="flex justify-center gap-8">
    <li>
      <button>
        <image src={facebookIcon.src} />
      </button>
    </li>
    <li>
      <button>
        <image src={pinterestIcon.src} />
      </button>
    </li>
    <li>
      <button>
        <image src={instagramIcon.src} />
      </button>
    </li>
  </ul>
</footer>

<style>
  footer {
    background-image: url('/images/pattern-hills.svg');
    background-size: cover;
    background-position: center;
  }

  @media only screen and (max-width: 640px) {
    footer {
      background-position: top 0 right 15%;
    }
  }
</style>
