import React,{Component} from "react";
import Video from 'react-native-video';
import {styles} from './style'
import { Progress } from 'beeshell/dist/components/Progress';
import { SafeAreaView,View} from "react-native";

export default class Wallet extends Component<any, any>{
    state = {
        adress1:'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
        progress:{
            atTimescale:1000,
            atValue:100,
            currentTime:100,
            playableDuration:100,
            seekableDuration:1000,
        }
    }
    player:any
    onBuffer(){
        console.log('')
    }
    videoError(){

    }
    onLoadStart(e:any){

    }
    onAudioFocusChanged(e:any){
        console.log(e,'这是')
    }
    onProgress(e:any){
        // console.log(e,'进度条')
        this.setState({
            progress:e
        })
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {adress1,progress} = this.state;
        const {playableDuration,currentTime} = progress;
        return <SafeAreaView style={styles.screen}>

            <Video source={{uri: adress1}}   // Can be a URL or a local file.
                   ref={(ref) => {
                       this.player = ref
                   }}
                   onProgress={this.onProgress.bind(this)}
                    // @ts-ignore
                   onLoadStart={this.onLoadStart}
                   onBuffer={this.onBuffer}                // Callback when remote video is buffering
                   onError={this.videoError}               // Callback when video cannot be loaded
                   style={styles.backgroundVideo} />
            <View style={styles.progressView}>
                <Progress
                    easing={true}
                    percent={currentTime}
                    duration={playableDuration}
                    barStyle={styles.progress}
                />
            </View>
        </SafeAreaView>

    }
}
