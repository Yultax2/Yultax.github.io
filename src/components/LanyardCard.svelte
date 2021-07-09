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

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
