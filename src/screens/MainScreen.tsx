import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default function MainScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/profile.png')}
        style={styles.avatar}
      />
      <Text style={styles.name}>Seu Nome</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL('https://linkedin.com/')}
      >
        <Text style={styles.buttonText}>LINKEDIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL('https://github.com/')}
      >
        <Text style={styles.buttonText}>GITHUB</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL('mailto:seu@email.com')}
      >
        <Text style={styles.buttonText}>E-MAIL</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.skillButton}
        onPress={() => navigation.navigate('Skill')}
      >
        <Text style={styles.skillButtonText}>Ver Habilidades</Text>
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
    marginBottom: 20,
  },
  button: {
    width: 200,
    padding: 12,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  skillButton: {
    marginTop: 30,
    padding: 12,
    backgroundColor: '#b3e5fc',
    borderRadius: 8,
    width: 200,
    alignItems: 'center',
  },
  skillButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0277bd',
  },
});
