/* eslint-disable radix */
/* eslint-disable */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState, useEffect} from 'react';
import {Node} from 'react';
import {HelloWorld} from './components/HelloWorld';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {ClassTableItem} from './components/ClassTableItem';
const moment = require('moment');
import {useTailwind} from 'tailwind-rn';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import {TabView, Tab} from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import {Tree} from './components/Tree';
let firstWeek = '2022-08-29';
const id = '201002423';
const pwd = 'Wer7727048.';
const semester = '2022-2023-1';
let jsonValue = null;
let week = 4;
let weekNum = 18;
let tken;
let itemHeight = 90;
import {Text, View, Button, Alert, StyleSheet} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// 创建主函数
class App extends React.Component {
  constructor(props) {
    super(props);
    this.QueryTable(13, 4, 10);
    this.state = {table: [], week: 1, index: 0};
  }
  /**
   * 查询课表
   * @param {int} 待查询的周数
   * @param {int} 待查询的星期几（天）
   * @param {int} 带查询的第几节课
   */
  QueryTable = async (wk, wa, cn) => {
    let flag = false;
    let id_d = '@' + wk;
    let json = await getData(id_d);
    json = JSON.parse(json);
    let classInfo = [];
    json.forEach(n => {
      let wd = n.kcsj[0];
      wd = parseInt(wd);
      // 课程开始节数
      let ks = n.kcsj[1] + n.kcsj[2] + '';
      let ks_2 = n.kcsj[5] + n.kcsj[6] + '';
      let ks_3 = n.kcsj[3] + n.kcsj[4] + '';
      ks = parseInt(ks);
      ks_2 = parseInt(ks_2);
      ks_3 = parseInt(ks_3);
      if (wd === wa && (ks === cn || ks_2 === cn)) {
        console.log('找到课程');
        console.log(n);
        flag = true;

        classInfo[1] = n.kcmc;
        classInfo[2] = n.jsmc;
        classInfo[3] = n.kssj + '-' + n.jssj;
        classInfo[4] = n.jsxm;
        classInfo[5] = ks_2;
        this.setState({
          table: classInfo,
          week: 2,
        });
        return classInfo;
      }
    });
    if (flag === false) {
      console.log('无课');
      this.setState({
        table: classInfo,
      });
      return classInfo;
    }
  };
  render() {
    return (
      <TailwindProvider utilities={utilities}>
        <NavigationContainer>
          {/* <TopBar /> */}
          <Tab
            value={this.state.index}
            scrollable
            containerStyle={{backgroundColor: '#4099FF'}}
            onChange={e =>
              this.setState({
                index: e,
              })
            }
            disableIndicator>
            {/* <Icon name={'angle-right'} size={30} color="#900" /> */}
            <Tab.Item
              containerStyle={active => ({
                backgroundColor: active ? '#bfdbfe' : undefined,
                width: 70,
                height: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                margin: 3,
                color: '#3b82f6',
                paddingHorizontal: 0,
                paddingBottom: 0,
              })}
              titleStyle={{
                color: '#3b82f6',
                zIndex: 100,
                fontWeight: 'bold',
                fontSize: 12,
                margin: 0,
              }}>
              @1
            </Tab.Item>
          </Tab>
          <TabView
            value={this.state.index}
            onChange={e =>
              this.setState({
                index: e,
              })
            }
            animationType="spring">
            <TabView.Item style={[styles.viewModel]}>
              <ClassTableItem classInfo={this.state.table} />
            </TabView.Item>
            <TabView.Item style={{backgroundColor: '#eff6ff', width: '100%'}}>
              <Text h1>Recent</Text>
            </TabView.Item>
          </TabView>

          {/* <Button title="Press me" onPress={() => this.QueryTable(4, 2, 3)} /> */}
        </NavigationContainer>
      </TailwindProvider>
    );
  }
}

// 逻辑函数

// 创建函数返回当前日期（年月日）
function getToday() {
  const today = new Date();
  const nowDay =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  return nowDay;
}

// 获取当前日期所在的周数
function getWeek() {
  let today = moment().format('YYYY-MM-DD');
  today = moment(today);
  firstWeek = moment(firstWeek);
  let day = today.diff(firstWeek, 'day');
  console.log(day);
  week = parseInt(day / 7) + 1;
  return week;
}

