<script lang="ts">
  import Svg from "../components/Svg.svelte";

  export let data: string;
  export let name: string;
  export let color: string;
</script>

<div class="badge {name.toLowerCase()}">
  <svg width="20" height="20">
    <Svg {data} {color} />
  </svg>
  <p>
    {name}
  </p>
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

    p {
      transition: 0.5s;
    }

    &:hover {
      svg {
        transform: rotate(10deg);
      }
    }

    svg {
      transition: 0.25s;
      padding: 5px 5px 5px 0;
    }
  }
</style>
