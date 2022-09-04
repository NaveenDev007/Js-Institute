const IPL = [
    {
      Team1: {
        team: "RCB",
        score: 150,
        isWinner: true,
      },
      Team2: {
        team: "CSK",
        score: 148,
        isWinner: false,
      },
    },
    {
      Team1: {
        team: "CSK",
        score: 156,
        isWinner: false,
      },
      Team2: {
        team: "RCB",
        score: 168,
        isWinner: true,
      },
    },
    {
      Team1: {
        team: "RCB",
        score: 170,
        isWinner: false,
      },
      Team2: {
        team: "CSK",
        score: 190,
        isWinner: true,
      },
    },
    {
      Team1: {
        team: "CSK",
        score: 150,
        isWinner: false,
      },
      Team2: {
        team: "RCB",
        score: 198,
        isWinner: true,
      },
    },
    {
      Team1: {
        team: "RCB",
        score: 170,
        isWinner: true,
      },
      Team2: {
        team: "CSK",
        score: 148,
        isWinner: false,
      },
    },
    {
      Team1: {
        team: "CSK",
        score: 150,
        isWinner: true,
      },
      Team2: {
        team: "RCB",
        score: 138,
        isWinner: false,
      },
    },
  ];
  
  // let's load
  
  const ul = document.createElement("ul");
  for (let game of IPL) {
    const { Team2, Team1 } = game;
  
    const li = document.createElement("li");
    const { team: T2, score: T2Score } = Team2;
    const { team: T1, score: T1Score } = Team1;
  
    const teamNames = `${T1} vs ${T2}`;
  
    if (T1Score > T2Score) {
      scoreBoard = `<b>${T1Score}</b> - ${T2Score}`;
    } else {
      scoreBoard = `${T1Score} - <b>${T2Score}</b>`;
    }
  
    const myTeam = T2 === "CSK" ? Team2 : Team1;
    li.classList.add(myTeam.isWinner ? "win" : "lose");
  
    li.innerHTML = `${teamNames} ${scoreBoard}`;
    ul.appendChild(li);
  }
  document.body.prepend(ul);