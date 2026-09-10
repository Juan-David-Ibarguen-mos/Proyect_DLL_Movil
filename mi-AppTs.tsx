import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';

type Pantalla = 'registro' | 'login' | 'home';

export default function App() {
  const [pantalla, setPantalla] = useState<Pantalla>('registro');

  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const [correoRegistrado, setCorreoRegistrado] = useState('');
  const [contrasenaRegistrada, setContrasenaRegistrada] = useState('');

  // -------------------------
  // REGISTRO
  // -------------------------
  const registrarUsuario = () => {
    if (!correo || !contrasena) {
      Alert.alert('Atención', 'Completa todos los campos');
      return;
    }

    // Guardamos temporalmente los datos.
    // Más adelante esto se reemplazará por la base de datos.
    setCorreoRegistrado(correo);
    setContrasenaRegistrada(contrasena);

    setCorreo('');
    setContrasena('');

    Alert.alert('Registro exitoso', 'Ahora puedes iniciar sesión');

    setPantalla('login');
  };

  // -------------------------
  // LOGIN
  // -------------------------
  const iniciarSesion = () => {
    if (!correo || !contrasena) {
      Alert.alert('Atención', 'Completa todos los campos');
      return;
    }

    // Validación temporal sin base de datos
    if (
      correo === correoRegistrado &&
      contrasena === contrasenaRegistrada
    ) {
      setPantalla('home');
    } else {
      Alert.alert(
        'Error',
        'El correo o la contraseña no coinciden con el registro'
      );
    }
  };

  // -------------------------
  // PANTALLA REGISTRO
  // -------------------------
  const mostrarRegistro = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.titulo}>Registro</Text>

          <Text style={styles.label}>Correo</Text>

          <TextInput
            style={styles.input}
            placeholder="Ingrese su correo"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={correo}
            onChangeText={setCorreo}
          />

          <Text style={styles.label}>Contraseña</Text>

          <TextInput
            style={styles.input}
            placeholder="Ingrese su contraseña"
            placeholderTextColor="#999"
            secureTextEntry
            value={contrasena}
            onChangeText={setContrasena}
          />

          <TouchableOpacity
            style={styles.boton}
            onPress={registrarUsuario}
          >
            <Text style={styles.textoBoton}>Enviar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botonSecundario}
            onPress={() => setPantalla('login')}
          >
            <Text style={styles.textoBotonSecundario}>
              Ya tengo una cuenta
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  // -------------------------
  // PANTALLA LOGIN
  // -------------------------
  const mostrarLogin = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.titulo}>Login</Text>

          <Text style={styles.label}>Correo</Text>

          <TextInput
            style={styles.input}
            placeholder="Ingrese su correo"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={correo}
            onChangeText={setCorreo}
          />

          <Text style={styles.label}>Contraseña</Text>

          <TextInput
            style={styles.input}
            placeholder="Ingrese su contraseña"
            placeholderTextColor="#999"
            secureTextEntry
            value={contrasena}
            onChangeText={setContrasena}
          />

          <TouchableOpacity
            style={styles.boton}
            onPress={iniciarSesion}
          >
            <Text style={styles.textoBoton}>OK</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botonSecundario}
            onPress={() => {
              setCorreo('');
              setContrasena('');
              setPantalla('registro');
            }}
          >
            <Text style={styles.textoBotonSecundario}>
              Registro
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  // -------------------------
  // PANTALLA HOME
  // -------------------------
  const mostrarHome = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.home}>
          <Text style={styles.tituloHome}>Home</Text>

          <View style={styles.mensaje}>
            <Text style={styles.textoMensaje}>
              Bienvenido
            </Text>
          </View>

          <TouchableOpacity
            style={styles.botonCerrar}
            onPress={() => {
              setCorreo('');
              setContrasena('');
              setPantalla('login');
            }}
          >
            <Text style={styles.textoBoton}>
              Cerrar sesión
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  // -------------------------
  // CAMBIO DE PANTALLAS
  // -------------------------
  if (pantalla === 'registro') {
    return mostrarRegistro();
  }

  if (pantalla === 'login') {
    return mostrarLogin();
  }

  return mostrarHome();
}

// -------------------------
// ESTILOS
// -------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: '88%',
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,

    elevation: 5,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  label: {
    fontSize: 17,
    marginBottom: 8,
    fontWeight: '600',
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
  },

  boton: {
    height: 50,
    backgroundColor: '#333',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  textoBoton: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  botonSecundario: {
    marginTop: 20,
    alignItems: 'center',
  },

  textoBotonSecundario: {
    color: '#333',
    fontSize: 16,
    textDecorationLine: 'underline',
  },

  home: {
    width: '88%',
    flex: 1,
    paddingTop: 50,
  },

  tituloHome: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  mensaje: {
    width: '100%',
    minHeight: 180,
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,

    elevation: 5,
  },

  textoMensaje: {
    fontSize: 24,
    color: '#555',
  },

  botonCerrar: {
    height: 50,
    backgroundColor: '#555',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});