import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface IParticipant {
    name: string,
    onRemove: () => void;
}

export function Participant (props: IParticipant)  {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                {props.name}
            </Text>
            <TouchableOpacity style={styles.button} onPress={props.onRemove}>
                <Text style={styles.buttonText}> 
                    -
                </Text>
            </TouchableOpacity>
        </View>
    );
}