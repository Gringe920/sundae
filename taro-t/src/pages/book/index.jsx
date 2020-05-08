import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button} from '@tarojs/components'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: 'book'
  }
  
  render () {
    return (
      <View className='index'>
        <Text>Hello book</Text>
      </View>
    )
  }
}
