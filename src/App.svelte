<script lang="ts">
  import Navbar from "./components/Navbar.svelte";
  import LanyardCard from "./components/LanyardCard.svelte";
  import GithubCard from "./components/GithubCard.svelte";
  import Badge from "./components/Badge.svelte";
  import Footer from "./components/Footer.svelte";

  import { getRepos } from "./github";

  export let user: { username: string; discordId: string };
  export let meDiv: {
    header: string;
    description: string;
    metaDescription: string;
  };
  export let badges: {
    languagesAndTools: [{ name: string; svg: string; svgColor: string }];
    others: [{ name: string; svg: string; svgColor: string }];
  };
  export let footer: [
    { name: string; url: string; svg: string; svgColor: string }
  ];
  export let sourceURL: string;
</script>

<div class="container">
  <Navbar username={user.username} {sourceURL} />

  <!-- Main -->
  <div class="main">
    <div class="me">
      <h2>{meDiv.header}</h2>
      <p>{meDiv.description}</p>
    </div>
    <hr />
    <LanyardCard id={user.discordId} />
    <hr />
    <div class="i-know">
      <h2>I Know</h2>
      <div class="badges">
        {#each badges.languagesAndTools as language}
          <Badge
            data={language.svg}
            name={language.name}
            color={language.svgColor}
          />
        {/each}
      </div>
    </div>
    <hr />
    <div class="i-love">
      <h2>I Love</h2>
      <div class="badges">
        {#each badges.others as badge}
          <Badge data={badge.svg} name={badge.name} color={badge.svgColor} />
        {/each}
      </div>
    </div>
    <hr />
    <div class="github">
      <h2>Latest Github Activity</h2>
      <div class="github-cards">
        {#await getRepos("iamtuhana") then data}
          {#each data as project}
            <GithubCard
              name={project.name}
              description={project.description ?? "Description not specified."}
              url={project.svn_url}
              stars={project.stargazers_count}
            />
          {/each}
        {/await}
      </div>
    </div>
  </div>
  <!-- Main end -->

  <Footer {footer} />
</div>

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

    div.github {
      flex-wrap: wrap;
      justify-content: center;

      div.github-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  }
</style>
