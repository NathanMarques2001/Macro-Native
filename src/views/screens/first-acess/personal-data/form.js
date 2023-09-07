import { Button, StyleSheet, Text, TextInput, View, Dimensions } from "react-native";
import { firstAccess } from "../../../../../config/data/first-access";
import { globalStyles } from "../../../../../styles/globalStyle";

export function PersonalDataForm() {
  return (
    <>
      <View style={styles.formContainer}>
        <View style={styles.view}>
          <Text style={styles.label}>{firstAccess.personalDataPage.content.inputName.label}</Text>
          <TextInput style={styles.input} placeholder={firstAccess.personalDataPage.content.inputName.placeholder} placeholderTextColor={globalStyles.colors.placeholder} />
        </View>
        <View style={styles.view}>
          <Text style={styles.label}>{firstAccess.personalDataPage.content.inputBirthday.label}</Text>
          <TextInput style={styles.input} placeholder={firstAccess.personalDataPage.content.inputBirthday.placeholder} placeholderTextColor={globalStyles.colors.placeholder} />
        </View>
        <View style={styles.view}>
          <Text style={styles.label}>{firstAccess.personalDataPage.content.inputWeight.label}</Text>
          <TextInput style={styles.input} placeholder={firstAccess.personalDataPage.content.inputWeight.placeholder} placeholderTextColor={globalStyles.colors.placeholder} />
        </View>
        <View style={styles.view}>
          <Text style={styles.label}>{firstAccess.personalDataPage.content.inputHeight.label}</Text>
          <TextInput style={styles.input} placeholder={firstAccess.personalDataPage.content.inputHeight.placeholder} placeholderTextColor={globalStyles.colors.placeholder} />
        </View>
        <View style={styles.view}>
          <Text style={styles.label}>{firstAccess.personalDataPage.content.inputGender.label}</Text>
          <TextInput style={styles.input} placeholder={firstAccess.personalDataPage.content.inputGender.placeholder} placeholderTextColor={globalStyles.colors.placeholder} />
        </View>
      </View>
      <Button title={firstAccess.personalDataPage.button} color={globalStyles.colors.lightAquaGreen} />
    </>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    paddingBottom: '8%',
  },
  input: {
    borderWidth: 2,
    borderColor: globalStyles.colors.white,
    padding: '3%',
    paddingLeft: 12,
    color: globalStyles.colors.white,
    borderRadius: 8,
  },
  label: {
    color: globalStyles.colors.white,
    paddingBottom: '1.5%',
  },
  view: {
    paddingBottom: '3.5%',
    width: Dimensions.get('window').width * 0.8,
  }
});