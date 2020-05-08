import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import './index.scss';
import List from '../list/index';


export default class Index extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'index',
      checked: false
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: 'taro'
  };
  gotoPage = () => {
    Taro.navigateTo({ url: `/pages/book/index` });
  };
  handleClick = () => {
    this.setState({
      checked: !this.state.checked
    });
  };
  render() {
    const { checked } = this.state;
    return <View className="index">
        {/* <Text>----跳转API {this.state.name}</Text>
         <Button onClick={this.gotoPage}>跳转Book</Button>
         <Text>----复选框选择: {checked.toString()}</Text>
         <Checkbox checked onClick={this.handleClick}/>
         <View>----数据列表渲染｜父子传参｜组件化弹窗：</View> */}
        <List title="人物列表" onHandleChildText={v => {
        console.log(v);
      }} />
        {/* <View>函数式组件：</View> */}
        {/* <FunComp /> */}
        
      </View>;
  }
}