<script lang="ts">
  export let name: string;
  export let fileName: string;
</script>

<div class="badge {name.toLowerCase()}">
  <img
    src="./img/svg/{fileName ? fileName : name.toLowerCase()}.svg"
    alt="{name},"
    width="20px"
    height="20px"
  />
  <p>{name}</p>
</div>

<style lang="scss">
  div.badge {
    display: flex;
    align-items: center;
    margin: 0 5px 10px 5px;
    padding: 5px;
    background-color: rgba(var(--color), 0.25);
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;

    &:hover {
      img {
        transform: rotate(10deg);
      }
    }

    img {
      transition: 0.25s;
      padding: 5px 5px 5px 0;
    }
  }
</style>
