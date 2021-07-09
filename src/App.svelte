<script lang="ts">
  import Navbar from "./components/Navbar.svelte";
  import LanyardCard from "./components/LanyardCard.svelte";
  import Badge from "./components/Badge.svelte";
  import Footer from "./components/Footer.svelte";

  export let user: { color: string; username: string; discordId: string };
  export let me: {
    color: string;
    header: string;
    description: string;
    metaDescription: string;
  };
  export let badges: {
    languages: { name: string; fileName?: string }[];
    others: { name: string; fileName?: string }[];
  };
  export let footer: { name: string; fileName?: string; url: string }[];
  export let sourceURL: string;
</script>

<div class="container">
  <Navbar username={user.username} {sourceURL} />

  <!-- Main -->
  <div class="main">
    <div class="me">
      <h2>{me.header}</h2>
      <p>{me.description}</p>
    </div>
    <hr />
    <LanyardCard id={user.discordId} />
    <hr />
    <div class="i-know">
      <h2>I Know</h2>
      <div class="badges">
        {#each badges.languages as language}
          <Badge name={language.name} fileName={language?.fileName} />
        {/each}
      </div>
    </div>
    <hr />
    <div class="i-love">
      <h2>I Love</h2>
      <div class="badges">
        {#each badges.others as badge}
          <Badge name={badge.name} fileName={badge?.fileName} />
        {/each}
      </div>
    </div>
  </div>
  <!-- Main end -->

  <Footer {footer} />
</div>

<svelte:head>
  <title>{user.username}</title>

  <meta property="og:title" content={user.username} />
  <meta name="title" content={user.username} />

  <meta property="og:description" content={me.metaDescription} />
  <meta name="description" content={me.metaDescription} />

  <meta name="theme-color" content={user.color} />
</svelte:head>

<style lang="scss">
  div.container {
    margin: 5px 200px 5px 200px;

    @media only screen and (max-width: 1024px) {
      margin: 5px;
    }
  }

  div.main {
    padding: 5px;
    background-color: rgba(var(--color), 0.1);

    div.me {
      text-align: center;
    }

    div.i-know,
    div.i-love {
      align-items: center;
      justify-content: center;

      div.badges {
        display: flex;
        flex-wrap: wrap;

        justify-content: center;
      }
    }
  }
</style>
