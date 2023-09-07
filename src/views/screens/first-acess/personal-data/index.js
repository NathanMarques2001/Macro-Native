import { StyleSheet, Text } from "react-native";
import { firstAccess } from "../../../../../config/data/first-access";
import { globalStyles } from "../../../../../styles/globalStyle";
import { PersonalDataForm } from "./form";

export function PersonalDataPage() {
  return (
    <>
      <Text style={styles.title}>{firstAccess.personalDataPage.title}</Text>
      <Text style={styles.content}>{firstAccess.personalDataPage.content.firstParagraph}</Text>
      <PersonalDataForm />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: globalStyles.colors.softYellow,
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: '10%'
  },
  content: {
    color: globalStyles.colors.white,
    fontSize: 16,
    width: '80%',
    textAlign: 'justify',
    paddingTop: '8%',
    paddingBottom: '8%',
  }
});