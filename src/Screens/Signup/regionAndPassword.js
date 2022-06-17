import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Entypo from 'react-native-vector-icons/Entypo';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import Img from '../../Components/Img';
import ImgBg from '../../Components/BackgroundImage';
import HeaderCustom from '../../Components/Header';
import ButtonCustom from '../../Components/ButtonCustom';
import LoadingButtonCustom from '../../Components/LoadingButtonCustom';
import TextInput from '../../Components/TextInput';
import { Colors } from '../../Styles';
import { scale } from '../../Components/scaling';
import CountryLists from '../../Components/countryLists';
import styles from '../styles';
import style from './styles';
// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePicker from "react-native-modal-datetime-picker";

import moment from 'moment';

export default function RegionAndPassword({ navigation, route }) {
    const { navigate, goBack } = navigation;
    const [loading, setLoading] = useState(false);
    const [region, setregion] = useState(null);
    const [password, setpassword] = useState('');
    const [rePassword, setrePassword] = useState('');
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [datePlaceHolder, setdatePlaceHolder] = useState(null);
    const [countryListsShow, setcountryListsShow] = useState(false);
    const [isDateTimePickerVisible, setisDateTimePickerVisible] = useState(false);

    const onChange = (selectedDate) => {
        console.log( selectedDate,'event, selectedDate')
        const currentDate = moment(selectedDate).format('l');
        setShow(false);
        setDate(selectedDate);
        setdatePlaceHolder(currentDate);
    };

    const selectRegion = (item, imgPath) => {
        console.log(item, imgPath, 'selectRegion')
        setcountryListsShow(false)
        setregion(item.name)
    };
    const hideDateTimePicker = () => {
        setShow( false );
      };
    return (
        <ImgBg type="success">
            {

                (countryListsShow) ? (<CountryLists goBack={goBack} selectRegion={selectRegion} />) :
                    <>

                        <HeaderCustom back={true} showLogo={true} goBack={goBack} />

                        <KeyboardAwareScrollView
                            contentContainerStyle={[
                                styles.mainContainer,
                                styles.justifySpaceBetween,
                                styles.alignCenter,
                                styles.flexGrow_1,
                                ,
                                {
                                    padding: 20,
                                },
                            ]}
                            style={styles.w_100}
                            showsVerticalScrollIndicator={false}>

                            <View style={[styles.w_90, styles.margin4Percent]}>
                                <Text style={style.labelText}>DATE OF BIRTH:</Text>
                                <View style={[styles.w_90, styles.alignCenter, styles.directionRow, {
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderRadius: 8,
                                    backgroundColor: '#0C1D34',
                                    borderWidth: 2,
                                    borderColor: Colors.primary,
                                    height: 35,
                                    marginBottom: 14,
                                }]}>
                                    <TouchableOpacity
                                    style={{flex:1}}
                                    onPress={() => { setShow(true) }}>
                                        {
                                            datePlaceHolder != null && <Text style={{ color: Colors.Grey, marginLeft: 15 }} >{datePlaceHolder}</Text>
                                        }
                                        {
                                            datePlaceHolder == null && <Text style={{ color: Colors.Grey, marginLeft: 15 }} >Select Date</Text>
                                        }
                                    </TouchableOpacity>
                                    {
                                            <DateTimePicker
                                                isVisible={show}
                                                onConfirm={onChange }
                                                onCancel={hideDateTimePicker}

                                            />
                                    }
                                </View>

                                <Text style={style.labelText}>REGION:</Text>
                                <View
                                    style={[styles.w_90, styles.alignCenter, styles.directionRow, {
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        borderRadius: 8,
                                        backgroundColor: '#0C1D34',
                                        borderWidth: 2,
                                        borderColor: Colors.primary,
                                        height: 35,
                                        marginBottom: 14,
                                    }]}
                                >
                                    <TouchableOpacity onPress={() => { setcountryListsShow(true) }}>
                                        {
                                            region != null && <Text style={{ color: Colors.Grey, marginLeft: 15 }} >{region}</Text>
                                        }
                                        {
                                            region == null && <Text style={{ color: Colors.Grey, marginLeft: 15 }} >Select Region</Text>
                                        }
                                    </TouchableOpacity>
                                </View>

                                <Text style={style.labelText}>PASSWORD:</Text>
                                <TextInput
                                    // icon={userIcon}
                                    placeholder="Password must be 8-16 characters"
                                    placeholderTextHolder={Colors.Grey}
                                    value={password}
                                    change={setpassword}
                                />

                                <Text style={style.labelText}>RE-ENTER PASSWORD:</Text>
                                <TextInput
                                    // icon={userIcon}
                                    placeholder="Password must be 8-16 characters"
                                    placeholderTextHolder={Colors.Grey}
                                    value={rePassword}
                                    change={setrePassword}
                                />

                                <View
                                    style={[
                                        styles.justifyCenter,
                                        styles.alignCenter,
                                        styles.directionRow,
                                        {
                                            marginTop: 10,
                                        },
                                    ]}>
                                    {loading ? (
                                        <LoadingButtonCustom />
                                    ) : (
                                        <ButtonCustom title="Submit"
                                            onPress={() => { navigate('Home') }}
                                        />
                                    )}
                                </View>

                            </View>

                        </KeyboardAwareScrollView>
                    </>
            }
        </ImgBg>
    );
}
