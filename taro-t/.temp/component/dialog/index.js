import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from "@tarojs/components";
import './dialog.scss';
export default class Dialog extends Taro.Component {
  render() {
    return <View className="dialog">
                <View className="wrapper"></View>
                <View className="dialog-c">
                    <View className="header">
                        {this.props.renderHeader}
                    </View>
                    <View className="body">
                        {this.props.children}
                    </View>
                    <View className="footer">
                        {this.props.renderFooter}
                    </View>
                </View>
            </View>;
  }
}