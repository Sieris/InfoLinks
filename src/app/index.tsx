import { View, Text, StyleSheet } from "react-native";
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
const styles = StyleSheet.create({ //uma variavel style que pega tudo o que ta sendo criado
    container: {
        flex: 1, //flex se referindo toda a tela 
        justifyContent: "center", //ajusta todos os elementos no centro da tela no meiog
        alignItems: "center", //alinhando os itens no centro 
        flexDirection: "row", //colocanto os itens dentro do flebox em linha 

    },
    title: { // esse ta estlizando o title. title foi o nome que colocamos naquela estilizacao a cima
        color: "red",
        fontSize: 22
    },

    title2: {
        color:"blue",
        fontSize: 22
    },

    title3: {
        color: "black",
        fontSize : 22
    },

    title4: {
        color:"green",
        fontSize: 22
    }


})