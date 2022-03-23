const commands = [
  "git config -l",
  "git push",
  "git commit -m 'message'",
  "git pull",
  "git log",
  "git branch",
  "git checkout",
  "git init",
  "git status",
  "git add",
];

const titles = document.getElementById("list-example");
const content = document.getElementById("text-container");

for (let index = 0; index < commands.length; index++) {
  titles.innerHTML += `<h4 id="list-item-1">${commands[index]}</h4>
<p>...</p>`;
}
