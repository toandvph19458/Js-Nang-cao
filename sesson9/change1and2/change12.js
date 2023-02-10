const match = {
  team1: "Chelsea",
  team2: "BayernMunich",
  player: [
    [
      "Mendy",
      "Silva",
      "Chaloba",
      "Chillew",
      "Rame",
      "kante",
      "Mount",
      "Jogdrinho",
      "Havertz",
      "Pulisic",
      "Streling",
      "Aubameyang",
    ],
    [
      "Neuer",
      "De ligt",
      "Hernandez",
      "Davies",
      "Pavard",
      "Goretzka",
      "Kimmich",
      "Musiala",
      "Mane",
      "Sane",
      "Gnabry",
    ],
  ],
  score: "3:0",
  scored: ["Aubameyang", "Mount", "Havertz"],
  date: "23/3/2023",
  odds: {
    team1: 6,
    x: 3.25,
    team2: 1.5,
  },
};
const [player1, player2] = match.player;
const [gk, ...otherplayer] = player1;
console.log(player1);
console.log(gk, otherplayer);
const Allplayer = [...player1, ...player2];
const {
  odds: { team1, x: draw, team2 },
} = match;

console.log(team1, team2, draw);
const Goals = ([...player]) => {
  console.log(`${player.length} goal`);
  console.log(player);
};

Goals(match.scored);
Goals(["Aubameyang", "Mount"]);
for (const [Goal, player] of match.scored.entries()) {
  console.log(`Goal${Goal + 1}:${player}`);
}
const odds = Object.values(match.odds);
// console.log(odds)
let trungbinh = 0;
for (const odd of odds) {
  trungbinh += odd;
  trungbinh /= odds.length;
}
console.log("trungbinh", trungbinh);
for (const [team, odd] of Object.entries(match.odds)) {
  console.log(team, odd);
  const teamStr = team === "x" ? "draw" : `Win ${match[team]}`;
  console.log(teamStr);
}
