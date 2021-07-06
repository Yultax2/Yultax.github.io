const otherElements = {
  "i-know": document.querySelector(".i-know > .badges"),
  "i-love": document.querySelector(".i-know > .badges"),
};

const languages = [
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
    name: "Bash",
    color: "#4EAA25",
  },
];

for (let i = 0; i < languages.length; i++) {
  const el = languages[i],
    div = document.createElement("div"),
    p = document.createElement("p"),
    img = document.createElement("img");

  p.innerHTML = el.name;
  p.style.color = el?.textColor;

  img.src = `./public/img/svg/${el.name.toLowerCase()}.svg`;

  div.className = el.name.toLowerCase();
  div.style.backgroundColor = el.color;
  div.style.color = el?.textColor;

  div.appendChild(img);
  div.appendChild(p);

  otherElements["i-know"].appendChild(div);
}
