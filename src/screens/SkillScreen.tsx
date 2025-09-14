import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const skills = [
  { name: 'CSS', level: 5 },
  { name: 'HTML', level: 5 },
  { name: 'REACT', level: 4 },
];

function renderStars(level: number) {
  return '★'.repeat(level) + '☆'.repeat(5 - level);
}

export default function SkillScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/profile.png')}
        style={styles.avatar}
      />
      <Text style={styles.name}>Seu Nome</Text>
      <Text style={styles.title}>Minhas Habilidades</Text>
      {skills.map(skill => (
        <View key={skill.name} style={styles.skillRow}>
          <Text style={styles.skillName}>{skill.name}:</Text>
          <Text style={styles.stars}>{renderStars(skill.level)}</Text>
        </View>
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Fala comigo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor: '#eee',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  skillRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  skillName: {
    fontSize: 16,
    width: 60,
  },
  stars: {
    fontSize: 18,
    color: '#FFD700',
    marginLeft: 10,
  },
  button: {
    marginTop: 30,
    padding: 12,
    backgroundColor: '#b3e5fc',
    borderRadius: 8,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0277bd',
  },
});
