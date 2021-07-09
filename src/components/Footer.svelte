<script lang="ts">
  export let footer: { name: string; url: string }[];
</script>

<footer>
  {#each footer as el}
    <img
      src="./img/svg/{el.name.toLowerCase()}.svg"
      alt={el.name}
      title={el.name}
      width="20px"
      height="20px"
      on:click={() => window.open(el.url, "_blank")}
    />
  {/each}
</footer>

<style lang="scss">
  footer {
    display: flex;
    justify-content: center;
    height: 20px;
    margin: 5px 0 0 0;
    padding: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: rgba(var(--color), 0.1);

    img {
      margin: 0 5px 0 5px;
      cursor: pointer;
      transition: 0.25s;

      &:hover {
        transform: rotate(10deg);
      }
    }
  }
</style>
