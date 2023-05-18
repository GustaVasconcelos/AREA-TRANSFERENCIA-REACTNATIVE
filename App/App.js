import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';

export default function App() {
  const [copiedText, setCopiedText] = React.useState('');
  const [texto,setTexto] = React.useState('')
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(texto);
    console.log(texto)
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={texto} onChangeText={e => setTexto(e)} placeholder='Digite um texto' placeholderTextColor={'#000'}/>
      <Pressable onPress={copyToClipboard} style={styles.botao}>
        <Text>Copiar</Text>
      </Pressable>
      <Button title="View copied text" onPress={fetchCopiedText} />
      <Text style={styles.copiedText}>{copiedText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width:'80%',
    padding:10,
    backgroundColor:'#c4c4cc'
  },
  botao:{
    backgroundColor:'#c4c4cc',
    padding:10
  }
});
