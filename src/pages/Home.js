import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, WebView, Image,TouchableOpacity,NativeModules} from 'react-native';

const images = {
    act: require('../png/act.png'),
    store: require('../png/store.png'),
    search: require('../png/search.png'),
    quest: require('../png/quest.png'),
    manboard: require('../png/manboard.png'),
    man: require('../png/man.png'),
    i1: require('../png/i1.png'),
    quiteview: require('../png/quiteview.png'),
    social: require('../png/social.png'),
    pstn: require('../png/pstn.png'),
    dtitle: require('../png/dtitle.png'),
    stark: require('../png/stark.png'),
}

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
var nativeModule = NativeModules.LoopyunJumpModule
export default class Home extends Component<Props> {
    jumpToNativeView() {

        nativeModule.startMain("com.Tata.video.activity.MainActivity","rn");
    }
    jumpToNativeView2() {
        nativeModule.openMain();
    }
    render() {
        return (
            <View style={styles.container}>
                <WebView source={{uri: 'https://m.amap.com'}}/>
                <View style={styles.head}>
                    <View style={{height: '100%', width: '45%', ...styles.flexCenter}}>
                        <Image source={images.manboard}/>
                        <Image source={images.man} style={{position: 'absolute', left: 10}}/>
                        <Text style={{position: 'absolute', left: 70, top: 40}}>123456</Text>
                    </View>
                    <View style={{
                        height: '100%',
                        width: '55%',
                        ...styles.flexCenter
                    }}>
                        <TouchableOpacity onPress={()=>{
                            this.props.navigation.navigate('Act')
                        }}>
                        <Image source={images.act}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            this.props.navigation.navigate('StoreList')
                        }}>
                            <Image source={images.store}/>
                        </TouchableOpacity>
                        
                        <Image source={images.search}/>
                        <Image source={images.quest}/>
                    </View>
                </View>
                <View style={styles.foot}>
                    <View style={{width:'80%',height:'100%',...styles.flexCenter}}>
                        <Image source={images.i1}/>
                        <TouchableOpacity onPress={()=>{
                            this.jumpToNativeView();
                        }}>
                            <Image source={images.quiteview}/>
                        </TouchableOpacity>
                        
                        <Image source={images.social}/>
                    </View>
                </View>
                <View style={styles.rightBars}>
                    <Image source={images.pstn}/>
                    <Image source={images.dtitle}/>
                    <Image source={images.stark}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    flexCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    head: {
        height: 80,
        flexDirection: 'row',
        position: 'absolute',
        // backgroundColor: 'transparent'
    },
    foot: {
        height: 100,
        width: '100%',
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    rightBars:{
        height: 150,
        width: 40,
        position: 'absolute',
        bottom: 150,
        right:20,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    headImage: {
        width: 100,
        height: 100
    }
});