// 返回今天是周几
function getWeekDay() {
  let weeks = [1, 2, 3, 4, 5, 6, 7];
  let day = new Date().getDay();
  console.log('今天星期' + weeks[day] - 1);
  return weeks[day] - 1;
}

// 网络爬虫
function Crawl() {
  const Http = new XMLHttpRequest();
  let loginLink =
    'http://newjwxt.bjfu.edu.cn/app.do?method=authUser&xh=' +
    id +
    '&pwd=' +
    pwd;
  Http.open('POST', loginLink);
  Http.send();
  let rep;

  Http.onreadystatechange = function () {
    console.log(this.responseText);
    rep = this.responseText;
    let res = JSON.parse(rep);
    tken = res.token;
    let HttpRequest = [];
    // 循环获取整个学期的课表
    for (let i = 0; i < weekNum; i++) {
      let zsc = i + 1;
      let tableUrl =
        'http://newjwxt.bjfu.edu.cn/app.do?method=getKbcxAzc&xh=' +
        id +
        '&xnxqid=' +
        semester +
        '&zc=' +
        zsc;
      HttpRequest[i] = new XMLHttpRequest();
      HttpRequest[i].open('POST', tableUrl);
      HttpRequest[i].setRequestHeader('token', tken);
      HttpRequest[i].send();
      HttpRequest[i].onreadystatechange = function () {
        console.log('第' + zsc + '周' + this.responseText);
        jsonValue = this.responseText;
        let id_d = '@' + zsc;
        storeData(id_d, jsonValue);
      };
    }
  };
}

// 存储数据到缓存
const storeData = async (id_data, value) => {
  try {
    console.log('存储数据');
    jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(id_data, jsonValue);
  } catch (e) {
    console.log('存储失败' + e);
  }
};

// 获取缓存中的数据
const getData = async w => {
  try {
    // w = w;
    // let id_d = '@' + w;
    console.log('读取数据');
    jsonValue = await AsyncStorage.getItem(w).catch(e => {
      console.log('读取失败' + e);
    });
    let jf = JSON.parse(jsonValue);
    // console.log(jf[1]);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
    // return JSON.parse(jsonValue);
  } catch (e) {
    // error reading value
    console.log('读取失败' + e);
  }
};

function ClassTableItem(props) {
  const tailwind = useTailwind();
  console.log(props.classInfo[5]);
  if (props.data === null) {
    return <View></View>;
  } else {
    if (props.classInfo[5] === 5 || props.classInfo[5] === 12) {
      return (
        <View style={[styles.item_1]}>
          <Text numberOfLines={5} style={[styles.item_child]}>
            {props.classInfo[1]}
          </Text>
          <Text style={[styles.item_child]}>#{props.classInfo[2]}</Text>
          {/* <Text>{props.classInfo[3]}</Text> */}
          {/* <Text>{props.classInfo[4]}</Text> */}
        </View>
      );
    } else {
      return (
        <View style={[styles.item]}>
          <Text numberOfLines={5} style={[styles.item_child]}>
            {props.classInfo[1]}
          </Text>
          <Text style={[styles.item_child]}>#{props.classInfo[2]}</Text>
          {/* <Text>{props.classInfo[3]}</Text> */}
          {/* <Text>{props.classInfo[4]}</Text> */}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  item: {
    width: 55,
    height: 90,
    padding: 5,
    borderRadius: 16,
    backgroundColor: '#2A82E4',
    borderColor: '#5DA4F5',
    borderWidth: 3,
    display: 'flex',
    justifyContent: 'center',
  },
  item_1: {
    width: 55,
    height: 150,
    padding: 5,
    borderRadius: 16,
    backgroundColor: '#2A82E4',
    borderColor: '#5DA4F5',
    borderWidth: 3,
    display: 'flex',
    justifyContent: 'center',
  },
  item_child: {
    color: 'white',
    fontSize: 12,
    maxHeight: 48,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  viewModel: {
    backgroundColor: '#eff6ff',
    width: '100%',
    padding: 3,
  },
});

export default App;
