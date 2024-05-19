import { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native"

const Question3 = () => {

    const [numbers, setNumbers] = useState('');
    const [result, setResult] = useState('');
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
        const targetNumber = parseInt(21);
        const res = twoSum(numbersArray, targetNumber);
        setResult(res);
        console.log(res)
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
            <Button style={styles.buttonStyle} title="Add Two Number" onPress={calculate} />
            <Text style={styles.result}>
                Total: {result}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 16
    },
    inputStyle: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 2,
        marginBottom: 10,
        paddingHorizontal: 16
    },
    buttonStyle:{
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 2,
        marginBottom: 10,
        paddingHorizontal: 16
        
    },
    result: {
        marginTop: 20,
        fontSize: 18
    }
});

export default Question3;