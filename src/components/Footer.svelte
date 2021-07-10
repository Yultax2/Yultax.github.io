<script lang="ts">
  import Svg from "../components/Svg.svelte";

  export let footer: [
    { name: string; url: string; svg: string; svgColor: string }
  ];
</script>

<footer>
  {#each footer as el}
    <svg on:click={() => window.open(el.url, "_blank")} width="20" height="20">
      <Svg data={el.svg} color={el.svgColor} />
    </svg>
  {/each}
</footer>

<style lang="scss">
  footer {
    display: flex;
    justify-content: center;
    height: 20px;
    margin: 5px 0 0 0;
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: rgba(var(--color), 0.1);

    svg {
      margin: 0 5px 0 5px;
      cursor: pointer;
      transition: 0.25s;

      &:hover {
        transform: rotate(10deg);
      }
    }
  }
</style>
