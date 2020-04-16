const projectsEl = document.getElementById("featured-projects");
const listEl = document.getElementById("featured-projects-list");
const userProfileEl = document.getElementById("user-profile");

userProfileEl.classList.add("hidden");

projectsEl.classList.add("hidden");

const USERNAME = "nishanbajracharya";
const REPO_COUNT = 4;

const GRADIENTS = ["blue", "cherry", "reaqua", "orange"];

function getPinnedRepos(username) {
  fetch(`https://gh-pinned-repos.now.sh/?username=${username}`)
    .then((res) => res.json())
    .then((res) => {
      projectsEl.classList.remove("hidden");

      listEl.innerHTML = "";

      sliceArray(res, REPO_COUNT).forEach((repo, i) => {
        const repoEl = createRepoItem(repo, username, i);

        listEl.appendChild(repoEl);
      });
    });
}

function createRepoItem(repo, username, index) {
  const el = document.createElement("li");

  el.setAttribute(
    "class",
    `w-1/3 sm:w-1/4 ${index > 2 ? "hidden sm:inline-block" : "inline-block"}`
  );

  el.innerHTML = `<div class="pb-full relative">
    <div class="absolute inset-0 flex">
      <a target="_blank" rel="noopener noreferrer" title="${repo.description}" href="${generateRepoURL(
        repo.repo,
        username
      )}" class="block relative w-full m-2 rounded gradient-${
    GRADIENTS[index]
  } shadow transform hover:-translate-y-1 hover:scale-105 transition duration-150 ease-in-out">
        <span class="absolute top-1-2 w-full text-center transform -translate-y-1/2 font-semibold text-white">${
          repo.repo
        }</span>
      </a>
    </div>
  </div>`;

  return el;
}

function sliceArray(array = [], count) {
  return array.slice(0, count);
}

function getUser(username) {
  fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((res) => {
      userProfileEl.classList.remove("hidden");
      userProfileEl.setAttribute("src", res.avatar_url);
    });
}

function generateRepoURL(repoName, username) {
  return `https://github.com/${username}/${repoName}`;
}

getUser(USERNAME);
getPinnedRepos(USERNAME);
