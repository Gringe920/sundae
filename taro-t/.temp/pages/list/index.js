import Nerv from "nervjs";
import Taro, { showToast as _showToast } from "@tarojs/taro-h5";
import { View, Text, Button, Input } from '@tarojs/components';
import Dialog from '../../component/dialog/index';
import './index.scss';
import { inject, observer } from "@tarojs/mobx-h5";
import { AtNoticebar, AtAvatar, AtButton } from 'taro-ui';

export default @inject('listStore')
@observer
class List extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [{ id: 1, name: 'nick', age: 11 }, { id: 2, name: 'jet', age: 21 }],
      addDialogShow: false,
      name: '',
      age: ''
    };
  }
  addFood = () => {
    this.setState({
      name: ''
    });
    this.setState({
      age: ''
    });
    this.setState({
      addDialogShow: true
    });
  };
  confirm = () => {
    const { user, name, age } = this.state;
    if (!name) {
      _showToast({
        title: '请输入名称',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (!age) {
      _showToast({
        title: '请输入年龄',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    user.push({
      id: user.length + 1,
      name,
      age
    });
    this.setState({
      user
    });
    this.props.onHandleChildText(user);
    this.setState({
      addDialogShow: false
    });
  };
  deleteFood = () => {
    const { user } = this.state;
    user.splice(user.length - 1, 1);
    this.setState({
      user
    });
  };
  handleName = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleAge = e => {
    this.setState({
      age: e.target.value
    });
  };
  render() {
    const { user, addDialogShow, name, age } = this.state;
    const { listStore: { list } } = this.props;
    console.log('list', list);
    return <View className="list">
                <AtNoticebar />
                <View>{this.props.title}</View>
                <View className="list-boxs">
                {user.map(item => {
          return <View className="box" key={item.id} style={{ backgroundColor: `rgba(255, 177, 0, 0.${item.id})` }}>
                        <View>名字：{item.name}</View>
                        <View>年龄：{item.age}</View></View>;
        })}
                {list.map(item => {
          return <View className="box" key={item.uid}>
                                <AtAvatar image={item.thumbnail} circle size="small" />
                                {item.text}
                                </View>;
        })}
                </View>
                <AtButton onClick={this.addFood} type="primary" size="small">添加</AtButton>
                <AtButton onClick={this.deleteFood} type="primary" size="small">删除</AtButton>
                {addDialogShow && <Dialog renderHeader={<View className="h-msg">添加人物</View>} renderFooter={<View className="btn-group">
                                <Button onClick={this.confirm}>确定</Button>
                                <Button onClick={() => {
          this.setState({ addDialogShow: false });
        }}>取消</Button>
                            </View>}>
                        <View className="dialog-content">
                        <View className="row"><Text className="label">请输入姓名:</Text><Input value={name} onChange={this.handleName} /></View>
                        <View className="row"><Text className="label">请输入年龄:</Text><Input value={age} onChange={this.handleAge} /></View>
                        </View>
                    </Dialog>}
                
            </View>;
  }
}