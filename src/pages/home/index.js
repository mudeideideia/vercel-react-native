import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Home({signOut}) {


	return (
		<View style={styles.container}>
			<Text>Logado</Text>
			<button onClick={signOut}>Sair</button>
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
});
