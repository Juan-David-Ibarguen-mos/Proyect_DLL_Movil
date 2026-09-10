import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface HeaderProps {
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

export default function Header({ setTime }: HeaderProps) {
  const tiempos = [
    { nombre: 'descanso ', segundos: 5 * 60 },
    { nombre: 'descanso corto', segundos: 10 * 60 },
    { nombre: 'descanso mediano', segundos: 25 * 60 },
    { nombre: 'descanso largo', segundos: 45 * 60 },
  ];

  return (
    <View style={styles.header}>

      <Text style={styles.title}>
        Pomodoro
      </Text>

      <View style={styles.options}>
        {tiempos.map((item) => (
          <TouchableOpacity
            key={item.segundos}
            style={styles.button}
            onPress={() => setTime(item.segundos)}
          >
            <Text style={styles.buttonText}>
              {item.nombre}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: '#333',
  },

  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});