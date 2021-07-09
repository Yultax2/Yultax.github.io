<script lang="ts">
  export let username: string;
  export let sourceURL: string;
</script>

<nav class="navbar">
  <div class="first">
    <h1>&#62;{username}</h1>
  </div>
  <div class="texts">
    <p>
      This website is open source on
      <a href={sourceURL} target="_blank">GitHub</a>
    </p>
    <p>Made with ❤ by {username}</p>
  </div>
</nav>

<style>
  nav.navbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 5px 0;
    padding: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: rgba(var(--color), 0.1);
  }
</style>
