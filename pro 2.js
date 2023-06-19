import React from "react";

class ChampionsLeagueApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [
        {
          id: 1,
          homeTeam: "Real Madrid",
          awayTeam: "Bayern de Munique",
          homeScore: 2,
          awayScore: 1,
          highlightPlayer: "Cristiano Ronaldo",
        },
        {
          id: 2,
          homeTeam: "Barcelona",
          awayTeam: "Paris Saint-Germain",
          homeScore: 3,
          awayScore: 2,
          highlightPlayer: "Lionel Messi",
        },
        // Adicione mais jogos aqui...
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Placar da Champions League</h1>
        {this.state.games.map((game) => (
          <div key={game.id}>
            <h2>
              {game.homeTeam} {game.homeScore} - {game.awayScore}{" "}
              {game.awayTeam}
            </h2>
            <p>Jogador destaque: {game.highlightPlayer}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ChampionsLeagueApp;
