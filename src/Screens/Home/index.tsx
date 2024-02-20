import { 
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function Home() {
  // Variável para controle da condição
  const shouldShowEyeIcon = true; // ou false, dependendo da sua lógica

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icons}>
          <TouchableOpacity style={styles.person} onPress={() => console.log("Icone de pessoa pressionado")}>
            <Ionicons name="person-outline" size={30} color='#fff' />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => console.log("Ícone de olho pressionado")}>
            {shouldShowEyeIcon ? (
              <Ionicons name="eye-outline" size={30} color='#fff' />
            ) : (
              <Ionicons name="eye-off-outline" size={30} color='#fff' />
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("Icone de help pressionado")}>
            <Ionicons name="help-circle-outline" size={30} color='#fff' />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("Icone de email pressionado")}>
            <Ionicons name="mail-unread-outline" size={30} color='#fff' />
          </TouchableOpacity>
        </View>

        <View style={styles.helloHeader}>
            <Text style={styles.textHeader}>
              Olá, Igor Moura
            </Text>
          </View>
      </View>
      <View style={styles.account}>
          <Text style={styles.textAccount}>
            Conta
          </Text>
        <Text style={styles.accountBalance}>
          R$100,00
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  header:{
    backgroundColor: '#8a19d6',
    width: '100%',
    paddingHorizontal: 30,
    height: '25%',
    paddingTop: 50,
  },
  icons:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 20,
    justifyContent: 'space-around'
  },
  person:{
    width:50, 
    height: 50, 
    marginRight: 140,
    backgroundColor: '#d8b4ff',
    borderRadius: 100,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  helloHeader:{
    marginTop: 45
  },
  textHeader:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  account: {
    marginTop: 24,
    alignItems: 'flex-start',
    backgroundColor: 'blue',
    width: '100%'
  },
  textAccount: {
    fontSize: 32,
  },
  accountBalance: {
    fontSize: 32,
  },
  
});
