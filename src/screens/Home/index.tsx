import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function HomeScreen() {


  const participants = ['Clara', 'Flora', 'Max'];

  function handleParticipantAdd() {

  }

  function handleParticipantRemove(){

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


      <FlatList 
        data={participants} 
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove()}
          />
        )}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}> Ninguem chegou no evento ainda? Adicione participantes a sua lista de presenca</Text>
        )}
      />
      

    </View>

  );
}

