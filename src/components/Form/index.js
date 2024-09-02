import React,{useState} from 'react';
import {Text, TextInput, View , TouchableOpacity, Vibration} from 'react-native';
import ResultImc from './ResultImc';
import styles from './style';

export default function Form(){

    const [height, setHeight]= useState(null)
    const [weight, setWeight]= useState(null)
    const [mensageImc, setMensageImc]= useState("Preencha o peso e altura")
    const [imc, setImc]= useState(null)
    const [textButton, setTextButton]= useState("Calcular")
    const [erroMessage, setErroMensage] = useState(null)

    function verificationImc(){
        if (imc == null){
            Vibration.vibrate();
            setErroMensage("campo obrigatório*")
        }
    }

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMensageImc("Seu IMC é igual:")
            setTextButton("Calcular novamente")
            setErroMensage(null)
            return
        }
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMensageImc("Preencha o peso e altura")
        
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{erroMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder='Ex: 1.75'
                    keyboardType='numeric'
                />
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{erroMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder='Ex: 80'
                    keyboardType='numeric'
                />
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validationImc()}
                >
                <Text style={styles.textButtonCalculator}>{textButton} </Text>
                </TouchableOpacity>
            </View>
            <ResultImc mensageResultImc = {mensageImc} resultImc = {imc}/>
        </View>
    );
}