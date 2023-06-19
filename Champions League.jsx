import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from "react";
import * as ChampionsLeague from './Champions League';



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
            highlightPlayer: "Vinicius Junior",
          },
          {
            id: 2,
            homeTeam: "Barcelona",
            awayTeam: "Paris Saint-Germain",
            homeScore: 2,
            awayScore: 5,
            highlightPlayer: "Neymar Junior",
          },
          {
            id: 3,
            homeTeam: "Manchester United",
            awayTeam: "Manchester City",
            homeScore: 2,
            awayScore: 3,
            highlightPlayer: "Haaland",
          }
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
  
  
  
const ChampionsLeagueApp = () => {
    const [games, setGames] = useState([]);
  
    useEffect(() => {
      fetch('https://api.api-futebol.com.br/v1/campeonatos/20/fases/211') 
        .then(response => response.json())
        .then(data => setGames(data))
        .catch(error => console.log(error));
    }, []);
  
    const renderItem = ({ item }) => (
      <View style={ChampionsLeague.styles.gameContainer}>
        <View style={ChampionsLeague.styles.teamContainer}>
          <Text style={ChampionsLeague.styles.teamName}>{item.homeTeam}</Text>
          <Text style={ChampionsLeague.styles.score}>{item.homeScore}</Text>
        </View>
        <View style={ChampionsLeague.styles.teamContainer}>
          <Text style={ChampionsLeague.styles.teamName}>{item.awayTeam}</Text>
          <Text style={ChampionsLeague.styles.score}>{item.awayScore}</Text>
        </View>
        <Text style={ChampionsLeague.styles.highlightPlayer}>
          Jogador destaque: {item.highlightPlayer}
        </Text>
      </View>
    );
  
    return (
      <View style={ChampionsLeague.styles.container}>
        <Text style={ChampionsLeague.styles.title}>Placar da Champions League</Text>
        <FlatList
          data={games}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={ChampionsLeague.styles.listContainer}
        />
      </View>
    );
  };
  
  export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingHorizontal: 20,
      paddingTop: 40,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    listContainer: {
      paddingBottom: 40,
    },
    gameContainer: {
      marginBottom: 20,
      padding: 10,
      borderRadius: 8,
      backgroundColor: '#f2f2f2',
    },
    teamContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    teamName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    score: {
      fontSize: 18,
    },
    highlightPlayer: {
      fontSize: 16,
      fontStyle: 'italic',
    },
  });
  
  export default ChampionsLeagueApp;
  