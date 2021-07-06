const otherElements = {
  "i-know": document.querySelector(".i-know > .badges") as HTMLDivElement,
  "i-love": document.querySelector(".i-love > .badges") as HTMLDivElement,
};

const badges = {
  languages: [
    {
      name: "JavaScript",
      color: "#F7DF1E",
      textColor: "black",
    },
    {
      name: "TypeScript",
      color: "#3178C6",
    },
    {
      name: "Deno",
      color: "#FFFFFF",
    },
    {
      name: "Python",
      color: "#3776AB",
    },
    {
      name: "HTML",
      color: "#E34F26",
    },
    {
      name: "Sass",
      color: "#CC6699",
    },
    {
      name: "Bash Script",
      fileName: "bash",
      color: "#4EAA25",
    },
  ],
  others: [
    {
      name: "Linux",
      color: "#FCC624",
    },
    {
      name: "GNU/Linux",
      fileName: "gnu",
      color: "#A42E2B",
    },
    {
      name: "Arch Linux",
      fileName: "archlinux",
      color: "#1793D1",
    },
    {
      name: "GNOME",
      color: "#4A86CF",
    },
    {
      name: "Git",
      color: "#F05032",
    },
    {
      name: "Android",
      color: "#3DDC84",
    },
    {
      name: "Vim",
      color: "#019733",
    },
    {
      name: "Visual Studio Code",
      fileName: "visualstudiocode",
      color: "#007ACC",
    },
    {
      name: "Firefox",
      color: "#FF7139",
    },
    {
      name: "Osu!",
      fileName: "osu",
      color: "#FF66AA",
    },
  ],
};

// I Know
for (let i = 0; i < badges.languages.length; i++) {
  const el = badges.languages[i],
    div = document.createElement("div"),
    p = document.createElement("p"),
    img = document.createElement("img");

  p.innerHTML = el.name;

  img.src = `./public/img/svg/${el?.fileName || el.name.toLowerCase()}.svg`;
  img.width = 20;
  img.height = 20;

  div.className = el?.fileName || el.name.toLowerCase();

  div.appendChild(img);
  div.appendChild(p);

  otherElements["i-know"].appendChild(div);
}

// I Love
for (let i = 0; i < badges.others.length; i++) {
  const el = badges.others[i],
    div = document.createElement("div"),
    p = document.createElement("p"),
    img = document.createElement("img");

  p.innerHTML = el.name;

  img.src = `./public/img/svg/${el?.fileName || el.name.toLowerCase()}.svg`;
  img.width = 20;
  img.height = 20;

  div.className = el?.fileName || el.name.toLowerCase();

  div.appendChild(img);
  div.appendChild(p);

  otherElements["i-love"].appendChild(div);
}
