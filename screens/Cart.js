import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Image,
    TextInput,
    FlatList
} from 'react-native';

import { connect } from 'react-redux';

import { IconButton, TabButton, CustomButton, HeaderBar } from '../components';
import { dummyData, SIZES, COLORS, FONTS, icons } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Cart = ({ navigation, appTheme }) => {

    const [selectedTab, setSelectedTab] = React.useState(0)


    const CartCard = ({ item }) => {
        return (
            <View style={styles.cartCard}>
                <Image source={item.image} style={{ height: 60, width: 60 }} />
                <View
                    style={{
                        height: 100,
                        marginLeft: 10,
                        paddingVertical: 20,
                        flex: 1,
                    }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
                    <Text style={{ fontSize: 13, color: COLORS.grey }}>
                        {item.ingredients}
                    </Text>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>${item.price}</Text>
                </View>
                <View style={{ marginRight: 20, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>3</Text>
                    <View style={styles.actionBtn}>
                        <Icon name="remove" size={25} color={COLORS.white} />
                        <Icon name="add" size={25} color={COLORS.white} />
                    </View>
                </View>
            </View>
        );
    };

    function renderLocationList() {
        return (

            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40 }}
                data={dummyData.cartItem}
                renderItem={({ item }) => <CartCard item={item} />}
                ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
                ListFooterComponent={() => (
                    <View style={{ marginBottom: 50 }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginVertical: 15,
                            }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                Total Price
              </Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>$50</Text>
                        </View>
                        <View style={{ marginHorizontal: 30 }}>
                            {/* <PrimaryButton title="CHECKOUT" /> */}
                            <CustomButton
                                lable='Checkout'
                                isPrimaryButton={true}
                                containerStyle={{
                                    marginTop: 10,
                                    paddingHorizontal: SIZES.padding,
                                    paddingVertical: SIZES.base,
                                    borderRadius: SIZES.radius * 2,

                                }}

                                lableStyle={{
                                    ...FONTS.h3
                                }}

                                onPress={() => navigation.navigate('Location')}
                            />
                        </View>
                    </View>
                )}
            />

        )
    }

    return (
        <View style={styles.container}>

            <HeaderBar />

            <View style={{
                flex: 1,
                backgroundColor: appTheme.backgroundColor,
                marginTop: -20,
                borderTopRightRadius: SIZES.radius * 2,
                borderTopLeftRadius: SIZES.radius * 2,
                padding: SIZES.padding
            }}>

                {renderLocationList()}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    cartCard: {
        height: 100,
        elevation: 8,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionBtn: {
        width: 80,
        height: 30,
        backgroundColor: COLORS.primary,
        borderRadius: 30,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
})



function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
        error: state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)