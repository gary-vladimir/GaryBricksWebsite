const socialMediaLinks = {
  ig: "https://www.instagram.com/garybricks3d/",
  in: "https://www.linkedin.com/in/gary-vladimir/",
  gitHub: "https://github.com/gary-vladimir",
  yt: "https://www.youtube.com/@GaryBricks3D",
  hashnode: "https://blog.garybricks.com/",
};

const projects = {
  Would_You_Rather: "https://github.com/gary-vladimir/Would-You-Rather",
  Mars_Dashboard: "https://github.com/gary-vladimir/Mars-Dashboard",
  Mobile_Flashcards: "https://github.com/gary-vladimir/Mobile-Flashcards",
  Weather_Journal: "https://github.com/gary-vladimir/WeatherAppTutorial",
  TodoApp: "https://github.com/gary-vladimir/TodoApp",
};

const myTools = [
  "react",
  "css",
  "git",
  "tailwind",
  "onshape",
  "node",
  "redux",
  "sass",
  "figma",
  "remix",
  "js",
  "webpack",
  "c++",
  "java",
  "html",
  "typeScript",
  "babel",
  "blender",
];

const keys = Object.keys(socialMediaLinks).slice(0, 5);

for (let key of keys) {
  const aboutSocialMedia = document.getElementById("aboutSocialMedia");
  const aboutLineDiv = document.getElementById("aboutLine");
  const imgElement = document.createElement("a");
  imgElement.style.backgroundImage = `url(/images/aboutSocialMedia/${key}.png)`;
  imgElement.href = socialMediaLinks[key];
  aboutSocialMedia.insertBefore(imgElement, aboutLineDiv);
}

const keys2 = Object.keys(projects);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(keys2);

for (let i = 0; i < 4; i++) {
  const key = keys2[i];
  const work = document.getElementById("circuitSVGcontainer");
  const div = document.createElement("a");
  div.style.backgroundImage = `url(/images/workImages/projects/${key}.jpg)`;
  div.className = "project";
  div.href = projects[key];
  work.appendChild(div);
}

for (let i = 0; i < 9; i++) {
  const toolContainer = document.getElementById("row1");
  const imgElement = document.createElement("img");
  imgElement.src = `/images/workImages/tools/${myTools[i]}.jpg`;
  toolContainer.appendChild(imgElement);
}

for (let i = 9; i < 18; i++) {
  const toolContainer = document.getElementById("row2");
  const imgElement = document.createElement("img");
  imgElement.src = `/images/workImages/tools/${myTools[i]}.jpg`;
  toolContainer.appendChild(imgElement);
}

document.addEventListener("DOMContentLoaded", () => {
  const scrollbar = Scrollbar.init(document.body, {
    damping: 0.08, // Adjust for smoothness
    renderByPixel: true,
  });
});
