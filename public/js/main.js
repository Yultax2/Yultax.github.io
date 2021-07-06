const otherElements = {
  "i-know": document.querySelector(".i-know > .badges"),
  "i-love": document.querySelector(".i-love > .badges"),
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
      filename: "bash",
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
      filename: "gnu",
      color: "#A42E2B",
    },
    {
      name: "Arch Linux",
      filename: "archlinux",
      color: "#1793D1",
    },
    {
      name: "Android",
      color: "#3DDC84",
    },
    {
      name: "Firefox",
      color: "#FF7139",
    },
    {
      name: "Osu!",
      filename: "osu",
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
  p.style.color = el?.textColor;

  img.src = `./public/img/svg/${el?.filename || el.name.toLowerCase()}.svg`;

  div.className = el.name.toLowerCase();
  div.style.backgroundColor = el.color;
  div.style.color = el?.textColor;

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
  p.style.color = el?.textColor;

  img.src = `./public/img/svg/${el?.filename || el.name.toLowerCase()}.svg`;

  div.className = el.name.toLowerCase();
  div.style.backgroundColor = el.color;
  div.style.color = el?.textColor;

  div.appendChild(img);
  div.appendChild(p);

  otherElements["i-love"].appendChild(div);
}
