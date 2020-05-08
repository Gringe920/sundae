import Taro, { useCallback } from '@tarojs/taro';
import { Text } from '@tarojs/components';

export default function List(){
  const handleClick = useCallback(() => {
  	console.log('函数组件里面的点击事件')
  })
	return (<Text onClick={handleClick}>这是一个函数式组件,点一下 </Text>)
}