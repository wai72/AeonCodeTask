import { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from "react-native"

const Calculator = () => {
    const [firstNum, setFirstNum] = useState('');
    const [secondNum, setSecondNum] = useState('');
    const [result, setResult] = useState('');

    const calculate = () => {
      const sum = parseFloat(firstNum) + parseFloat(secondNum);
      setResult(sum);
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Adding Two Numbers</Text>
            <TextInput 
                style={styles.inputStyle}
                placeholder="First Number"
                keyboardType="numeric"
                value={firstNum}
                onChangeText={setFirstNum}/>
            <TextInput
             style={styles.inputStyle}
             placeholder="Second Number"
             keyboardType="numeric"
             value={secondNum}
             onChangeText={setSecondNum}
            />
            <TouchableOpacity style={styles.buttonStyle} onPress={calculate}>
          <Text style>Add Two Number</Text>
        </TouchableOpacity>
        <Text style={styles.result}>
            Total: {result !== null ? result : ''}
          </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingTop: 16,
        backgroundColor: 'white'
       // alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 16
    },
    inputStyle: {
        height: 40,
        width: '60%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 2,
        marginBottom: 10,
        paddingHorizontal: 16
    },
    buttonStyle:{
        width: '60%',
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 10,
        padding: 8,
        backgroundColor: '#D3D3D3',
        alignItems: 'center'
        
    },
    result: {
        marginTop: 20,
        fontSize: 18
    }
});

export default Calculator;