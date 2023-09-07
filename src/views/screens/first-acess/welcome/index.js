import { StyleSheet, Text, Image, Button, View, SafeAreaView, StatusBar } from "react-native";
import { firstAccess } from "../../../../../config/data/first-access";
import { globalStyles } from "../../../../../styles/globalStyle";

export function WelcomePage({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{firstAccess.welcomePage.title}</Text>
        <Image source={firstAccess.welcomePage.imagePath} />
        <View style={styles.content}>
          <Text style={styles.contentText}>{firstAccess.welcomePage.content.firstParagraph}</Text>
          <Text style={styles.contentText}>{firstAccess.welcomePage.content.secondParagraph}</Text>
        </View>
        <Button onPress={navigation.navigate('PersonalDataPage')} title={firstAccess.welcomePage.button} color={globalStyles.colors.lightAquaGreen} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colors.darkGray,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
  },
  title: {
    color: globalStyles.colors.softYellow,
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: '10%',
  },
  content: {
    paddingBottom: '8%'
  },
  contentText: {
    color: globalStyles.colors.white,
    fontSize: 16,
    textAlign: 'justify',
    paddingEnd: '8%',
    paddingLeft: '8%',
    paddingBottom: '2%',
  }
});

WelcomePage.navigationOptions = {
  headerShown: false,
};