import React from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar } from 'react-native';

export default function SignIn({ signIn }) {

	const userEmail = "user@email.com"
	const userPassword = "teste123"

	return (
		<View style={styles.container}>
			<Text>Sign In</Text>
			<TextInput
				style={styles.input}
				onChangeText={text => onChangeText(text)}
				value={userEmail}
			/>
			<TextInput
				style={styles.input}
				onChangeText={text => onChangeText(text)}
				value={userPassword}
			/>
			<button onClick={signIn}>Entrar</button>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		textAlign: 'center',
		marginBottom: 10
	},
});
