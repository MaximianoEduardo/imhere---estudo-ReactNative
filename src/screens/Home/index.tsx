import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function HomeScreen() {


  function handleParticipantAdd() {

  }

  return (

    <View style={styles.container}>

      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Segunda, 19 de Maio de 2025
      </Text>

      <View style={styles.form}>
        <TextInput 
          placeholder="Insira o nome do participante"
          placeholderTextColor={'#6B6B6B'}
          style={styles.input} />


        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      

    </View>

  );
}

