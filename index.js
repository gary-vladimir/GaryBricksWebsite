const socialMediaLinks = {
    "ig": "https://www.instagram.com/garybricks3d/",
    "in": "https://www.linkedin.com/in/gary-vladimir/",
    "gitHub": "https://github.com/gary-vladimir",
    "yt": "https://www.youtube.com/@GaryBricks3D",
    "hashnode": "https://blog.garybricks.com/"
};

const keys = Object.keys(socialMediaLinks).slice(0, 5);

for (let key of keys) {
    const aboutSocialMedia = document.getElementById("aboutSocialMedia");
    const aboutLineDiv = document.getElementById("aboutLine");
    const imgElement = document.createElement('img');
    imgElement.src = `/images/aboutSocialMedia/${key}.png`;
    imgElement.addEventListener("click", function () {
        window.open(socialMediaLinks[key], '_blank');
    });
    aboutSocialMedia.insertBefore(imgElement, aboutLineDiv);
}