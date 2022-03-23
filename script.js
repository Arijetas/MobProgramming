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
console.log(titles);
console.log(content);

for (let index = 0; index < commands.length; index++) {
  titles.innerHTML += ` <a class="list-group-item list-group-item-action" href="#list-item-${index+1}">${commands[index]}</a>`
  content.innerHTML += `<h4 id="list-item-${index+1}">${commands[index]}</h4>
<p>...</p>`;
  console.log(titles.innerHTML);
  console.log(content.innerHTML);
}
