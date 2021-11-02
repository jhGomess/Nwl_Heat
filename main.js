const linksSocialMedia = {
  github: "jhGomess",
  youtube: "RocketSeat",
  facebook: "RocketSeat",
  instagram: "jh_gomess",
  twitter: "jh_gomess",
};
function changeSocialMediaLinks() {
  userName.textContent = "jh";

  for (li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;
  alert(url);
}
getGitHubProfileInfos();
