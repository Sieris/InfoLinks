import { View, Text, StyleSheet, } from "react-native";
import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({ //uma variavel style que pega tudo o que ta sendo criado
    container: {
        flex: 1, //flex se referindo toda a tela 
        justifyContent: "center", //ajusta todos os elementos no centro acima
        
       alignItems: "center", //alinhando os itens no centro bem no meio da tela
        //alignItems: "flex-start", //alinhando os itens no no lado esquerdo
        //flexDirection: "row", //colocanto os itens dentro do flebox em linha 
        flexDirection: "column", //colocando os itens verticalmente em coluna 
        //codigo pra identificar as extremidades do Container (pq ta colocando a borda no flex- controlador do tamanho da tela)
        borderColor: "red",
        borderWidth: 3

    },
    title: { // esse ta estlizando o title. title foi o nome que colocamos naquela estilizacao a cima
        color: colors.green [900],
        fontSize: 22,
      

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