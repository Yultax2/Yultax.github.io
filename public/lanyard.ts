interface LanyardData {
  spotify: {
    track_id: string;
    timestamps: { start: number; end?: number };
    song: string;
    artist: string;
    album_art_url: string;
    album: string;
  } | null;
  discord_user: {
    username: string;
    public_flags?: number;
    id: string;
    discriminator: string;
    avatar: string | null;
  };
  discord_status: "online" | "dnd" | "offline" | "idle";
  activities: {
    type: number;
    state: string;
    name: string;
    id: string;
    emoji?: { name: string; id: string; animated: boolean };
    created_at: number;
    application_id?: string;
    timestamps?: { start: number; end?: number };
    session_id?: string;
    details?: string;
    buttons?: string[];
    assets?: {
      small_text: string;
      small_image: string;
      large_text: string;
      large_image: string;
    };
  }[];
  listening_to_spotify: boolean;
  active_on_discord_mobile: boolean;
  active_on_discord_desktop: boolean;
}

const socket = new WebSocket("wss://api.lanyard.rest/socket?compression=zlib");

const cardElements = {
  username: document.querySelector("div.others > h2") as HTMLHeadElement,
  avatar: document.querySelector("div.card > img") as HTMLImageElement,
  status: {
    statusName: document.querySelector(
      "div.others > div > p"
    ) as HTMLParagraphElement,
    albumCover: document.querySelector(
      "div.others > div > img"
    ) as HTMLImageElement,
  },
};

socket.addEventListener("open", () => {
  socket.send(
    JSON.stringify({
      op: 2,
      d: {
        subscribe_to_id: "852582281112715284",
      },
    })
  );

  setInterval(() => {
    socket.send(
      JSON.stringify({
        op: 3,
      })
    );
  }, 30000);
});

socket.addEventListener("message", ({ data }) => {
  const {
    t: type,
    d: lanyard,
  }: { t: "INIT_STATE" | "PRESENCE_UPDATE"; d: LanyardData } = JSON.parse(data);

  if (type === "INIT_STATE" || type === "PRESENCE_UPDATE") {
    const { spotify, discord_user, discord_status } = lanyard;
    const activities = lanyard.activities?.filter(
      (activity) => activity.type !== 4
    );

    cardElements.avatar.src = `https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.png?size=1024`;
    cardElements.username.innerHTML = `${discord_user.username}#${discord_user.discriminator}`;

    switch (discord_status) {
      case "online":
        document.documentElement.style.setProperty("--status-color", "#3ba55c");
        break;
      case "idle":
        document.documentElement.style.setProperty("--status-color", "#faa61a");
        break;
      case "dnd":
        document.documentElement.style.setProperty("--status-color", "#ed4245");
        break;
      default:
        document.documentElement.style.setProperty("--status-color", "#757e8a");
        cardElements.status.statusName.innerHTML = "offline";
        cardElements.status.albumCover.style.display = "none";
        break;
    }

    if (discord_status === "offline") return;

    if (spotify !== null) {
      const songBy = [];

      spotify.artist.split(";").length
        ? spotify.artist
            .split(";")
            .forEach((el) =>
              songBy.push(
                `<a href="https://open.spotify.com/search/${el.trim()}" target="_blank">${el.trim()}</a>`
              )
            )
        : songBy.push(
            `<a href="https://open.spotify.com/search/${spotify.artist}" target="_blank">${spotify.artist}</a>`
          );

      cardElements.status.statusName.innerHTML = `
        Listening to <a href="https://open.spotify.com/track/${
          spotify.track_id
        }" target="_blank">${spotify.song}</a> by ${songBy.join(", ")}</a>
      `;
      cardElements.status.albumCover.src = spotify.album_art_url;
      cardElements.status.albumCover.title = spotify.album;
      cardElements.status.albumCover.setAttribute(
        "onclick",
        `window.open('https://open.spotify.com/track/${spotify.track_id}', '_blank')`
      );
      cardElements.status.albumCover.style.display = "block";
    } else if (activities.length) {
      cardElements.status.albumCover.style.display = "none";
      cardElements.status.statusName.innerHTML = `playing ${
        activities.pop().name
      }`;
    } else {
      cardElements.status.albumCover.style.display = "none";
      cardElements.status.statusName.innerHTML = `doing nothing`;
    }
  }
});
