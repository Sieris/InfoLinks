import { View, Text, } from "react-native";
import {styles} from "./styles" //os dois pontos significa que precisa sairr de uuma pasta, ja quatro pntos, duas pastas
// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota
export default function Index (){ //exportanto por padrao a funcao index
    return ( //ele entrega tudo que esta aqui dentro(uso externo)
       //view é comparada a div
       <View style={styles.container}> 
            <Text  style={styles.title}>eU SOU o meelhor homem arannnnhaa</Text> 
            <Text style={styles.title2}>cru cru cru</Text>
            <Text style={styles.title3}> cri cri cri</Text>
            <Text style={styles.title4}>la la la la la la </Text>
          
        </View>
    );
}
