import React from 'react';

import {
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    View,
    Text
} from 'react-native';

import { connect } from 'react-redux';

import { toggleTheme } from '../stores/themeActions';

import { SIZES, COLORS, FONTS, icons } from '../constants';

const HeaderBar = ({ appTheme, toggleTheme }) => {

    function toggleThemeHeandler(){
        if(appTheme.name == 'light'){
            toggleTheme('dark')
        }else{
            toggleTheme('light')
        }
    }
    return(
        <SafeAreaView style={{
            height:130,
            width:'100%',
            backgroundColor:COLORS.primary,
            flexDirection:'row',
        }}>

            {/* grittings */}

            <View style={{
                flex:1,
                paddingLeft:SIZES.padding,
                marginTop:16,
            }}>

                <Text style={{ color:COLORS.white, ...FONTS.h2, fontSize:18}}>Welcome, Dinesh</Text>
                <Text style={{ color:COLORS.white, ...FONTS.h2, fontSize:14}}>What do you want today!</Text>
            </View>


            <View style={{
                justifyContent:'flex-end',
                alignItems:'center',
                height:50,
                width:50,
                marginRight:16,
                marginTop:16,
                backgroundColor:COLORS.white,
                borderRadius:25
            }}>

                <Image style={{
                    height:45,
                    width:45,
                    borderRadius:23,
                    justifyContent:'center',
                    alignItems:'center'
                }}
                source={icons.userProfile}>

                </Image>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    selectedNightModStyle :{
        borderRadius:20,
        backgroundColor:COLORS.black
    },


    selectedLightModStyle :{
        borderRadius:20,
        backgroundColor:COLORS.yellow
    },
})

function mapStateToProps(state){
    return {
         appTheme : state.appTheme,
         error : state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleTheme : (themeType) => { return dispatch(toggleTheme(themeType))

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar)