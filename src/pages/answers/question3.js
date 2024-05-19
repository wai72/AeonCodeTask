import { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from "react-native"

const Question3 = () => {

    const [numbers, setNumbers] = useState('');
    const [target, setTarget] = useState('');

    const twoSum = (numbers, target) => {
        let left = 0;
        let right = numbers.length -1;
    
        while(left < right){
            const sum = numbers[left] + numbers[right];
            if(sum == target){
                return [left + 1, right +1]
            }else if(sum < target){
                left++;
            }else{
                right--;
            }
        }
        return [];
    };

    const calculate = () => {
        const numbersArray = [2,7,11,15];
        const targetNumber = parseInt(9);
        const res = twoSum(numbersArray, targetNumber);
        console.log(twoSum(numbersArray, targetNumber));
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Adding Two Numbers</Text>
            <TextInput 
                style={styles.inputStyle}
                placeholder="Please write the numbers with , like 2,4,6"
                keyboardType="numeric"
                value={numbers}
                onChangeText={setNumbers}/>
            <TextInput
             style={styles.inputStyle}
             placeholder="Target"
             keyboardType="numeric"
             value={target}
             onChangeText={setTarget}
            />
            <TouchableOpacity style={styles.buttonStyle} onPress={calculate}>
          <Text style>Add Two Number</Text>
        </TouchableOpacity>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingTop: 16,
        backgroundColor: 'white'
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

export default Question3;