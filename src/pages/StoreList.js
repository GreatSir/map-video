import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    Image, Text, ImageBackground, TouchableOpacity, ScrollView
} from 'react-native';

const images = {
    background: require('../png/bgp.png'),
    fire: require('../png/act.png'),
    man: require('../png/man.png'),
    temp: require('../temp/jifen.png'),
    video: require('../temp/video.png'),
    follow: require('../png/follow.png'),
    buttonBackground: require('../png/bbtn／blue.png'),
    mv: require('../png/mv.png'),
    rank1: require('../png/rank／1.png'),
    rank2: require('../png/rank／2.png'),
    rank3: require('../png/rank／3.png'),
    rank4: require('../png/rank／4-9999.png'),

    rankBanner1: require('../png/rankbanner／1.png'),
    rankBanner2: require('../png/rankbanner／2.png'),
    rankBanner3: require('../png/rankbanner／3.png'),
    rankBanner4: require('../png/rankbanner／4-999.png'),

    back: require('../png/back.png'),

    phots: require('../temp/phots.png'),

    slot1: require('../png/slot／1.png'),
    slot2: require('../png/slot／2.png'),
    slot3: require('../png/slot／3.png'),
    i1: require('../png/i1.png'),
    hot: require('../png/label／hot.png'),
    new: require('../png/label／new.png'),
}
export default class StoreList extends Component {

    constructor() {
        super();
        this.state = {
            switch: 'a'
        }
    }

    switch(tab) {
        this.setState({switch: tab})
    }

    render() {
        return (
            <ImageBackground source={images.background} style={styles.container}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: 60,
                    alignItems: 'center',
                    padding: 10
                }}>
                    <Image source={images.back}></Image>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={images.back}></Image>
                        <Text style={{color: 'white', marginLeft: 10}}>999999999</Text>
                    </View>
                    <Image source={images.back}></Image>
                </View>
                <View style={{...styles.switch}}>
                    <TouchableOpacity
                        style={this.state.switch === 'a' && styles.switchItemSelect || styles.switchItem}
                        onPress={() => {
                            this.switch('a')
                        }}>
                        <Text style={{color: 'white', fontSize: this.state.switch === 'a' ? 20 : 14}}>装饰类</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={this.state.switch === 'b' && styles.switchItemSelect || styles.switchItem}
                        onPress={() => {
                            this.switch('b')
                        }}>
                        <Text style={{color: 'white', fontSize: this.state.switch === 'b' ? 20 : 14}}>商铺折扣券</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={this.state.switch === 'c' && styles.switchItemSelect || styles.switchItem}
                        onPress={() => {
                            this.switch('c')
                        }}>
                        <Text style={{color: 'white', fontSize: this.state.switch === 'c' ? 20 : 14}}>实物类</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height: 200, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'skyblue'}}>滚动图</Text>
                </View>
                <ScrollView style={{flex: 1}}>
                    <View style={styles.storeList}>
                        {!!(this.state.switch === 'a') &&
                        [0,0,0,0,0,0,0,0,0,0,0,0,].map(()=>{
                            return <View style={styles.storeItem}>
                                <Image source={images.slot1} style={{width: '100%', height: '100%'}}/>
                                <View style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                    paddingBottom: 4
                                }}>
                                    <Image source={images.new} style={{position: 'absolute', left: -22, top: -22}}/>
                                    <Image source={images.i1}/>
                                    <Text style={{color: 'skyblue', fontSize: 18}}>商品名字</Text>
                                    <Text style={{color: 'red', fontSize: 14}}>限购 0/1</Text>
                                    <Text style={{color: 'red', fontSize: 14}}>50:50</Text>
                                    <View style={{
                                        backgroundColor: 'darkblue',
                                        height: 40,
                                        borderRadius: 20,
                                        width: '90%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{color: 'white'}}>999999</Text>
                                    </View>
                                </View>
                            </View>
                        })}
                        {!!(this.state.switch === 'b') &&
                        [0,0,0,0,0,0,0,0,0,0,0,0,].map(()=>{
                            return <View style={styles.storeItem}>
                                <Image source={images.slot2} style={{width: '100%', height: '100%'}}/>
                                <View style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                    paddingBottom: 4
                                }}>
                                    <Image source={images.hot} style={{position: 'absolute', left: -22, top: -22}}/>
                                    <Image source={images.i1}/>
                                    <Text style={{color: 'skyblue', fontSize: 18}}>商品名字</Text>
                                    <Text style={{color: 'red', fontSize: 14}}>限购 0/1</Text>
                                    <Text style={{color: 'red', fontSize: 14}}>50:50</Text>
                                    <View style={{
                                        backgroundColor: 'darkblue',
                                        height: 40,
                                        borderRadius: 20,
                                        width: '90%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{color: 'white'}}>999999</Text>
                                    </View>
                                </View>
                            </View>
                        })}
                        {!!(this.state.switch === 'c') &&
                        [0,0,0,0,0,0,0,0,0,0,0,0,].map(()=>{
                            return <View style={styles.storeItem}>
                                <Image source={images.slot3} style={{width: '100%', height: '100%'}}/>
                                <View style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                    paddingBottom: 4
                                }}>
                                    <Image source={images.hot} style={{position: 'absolute', left: -22, top: -22}}/>
                                    <Image source={images.i1}/>
                                    <Text style={{color: 'skyblue', fontSize: 18}}>商品名字</Text>
                                    <Text style={{color: 'red', fontSize: 14}}>限购 0/1</Text>
                                    <Text style={{color: 'red', fontSize: 14}}>50:50</Text>
                                    <View style={{
                                        backgroundColor: 'darkblue',
                                        height: 40,
                                        borderRadius: 20,
                                        width: '90%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{color: 'white'}}>999999</Text>
                                    </View>
                                </View>
                            </View>
                        })}

                    </View>
                </ScrollView>
            </ImageBackground>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    switch: {
        flexDirection: 'row',
        width: '100%', justifyContent: 'space-around',
        alignItems: 'flex-end',
        height: 60

    },
    switchItem: {
        color: 'white',
        backgroundColor: 'black',
        height: 50,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
    },
    switchItemSelect: {
        color: 'white',
        height: 60,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        backgroundColor: 'skyblue',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    storeList: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'

    },
    storeItem: {
        margin: 5,
        // flex:1,
        width: '30%',
        height: 200,
    },

});