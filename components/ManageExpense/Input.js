import { Text, TextInput, View } from "react-native";
import styles from "./styles";

const Input = ({ label, invalid, style, textInputConfig }) => {
  const inputStyle = [styles.input];

  if (textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyle.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput {...textInputConfig} style={inputStyle} />
    </View>
  );
};

export default Input;
