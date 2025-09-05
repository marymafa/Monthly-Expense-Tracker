import { Button, Label } from "@react-navigation/elements";
import { StyleSheet } from "react-native";
const style = StyleSheet.create({

Button: {
 alignItems: "center",
	},
    container: {
		backgroundColor: "#fff",
		height: "100%",
		marginTop: 50,
	},
    addButton: {
		padding: 10,
		margin: 10,
	},

TextInput: {
        borderWidth: 1,
        borderColor: "#ccc",
       padding: 10,
		margin: 10,
        borderRadius: 5,
        height: '100%'
    },
    heading: {
		color: "green",
		fontSize: 30,
		textAlign: "center",
		fontWeight: "bold",
	},
    heading2: {
		color: "black",
		fontSize: 25,
		textAlign: "center",
		fontWeight: "bold",
	},

heading3: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
label: {
		color: "black",
		fontSize: 16,
		textAlign: "left",
		fontWeight: "bold",
		marginLeft: 10,
	},

 header: {
        fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: '#f5f5f5', 
 },
 row: {
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
 itemContainer: {
       flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
 },
 ExpenseName: {
        flex: 1,
        fontWeight: 'bold',
 },
 Amount: {
        flex: 1,
        textAlign: "right",
         color: '#333',
 },
 expenseTile: {
		// column with 3 cells
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "lightgrey",
		width: "95%",
		padding: 10,
		margin: 10,
	}, category: {
        flex: 1,
        textAlign: "right",
         color: '#666',
 },
 expenseTileText: {
		fontSize: 20,
		width: "22%",
		textAlign: "center",
	},

})



export default style;