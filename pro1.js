import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ChampionsLeagueApp = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/games') // Substitua pelo endereço da sua API
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.log(error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.gameContainer}>
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>{item.homeTeam}</Text>
        <Text style={styles.score}>{item.homeScore}</Text>
      </View>
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>{item.awayTeam}</Text>
        <Text style={styles.score}>{item.awayScore}</Text>
      </View>
      <Text style={styles.highlightPlayer}>
        Jogador destaque: {item.highlightPlayer}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Placar da Champions League</Text>
      <FlatList
        data={games}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
