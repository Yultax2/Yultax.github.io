<script lang="ts">
  export let me: { header: string; description: string };
  export let badges: {
    languages: { name: string; fileName?: string }[];
    others: { name: string; fileName?: string }[];
  };
  export let footer: { name: string; url: string }[];
</script>

<main>
  <div class="container">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="first">
        <h1>&#62;iamtuhana<span /></h1>
      </div>
      <div class="texts">
        <p>
          This website is open source on
          <a
            href="https://github.com/iamtuhana/iamtuhana.github.io"
            target="_blank">GitHub</a
          >
        </p>
        <p>
          Made with ❤ by
          <a href={footer.pop().url} target="_blank">iamtuhana</a>
        </p>
      </div>
    </nav>
    <!-- Navbar end -->

    <!-- Main -->
    <div class="main">
      <div class="me">
        <h2>{me.header}</h2>
        <p>{me.description}</p>
      </div>
      <hr />
      <div class="card">
        <img
          src="./img/defaultAvatar.png"
          alt="Avatar"
          width="156px"
          height="156px"
        />
        <div class="others">
          <h2>username#0000</h2>
          <hr />
          <div class="status">
            <img src="./img/defaultAvatar.png" alt="Album Cover" />
            <p>doing nothing</p>
          </div>
        </div>
      </div>
      <hr />
      <div class="i-know">
        <h2>I Know</h2>
        <div class="badges">
          {#each badges.languages as language}
            <div class={language.name.toLowerCase()}>
              <img
                src="./img/svg/{language?.fileName ||
                  language.name.toLowerCase()}.svg"
                alt="{language.name},"
                width="20px"
                height="20px"
              />
              <p>{language.name}</p>
            </div>
          {/each}
        </div>
      </div>
      <hr />
      <div class="i-love">
        <h2>I Love</h2>
        <div class="badges">
          <div class="mysterious-person" title="🤔">
            <p>Mysterious Person</p>
          </div>
          {#each badges.others as badge}
            <div class={badge.name.toLowerCase()}>
              <img
                src="./img/svg/{badge?.fileName ||
                  badge.name.toLowerCase()}.svg"
                alt="{badge.name},"
                width="20px"
                height="20px"
              />
              <p>{badge.name}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
    <!-- Main end -->

    <!-- Footer -->
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
    <!-- Footer end -->
  </div>
</main>

<style lang="scss">
  $screens: (
    sm: 640px,
    md: 768px,
    lg: 1024px,
  );
  $bestColor: #b47aff;

  @mixin media-screen($screen) {
    @media (max-width: map-get($screens, $screen)) {
      @content;
    }
  }

  div.container {
    margin: 0 200px 0 200px;
    @include media-screen(lg) {
      margin: 0 5px 0 5px;
    }
  }

  nav.navbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 5px 0;
    padding: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: rgba($bestColor, 0.1);

    span {
      display: inline-block;
      margin-left: 3px;
      width: 3px;
      height: 20px;
      background-color: $bestColor;
      animation: blink 1s infinite;
    }
  }

  div.main {
    padding: 5px;
    background-color: rgba($bestColor, 0.1);

    div.me {
      text-align: center;
    }

    div.card {
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      justify-content: center;
      align-items: center;
      background-color: rgba($bestColor, 0.1);

      img {
        margin: 0 10px 0 0;
        border-radius: 50%;
        border: var(--status-color) solid 3px;
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
            display: none;
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

    div.i-know,
    div.i-love {
      align-items: center;
      justify-content: center;

      div.badges {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        div.mysterious-person {
          &:hover {
            animation: rainbow-bg 1.5s linear infinite;
          }
        }

        div {
          display: flex;
          align-items: center;
          margin: 0 5px 5px 5px;
          padding: 5px;
          background-color: rgba($bestColor, 0.25);
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
      }
    }
  }

  footer {
    display: flex;
    justify-content: center;
    height: 20px;
    margin: 5px 0 0 0;
    padding: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: rgba($bestColor, 0.1);

    img {
      margin: 0 5px 0 5px;
      cursor: pointer;
      transition: 0.25s;
      &:hover {
        transform: rotate(10deg);
      }
    }
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
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

  // https://codepen.io/zak/pen/rWJzPy
  @keyframes rainbow-bg {
    100%,
    0% {
      background-color: rgb(255, 0, 0);
    }
    8% {
      background-color: rgb(255, 127, 0);
    }
    16% {
      background-color: rgb(255, 255, 0);
    }
    25% {
      background-color: rgb(127, 255, 0);
    }
    33% {
      background-color: rgb(0, 255, 0);
    }
    41% {
      background-color: rgb(0, 255, 127);
    }
    50% {
      background-color: rgb(0, 255, 255);
    }
    58% {
      background-color: rgb(0, 127, 255);
    }
    66% {
      background-color: rgb(0, 0, 255);
    }
    75% {
      background-color: rgb(127, 0, 255);
    }
    83% {
      background-color: rgb(255, 0, 255);
    }
    91% {
      background-color: rgb(255, 0, 127);
    }
  }
</style>
