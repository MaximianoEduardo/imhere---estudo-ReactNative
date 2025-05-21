import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export default function HomeScreen() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {

    if(participants.includes(participantName)){
     return Alert.alert('Participante Existe', 'Ja existe um participante na lista')
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('');
  }

  function handleParticipantRemove(name: string){


    Alert.alert('Remover', `Remover o participante ${name}`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Nao',
        style: "cancel"
        
      }
    ])
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
          onChangeText={text => setParticipantName(text)} 
          placeholder="Insira o nome do participante"
          placeholderTextColor={'#6B6B6B'}
          value={participantName}
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
            onRemove={() => handleParticipantRemove(item)}
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

