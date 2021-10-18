import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Books() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const getMoviesFromApiAsync = async () => {
			try {
				const response = await axios.get("http://localhost/book/getAllBooks");
				const json = await response.json();
				setBooks(json.movies);
			} catch (error) {
				console.log(error);
			}
		};
		getMoviesFromApiAsync().then((result) => {});
	}, []);

	return (
		<View style={styles.container}>
			{books ? (
				books.map((book) => <Text key={book.id}>{book.title}</Text>)
			) : (
				// <Text>hello</Text>
				<Text>
					<Text>helo world</Text>r
				</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
});
