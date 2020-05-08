import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { Text } from '@tarojs/components';

export default class List extends Taro.Component {
  render() {
    const handleClick = Taro.useCallback(() => {
      console.log('函数组件里面的点击事件');
    });
    return <Text onClick={handleClick}>这是一个函数式组件,点一下 </Text>;
  }

}