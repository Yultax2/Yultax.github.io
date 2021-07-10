<script lang="ts">
  export let data: string;
  export let size = "20";
  export let width = size;
  export let height = size;
  export let color = "#FFFFFF";

  $: path = data.match(/<path\b([\s\S]*?)\/>/g)[0];
</script>

<svg {width} {height} fill={color} viewBox="0 0 24 24">
  {@html path}
</svg>
