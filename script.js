var database = [
  {
    username: "steven",
    password: "Ilovekatie",
  },
  {
    username: "Katie",
    password: "Ilovesteven",
  },
  {
    username: "JonSnow",
    password: "LordCommander",
  },
];

var newsfeed = [
  {
    username: "steviebae",
    timeline: "I Love Katiebae!",
  },
  {
    username: "katiebae",
    timeline: "I Love Steviebae!",
  },
  {
    username: "Jon Snow",
    timeline: "I AM THE LORD COMMANDER LOL",
  },
  {
    username: "Elf",
    timeline: "IM IN A STORE AND IM SINGIIINGGGG!!",
  },
];

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username or password");
  }
}


var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);
