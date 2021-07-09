<script lang="ts">
  export let id: string;

  import type { LanyardData } from "../@types/types";

  import { onMount } from "svelte";
  import { initLanyard } from "../lanyard";
  let lanyardData: LanyardData;

  onMount(() => {
    initLanyard(id).then((subs) => {
      subs.subscribe((msg) => (lanyardData = msg));
    });
  });
</script>

{#if lanyardData}
  <div class="card">
    <img
      src={`https://cdn.discordapp.com/avatars/${lanyardData.discord_user.id}/${lanyardData.discord_user.avatar}.png?size=1024`}
      alt="Avatar"
      width="156px"
      height="156px"
    />
    <div class="others">
      <h2>
        {`${lanyardData.discord_user.username}#${lanyardData.discord_user.discriminator}`}
      </h2>
      <hr />
      <div class="status">
        {#if lanyardData.spotify}
          <img
            src={lanyardData.spotify.album_art_url}
            alt="Album Cover"
            title={lanyardData.spotify.album}
          />
          <p>
            listening to <a
              href="https://open.spotify.com/track/{lanyardData.spotify
                .track_id}">{lanyardData.spotify.song}</a
            >
            by {lanyardData.spotify.artist}
          </p>
        {:else if lanyardData.activities.length}
          <p>
            playing {lanyardData.activities
              .filter((activity) => activity.type !== 4)
              .pop().name}
          </p>
        {:else}
          <p>doing nothing</p>
        {/if}
      </div>
    </div>
  </div>
{:else}
  <div class="card">
    <h2>Loading lanyard...</h2>
  </div>
{/if}

<style lang="scss">
  div.card {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: center;
    align-items: center;
    background-color: rgba(var(--color), 0.1);

    img {
      margin: 0 10px 0 0;
      border-radius: 50%;
    }

    div.others {
      max-width: 300px;

      hr {
        margin-right: auto;
        margin-left: auto;
        width: 150px;
      }

      div.status {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 300px;

        img {
          cursor: pointer;
          margin: 0 10px 0 0;
          width: 50px;
          border: rgba(black, 0.1) solid 3px;
          border-radius: 50%;
          animation: spin 10s linear infinite;
        }
      }
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
