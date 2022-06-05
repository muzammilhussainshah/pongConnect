import React, { Component } from "react";
import { View, StyleSheet, ScrollView, FlatList, TouchableOpacity, Text, TextInput, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
//flags and country list import
import flags from '../services/resources/flags/index'
let countrysList = require('../services/resources/countries.json');
import Img from '../Components/Img';
import HeaderCustom from '../Components/Header';

const aeroBack = require('../Assets/arrow-back.png');

class CountryLists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: [],
        };
    }

    _onPress(item, path) {
        // this.props.navigation.navigate("PhoneVerification", { item: item, imgPath: path })
        this.props.selectRegion(item, path)
    }


    render() {
        let { search, } = this.state
        let filteredCountryList = [];
        if (countrysList.length > 0) {
            if (search.length) {
                const searchPattern = new RegExp(search.map(term => `(?=.*${term})`).join(''), 'i');
                filteredCountryList = countrysList.filter(stylist => {
                    return stylist.name.match(searchPattern)
                });
            } else {
                filteredCountryList = countrysList;
            }
        }
        return (
            <View style={styles.container}>
                <HeaderCustom back={true} showLogo={true} goBack={this.props.goBack} />

                <View style={styles.header}>
                    {/* <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 10 }}>Region</Text> */}
                    <View style={styles.inputSearchBar}>
                        <View style={styles.inputSearchBarChild}>
                            <Feather name="search" style={styles.iconSearch} />
                        </View>
                        <View style={{ flex: 4, }}>
                            <TextInput style={styles.textInput}
                                onChangeText={(search) => { this.setState({ search: search.split(' ') }) }}
                                value={search[0]}
                                placeholder={"Search"}
                            />
                        </View>
                        <TouchableOpacity style={styles.inputSearchBarChild}>
                            {
                                (search.length != 0 && search[0] != "") ? (
                                    <Entypo name="cross" style={styles.iconClear}
                                        onPress={() => { this.setState({ search: [""] }) }}
                                    />
                                ) : null
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <FlatList
                        data={filteredCountryList}
                        renderItem={
                            ({ item, index, separators }) =>
                            (
                                <TouchableOpacity style={styles.flatListContainer}
                                    onPress={() => this._onPress(item, flags[item.iso2])}
                                >
                                    <View style={styles.countryFlag}>
                                        <TouchableOpacity>
                                            <View style={{ marginTop: "5%", }}>
                                                <Image
                                                    source={flags[item.iso2]}
                                                    style={{ height: 25, width: 25, borderRadius: 50 }}
                                                />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.countryName}>
                                        <Text style={{ marginLeft: 15, color: 'white' }}>{item.name}</Text>
                                    </View>
                                    <View style={styles.countryCode}>
                                        {/* <Text style={{ marginRight: 10, color: "#4267B2", fontWeight: "bold" }}>+{item.dialCode}</Text> */}

                                        <Img
                                            local={true}
                                            style={[{ marginHorizontal: 10, height: 15, width: 15, }]}
                                            resizeMode="contain"
                                            src={aeroBack}
                                        />
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    />
                </ScrollView>
            </View>
        );
    }
}

export default CountryLists

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#ffffff"
        backgroundColor: "#050D18"
    },
    header: {
        height: 60,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    body: {
        flex: 8,
        backgroundColor: "#ffffff"
    },
    inputSearchBar: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10,
        flexDirection: "row",
        width: "90%",
        borderColor: '#EC6707',
        borderWidth: 3,
        borderRadius: 7,
        backgroundColor: "#F5F7FB",
        justifyContent: "center",
        alignItems: "center"
    },
    inputSearchBarChild: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        marginLeft: 20,
        height: 50,
        width: "90%",
    },
    cancleNumberContainer: {
        flex: 0.8,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    iconSearch: {
        fontSize: 25,
        color: "#EC6707",
    },
    iconClear: {
        fontSize: 22,
        color: "#8C8C8C"
    },
    flatListContainer: {
        flex: 1,
        flexDirection: "row",
        margin: "3%",
    },
    countryFlag: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    countryName: {
        flex: 6,
        justifyContent: "center",
    },
    countryCode: {
        flex: 2,
        justifyContent: "center",
        alignItems: "flex-end",
    },

})