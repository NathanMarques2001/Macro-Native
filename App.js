import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { loading } from './config/data/loading';
import { globalStyles } from './styles/globalStyle';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={loading.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colors.darkGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
