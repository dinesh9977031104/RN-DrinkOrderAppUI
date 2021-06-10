import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { dummyData, FONTS, COLORS, SIZES, icons } from '../constants';
import { IconButton, CustomButton } from '../components';


import { connect } from 'react-redux';

const OrderDetail = ({ navigation, route, appTheme }) => {

    const [selectedItem, setSelectedItem] = React.useState(null)

    const [selectedSize, setSelectedSize] = React.useState(50)

    const [selectedMilkIndex, setSelectedMilkIndex] = React.useState(0)

    const [selectedSweetnesLavel, setSelectedSweetnesLavel] = React.useState(50)

    const [selectedIceLavel, setSelectedIceLavel] = React.useState(50)

    React.useEffect(() => {
        let { selectedItem } = route.params
        setSelectedItem(selectedItem)
    }, [])




    function sweetnessLavelButtonHeandler(action) {
        if (action == '+' && selectedSweetnesLavel < 100) {
            setSelectedSweetnesLavel(selectedSweetnesLavel + 25)
        } else if (action == '-' && selectedSweetnesLavel > 0) {
            setSelectedSweetnesLavel(selectedSweetnesLavel - 25)
        }
    }


    function iceLavelButtonHeandler(action) {
        if (action == '+' && selectedIceLavel < 100) {
            setSelectedIceLavel(selectedIceLavel + 25)
        } else if (action == '-' && selectedIceLavel > 0) {
            setSelectedIceLavel(selectedIceLavel - 25)
        }
    }

    function renderHeaderSection() {
        return (
            <View style={{
                flex:1,
                width: '100%',
                height: 300,
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 40,
                    borderBottomLeftRadius: 80,
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor: COLORS.primary
                }} />

                <Image
                    source={selectedItem?.thumbnail}
                    resizeMode='contain'
                    style={{
                        // width: SIZES.width * 0.7,
                        // height: SIZES.width * 0.7,
                        width: 250,
                        height: 250,
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                />

                {/* back button */}
                <IconButton
                    containerStyle={{
                        position: 'absolute',
                        top: 45,
                        left: 20,
                        padding: 10,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.black
                    }}
                    icon={icons.leftArrow}
                    onPress={() => navigation.goBack()}
                />

            </View>
        )
    }

    function renderDetailSection() {
        return (
            <View style={{
                flex: 1,
                paddingHorizontal: 30,
                marginTop: SIZES.padding,
                justifyContent: 'space-between'
            }}>

                {/* name and desc */}
                <View>
                    <Text style={{
                        color: COLORS.primary,
                        ...FONTS.h1,
                        fontSize: 20,
                    }}>
                        {selectedItem?.name}
                    </Text>

                    <Text style={{
                        marginTop: SIZES.base,
                        color: COLORS.gray,
                        ...FONTS.body3
                    }}>
                        {selectedItem?.description}
                    </Text>
                </View>

                {/* size */}
                <View style={{
                    flexDirection: 'column',
                    
                    marginTop: SIZES.radius
                }}>

                    {/* lable */}
                    <Text style={{
                        flex: 1,
                       
                        color: COLORS.primary,
                        ...FONTS.h1,
                        fontSize: 16
                    }}>
                        Pick a Size
                    </Text>
                   
                    {/* cup */}

                    <View style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}>

                        <TouchableOpacity style={{
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}
                            onPress={() => setSelectedSize(50)}
                        >

                            <ImageBackground
                                source={icons.coffee_cup}
                                style={{
                                    width: 80,
                                    height: 80,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                imageStyle={{
                                    tintColor: selectedSize == 50 ? COLORS.primary : COLORS.gray2
                                }}
                            >
                                <Text style={{
                                    color: COLORS.white, ...FONTS.body3
                                }}>
                                    50ml
                                </Text>
                            </ImageBackground>

                            <Text style={{
                                marginTop: 3, color: COLORS.gray2, ...FONTS.body3
                            }}>
                                $2.50
                                </Text>

                        </TouchableOpacity>


                        <TouchableOpacity style={{
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}
                            onPress={() => setSelectedSize(100)}
                        >

                            <ImageBackground
                                source={icons.coffee_cup}
                                style={{
                                    width: 100,
                                    height: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                imageStyle={{
                                    tintColor: selectedSize == 100 ? COLORS.primary : COLORS.gray2
                                }}
                            >
                                <Text style={{
                                    color: COLORS.white, ...FONTS.body3
                                }}>
                                    100ml
                                </Text>
                            </ImageBackground>

                            <Text style={{
                                marginTop: 3, color: COLORS.gray2, ...FONTS.body3
                            }}>
                                $5.00
                                </Text>

                        </TouchableOpacity>




                        {/* //new */}

                        <TouchableOpacity style={{
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}
                            onPress={() => setSelectedSize(200)}
                        >

                            <ImageBackground
                                source={icons.coffee_cup}
                                style={{
                                    width: 120,
                                    height: 120,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                imageStyle={{
                                    tintColor: selectedSize == 200 ? COLORS.primary : COLORS.gray2
                                }}
                            >
                                <Text style={{
                                    color: COLORS.white, ...FONTS.body3
                                }}>
                                    200ml
                                </Text>
                            </ImageBackground>

                            <Text style={{
                                marginTop: 3, color: COLORS.gray2, ...FONTS.body3
                            }}>
                                $8.00
                                </Text>

                        </TouchableOpacity>
                        {/* end */}

                    </View>

                </View>

                {/* Milk sweetness and ice */}

               
                    {/* sweet & ice */}

                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        marginTop: SIZES.padding,
                        height:100
                    }}>

                        {/* sweetness */}
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding
                        }}>

                            <Text style={{
                                textAlign: 'center',
                                color: COLORS.primary,
                                ...FONTS.h2,
                                fontSize: 16
                            }}>
                                Sweetness
                            </Text>

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '60%',
                                borderRadius: 15,
                                backgroundColor: COLORS.primary
                            }}>

                                <IconButton
                                    icon={icons.leftArrow}
                                    containerStyle={{
                                        marginLeft: -8,
                                        width: 25,
                                        height: 25,
                                        borderRadius: 3,
                                        backgroundColor: COLORS.white1
                                    }}
                                    iconStyle={{
                                        width: 15,
                                        height: 15,
                                        tintColor: COLORS.black
                                    }}
                                    onPress={() => sweetnessLavelButtonHeandler('-')}
                                />

                                <View style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>

                                    <Text style={{
                                        color: COLORS.white, ...FONTS.h3
                                    }}>
                                        {selectedSweetnesLavel} %
                                    </Text>

                                </View>

                                <IconButton
                                    icon={icons.rightArrow}
                                    containerStyle={{
                                        marginRight: -8,
                                        width: 25,
                                        height: 25,
                                        borderRadius: 3,
                                        backgroundColor: COLORS.white1
                                    }}
                                    iconStyle={{
                                        width: 15,
                                        height: 15,
                                        tintColor: COLORS.black
                                    }}
                                    onPress={() => sweetnessLavelButtonHeandler('+')}
                                />

                            </View>

                        </View>

                        {/* ice */}

                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding
                        }}>

                            <Text style={{
                                textAlign: 'center',
                                color: COLORS.primary,
                                ...FONTS.h2,
                                fontSize: 16
                            }}>
                                Ice
                            </Text>

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '60%',
                                borderRadius: 15,
                                backgroundColor: COLORS.primary
                            }}>

                                <IconButton
                                    icon={icons.leftArrow}
                                    containerStyle={{
                                        marginLeft: -8,
                                        width: 25,
                                        height: 25,
                                        borderRadius: 3,
                                        backgroundColor: COLORS.white1
                                    }}
                                    iconStyle={{
                                        width: 15,
                                        height: 15,
                                        tintColor: COLORS.black
                                    }}
                                    onPress={() => iceLavelButtonHeandler('-')}
                                />

                                <View style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>

                                    <Text style={{
                                        color: COLORS.white, ...FONTS.h3
                                    }}>
                                        {selectedIceLavel} %
                                    </Text>

                                </View>

                                <IconButton
                                    icon={icons.rightArrow}
                                    containerStyle={{
                                        marginRight: -8,
                                        width: 25,
                                        height: 25,
                                        borderRadius: 3,
                                        backgroundColor: COLORS.white1
                                    }}
                                    iconStyle={{
                                        width: 15,
                                        height: 15,
                                        tintColor: COLORS.black
                                    }}
                                    onPress={() => iceLavelButtonHeandler('+')}
                                />

                            </View>

                        </View>

                    </View>

                <View style={{
                    marginTop: 10,
                    height: 50,
                    width: 300,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <CustomButton
                        lable='Add to Cart'
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

                    //onPress={() => navigation.navigate('Cart')}
                    />
                </View>

            </View>
        )
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: appTheme.backgroundColor
        }}>

            <ScrollView contentContainerStyle={{
                paddingBottom:30
            }}>

                {/* header */}

                {renderHeaderSection()}

                {/* details */}

                {renderDetailSection()}

            </ScrollView>
        </View>
    )
}




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

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail)