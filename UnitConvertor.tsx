import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from "react-native";
import { style } from "./Components/styles";




function UnitConvertor() {
    //States 

    const [hide, setStatus] = useState(false)

    //For user input.
    let [value, setValue] = useState(0)
    //For result value.
    let [value1, setValue1] = useState(0)
    //To reduce the opacity of button(To set Button to disable).
    let [isDisable, setDisablity] = useState(true)
    //To reduce the opacity of button(To set Button to disable).
    let [isDisable1, setDisablity1] = useState(false)
    //To Open the all option for categoreis.
    let [isDisplayExpand, setDisplayExpand] = useState(false)
    //Used in looping the category array.
    let [iteratorForCategories, setIteratorForCategories] = useState(0)
    //Used in looping the unit array for first choice.
    let [iteratorForUnitOne, setIteratorForUnitOne] = useState(0)
    //Used in looping the unit array for second choice.
    let [iteratorForUnitTwo, setIteratorForUnitTwo] = useState(1)
    //Displays if user choices same units for conversion.
    let [idDisplayError, setDisplayError] = useState(false)

    type Conversion = {
        UnitFrom: string;
        valueOfUnitFrom: number;
        UnitTo: string;
        valueOfUnitTo: number;
    };

    let [arrHistory, setHistory] = useState<Conversion[]>([])

    //To Set Display to show History
    let [isDisplayHistory, setDisplayHistory] = useState(false)

    // Arrays
    //Which handels categories 
    let arrItem = ["Wieght", "Temperature", "Distance"]
    //Which handels units 
    let arrMain = [["Kg", "Gram", "Pounds"], ["°C", "°F"], ["Cm", "Mtr", "Km"]]

    const calculate = (valueInput: number) => {
        if (arrMain[iteratorForCategories][iteratorForUnitOne] === "Kg" && arrMain[iteratorForCategories][iteratorForUnitTwo] === "Gram") setValue1(valueInput * 1000)
        //Code for Kg to Pounds.
        if (arrMain[iteratorForCategories][iteratorForUnitOne] == "Kg" && arrMain[iteratorForCategories][iteratorForUnitTwo] == "Pounds") setValue1(valueInput * 2.20462)
        //Code for Gram to Kg.
        if (arrMain[iteratorForCategories][iteratorForUnitOne] == "Gram" && arrMain[iteratorForCategories][iteratorForUnitTwo] == "Kg") setValue1(valueInput / 1000)
        //Code for Gram to Pounds.
        if (arrMain[iteratorForCategories][iteratorForUnitOne] == "Gram" && arrMain[iteratorForCategories][iteratorForUnitTwo] == "Pounds") setValue1(valueInput * 453.59237)
        //Code for Pounds to Kg.
        if (arrMain[iteratorForCategories][iteratorForUnitOne] == "Pounds" && arrMain[iteratorForCategories][iteratorForUnitTwo] == "Kg") setValue1(valueInput * 0.453592)
        //Code for Pounds to Gram.
        if (arrMain[iteratorForCategories][iteratorForUnitOne] == "Pounds" && arrMain[iteratorForCategories][iteratorForUnitTwo] == "Gram") setValue1(valueInput * 453.592)
        //Code for °C to °F.
        if (arrMain[iteratorForCategories][iteratorForUnitOne] == "°C" && arrMain[iteratorForCategories][iteratorForUnitTwo] == "°F") setValue1((valueInput * 9 / 25) + 32)
        //Code for °F to °C.
        if (arrMain[iteratorForCategories][iteratorForUnitOne] == "°F" && arrMain[iteratorForCategories][iteratorForUnitTwo] == "°C") setValue1((valueInput - 32) * 5 / 9)
        //Code for Cm to Mtr.
        if (arrMain[iteratorForCategories][iteratorForUnitOne] == "Cm" && arrMain[iteratorForCategories][iteratorForUnitTwo] == "Mtr") setValue1(valueInput / 100)
        //Code for Cm to Km.
        if (arrMain[iteratorForCategories][iteratorForUnitOne] == "Cm" && arrMain[iteratorForCategories][iteratorForUnitTwo] == "Km") setValue1(valueInput / 10000)
        //Code for Mtr to Cm.
        if (arrMain[iteratorForCategories][iteratorForUnitOne] == "Mtr" && arrMain[iteratorForCategories][iteratorForUnitTwo] == "Cm") setValue1(valueInput * 100)
        //Code for Mtr to Km.
        if (arrMain[iteratorForCategories][iteratorForUnitOne] == "Mtr" && arrMain[iteratorForCategories][iteratorForUnitTwo] == "Km") setValue1(valueInput / 1000)
        //Code for Km to Cm.
        if (arrMain[iteratorForCategories][iteratorForUnitOne] == "Km" && arrMain[iteratorForCategories][iteratorForUnitTwo] == "Cm") setValue1(valueInput * 10000)
        //Code for Km to Mtr.
        if (arrMain[iteratorForCategories][iteratorForUnitOne] == "Km" && arrMain[iteratorForCategories][iteratorForUnitTwo] == "Mtr") setValue1(valueInput * 1000)
    }
    return (

        <SafeAreaView style={[style.container, style.setFlex1]}>

            {/* View for Greeting. */}
            <View style={{ backgroundColor: 'grey', width: '100%', justifyContent: 'center', borderBottomWidth: 1, flex: .3 }}>

                {/* Greeting Message.*/}
                <Text style={[style.text, style.extraSmallSize]}>Welcome to unit convertor app</Text>

            </View>

            {/* View for input (Categories) */}
            <View style={[style.container, style.setFlex1]}>

                {/* Message to ask for inputting categories. */}
                <Text style={[style.text, style.smallSize, style.setFlex2, { marginTop: 20, width: '100%' }]}>What do you want to convert</Text>


                {/* Taking use4r choice to choose category. */}
                <View style={[style.container, style.setFlex5, { flexDirection: "row" }]}>

                    {/* Buttom to take input for conversion category. */}
                    <TouchableOpacity
                        style={style.setFlex1}
                        disabled={isDisable}
                        onPress={() => {
                            if (1 <= iteratorForCategories) setIteratorForCategories(--iteratorForCategories)
                            if (iteratorForCategories == 0) setDisablity(true)
                            setDisablity1(false)
                            setIteratorForUnitOne(0), setIteratorForUnitTwo(1)
                            setDisplayError(false)

                        }}>
                        <View >
                            <Text style={[style.text, style.extraLargeSize, isDisable ? { opacity: .5 } : { opacity: 1 }]} >{'< '}</Text>
                        </View>

                    </TouchableOpacity>

                    {/* Buttom to take show all conversion category. */}
                    <TouchableOpacity
                        style={style.setFlex2}
                        onLongPress={() => {
                            setDisplayExpand(true)
                        }}>

                        {isDisplayExpand ?

                            arrItem.map((item, index) =>
                                <View style={[style.container, style.setFlex2]}>
                                    <Pressable onPress={() => { setIteratorForCategories(index); setDisplayExpand(false) }}>
                                        <Text style={[style.largeSize, style.text]}>{item}</Text>

                                    </Pressable>
                                </View>)
                            :
                            <Text style={[style.text, style.largeSize]}>{arrItem[iteratorForCategories]}</Text>
                        }
                    </TouchableOpacity>

                    {/* Buttom to take input for conversion category. */}
                    <TouchableOpacity
                        style={style.setFlex1}
                        disabled={isDisable1}
                        onPress={() => {
                            if (iteratorForCategories < arrItem.length - 1) setIteratorForCategories(++iteratorForCategories)
                            if (iteratorForCategories == arrItem.length - 1) setDisablity1(true)
                            setIteratorForUnitOne(0), setIteratorForUnitTwo(1)
                            setDisablity(false)
                            setDisplayError(false)
                        }}>
                        <View >
                            <Text style={[style.text, style.extraLargeSize, isDisable1 ? { opacity: .5 } : { opacity: 1 }]} >{' >'}</Text>
                        </View>

                    </TouchableOpacity>

                </View>


            </View>

            {/* Code for taking user inputs as a value and units and showing the result. */}
            <View style={[style.container, style.setFlex2]}>

                {/* View for units switching.*/}
                <View style={[style.container, style.setFlex1]}>

                    <View style={[style.shadow, { flexDirection: 'row', flex: .6, justifyContent: 'center' }]}>

                        {/* View for units choice 1.*/}
                        <View style={[style.setFlex1, style.container]}>

                            {/* Button to change units increment.*/}
                            <Pressable
                                onPress={() => {
                                    if (iteratorForUnitOne < arrMain[iteratorForCategories].length - 1) {
                                        setDisplayError(false)
                                        setIteratorForUnitOne(++iteratorForUnitOne)
                                    }
                                    if (iteratorForUnitOne === iteratorForUnitTwo) {
                                        setDisplayError(true)
                                    }
                                    setValue(0);
                                    setValue1(0)
                                }
                                }>
                                <View style={{ padding: 5 }}>
                                    <Text style={[style.text, style.mediumSize]}>^</Text>
                                </View>
                            </Pressable>
                            <Text style={[style.text, style.mediumSize]}>{arrMain[iteratorForCategories][iteratorForUnitOne]}</Text>

                            {/* Button to change units drecrement.*/}
                            <Pressable
                                onPress={() => {
                                    if (iteratorForUnitOne >= 1) {
                                        setDisplayError(false)
                                        setIteratorForUnitOne(--iteratorForUnitOne)
                                    }
                                    if (iteratorForUnitOne == iteratorForUnitTwo) {
                                        setDisplayError(true)
                                    }
                                    setValue(0);
                                    setValue1(0)
                                }}>
                                <View style={{ padding: 5 }}>
                                    <Text style={[style.text, style.mediumSize, { transform: [{ rotate: '180deg' }] }]}>^</Text>
                                </View>
                            </Pressable>

                        </View>

                        {/* View for unit swapping.*/}
                        <View style={[style.setFlex1, { justifyContent: 'center' }]}>

                            {/* Button to swap between units.*/}
                            <Pressable onPress={() => { setIteratorForUnitOne(iteratorForUnitTwo), setIteratorForUnitTwo(iteratorForUnitOne) }
                            } style={[style.setFlex1, { justifyContent: 'center' }]}>
                                <Text style={[style.text, style.mediumSize]}>→</Text>
                                <Text style={[style.text, style.mediumSize, { transform: [{ rotate: '180deg' }] }]}>→</Text>
                                {/* <Image style ={{alignSelf:'center',width:40,height:40}} source={require('./assests/images/replace.png')}/> */}
                            </Pressable>

                        </View>

                        {/* View for units choice 2. */}
                        <View style={[style.setFlex1, { justifyContent: 'center' }]}>

                            {/* Button to change units increment.*/}
                            <Pressable
                                onPress={() => {
                                    if (arrMain[iteratorForCategories].length > 1) {
                                        if (iteratorForUnitTwo < arrMain[iteratorForCategories].length - 1) {
                                            setIteratorForUnitTwo(++iteratorForUnitTwo)
                                        }
                                        if (iteratorForUnitOne === iteratorForUnitTwo) {
                                            setDisplayError(true)
                                        } else setDisplayError(false)
                                        setValue(0);
                                        setValue1(0)
                                    }
                                    else setIteratorForUnitOne(0), setIteratorForUnitTwo(1)
                                }}>
                                <View style={{ padding: 5 }}>
                                    <Text style={[style.text, style.mediumSize]}>^</Text>
                                </View>
                            </Pressable>
                            <Text style={[style.text, style.mediumSize]}>{arrMain[iteratorForCategories][iteratorForUnitTwo]}</Text>

                            {/* Button to change units decrement.*/}
                            <TouchableOpacity
                                onPress={() => {
                                    if (iteratorForUnitTwo >= 1) {
                                        setDisplayError(false)
                                        setIteratorForUnitTwo(--iteratorForUnitTwo)
                                    }
                                    if (iteratorForUnitTwo == iteratorForUnitOne) {
                                        setDisplayError(true)
                                    }
                                    setValue(0);
                                    setValue1(0)
                                }}>
                                <View style={{ padding: 5 }}>
                                    <Text style={[style.text, style.mediumSize, { transform: [{ rotate: '180deg' }] }]}>^</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>


                
                    <View style={{ flexDirection: 'row', flex: .4, marginTop: 5 }}>

                        {/* View for result and taking value*/}
                        <View style={[style.container, style.setFlex3]}>
                            <View style={[style.setFlex1, style.container]}>
                                {

                                    //Code to detect wrong options choosen by user.
                                    idDisplayError ?

                                        //Text view if user choses wrong options.
                                        <Text style={[style.text, style.extraSmallSize, { color: 'red' }]}>Both Units are same{'\n'} Unable to Convert</Text> :

                                        <View style={[style.setFlex1, { width: '100%' }]}>



                                            {/* Text view to show output.*/}
                                            <TextInput
                                                keyboardType="numeric"
                                                onChangeText={(valueInput: any) => {
                                                    setValue(valueInput);
                                                    calculate(valueInput)
                                                }}
                                                style={[style.extraSmallSize, style.container, style.text, { borderWidth: 2, borderRadius: 10, margin: 5 }]}
                                                placeholder={`Enter ${arrItem[0]} in ${arrMain[iteratorForCategories][iteratorForUnitOne]} `
                                                }></TextInput>
                                            {/* </View> */}

                                            <Text style={[style.text, { fontSize: 15 }]}> {arrItem[iteratorForCategories]} in {arrMain[iteratorForCategories][iteratorForUnitTwo]} is {value1}</Text>
                                        </View>
                                }</View>

                        </View>
                        <View style={[style.container, style.setFlex1]}>

                            <Pressable
                                style={[style.container, style.setFlex1, { borderRadius: 20, width: '80%', backgroundColor: 'grey' }]}

                                onPress={() => {
                                    console.warn("Saved");

                                    setHistory([...arrHistory,
                                    {
                                        UnitFrom: `${arrMain[iteratorForCategories][iteratorForUnitOne]}`,
                                        valueOfUnitFrom: value,
                                        UnitTo: `${arrMain[iteratorForCategories][iteratorForUnitTwo]}`,
                                        valueOfUnitTo: value1
                                    }])

                                }}>
                                <Text style={[style.text, style.extraSmallSize]}>Save</Text>
                            </Pressable>

                            <Pressable
                                style={[style.container, style.setFlex2]}
                                onPress={() => setDisplayHistory(!isDisplayHistory)}>
                                <Image style={{ height: 30, width: 30 }} source={require('./assests/images/history.png')}></Image>
                            </Pressable>

                        </View>

                    </View>

                    <View style={[style.setFlex1, { flexDirection: 'row', flexWrap: 'wrap', }]}>
                        {isDisplayHistory ?
                            <View>
                                {
                                    arrHistory.map((item, index) =>
                                        <Text key={index} style={{ backgroundColor: 'white' }}>{item.UnitFrom} : {item.valueOfUnitFrom} -{'>'} {item.UnitTo} : {item.valueOfUnitTo} </Text>
                                    )

                                }
                            </View>
                            : null
                        }

                    </View>


                </View>

            </View>

        </SafeAreaView >
    )

}

export default UnitConvertor;


