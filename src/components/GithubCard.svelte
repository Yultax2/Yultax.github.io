<script lang="ts">
  export let name: string;
  export let description: string;
  export let url: string;
  export let stars: number;
</script>

<div class="card" title={name} on:click={() => window.open(url, "_blank")}>
  <div class="name-and-stars">
    <p>{name}</p>
    <p>{stars} Star</p>
  </div>
  <p>{description}</p>
</div>

<style lang="scss">
  div.card {
    display: flex;
    flex-direction: column;
    margin: 5px;
    padding: 15px;
    border-radius: 5px;
    background-color: rgba(var(--color), 0.1);
    width: 275px;

    div.name-and-stars {
      display: flex;
      flex-wrap: wrap;
      margin: 0 0 10px 0;
      align-items: center;
      justify-content: space-between;
    }

    &:hover {
      cursor: pointer;
    }
  }
</style>
