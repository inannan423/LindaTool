/* eslint-disable radix */
/* eslint-disable */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

// import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState, useEffect} from 'react';
// import {Node} from 'react';
// import {HelloWorld} from './components/HelloWorld';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {ClassTableItem} from './components/ClassTableItem';
const moment = require('moment');
import {useTailwind} from 'tailwind-rn';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
// import {TabView, Tab} from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Icon} from '@rneui/themed';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

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
import {
  Text,
  View,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;
let table_1 = [];
let ThisWeek = 1;
let tableJson = [];
// 创建主函数
class App extends React.Component {
  constructor(props) {
    super(props);
    // this.QueryTableClass(ThisWeek);
    this.state = {
      table1_1: [],
      table1_3: [],
      table1_6: [],
      table1_8: [],
      table1_10: [],
      table2_1: [],
      table2_3: [],
      table2_6: [],
      table2_8: [],
      table2_10: [],
      table3_1: [],
      table3_3: [],
      table3_6: [],
      table3_8: [],
      table3_10: [],
      table4_1: [],
      table4_3: [],
      table4_6: [],
      table4_8: [],
      table4_10: [],
      table5_1: [],
      table5_3: [],
      table5_6: [],
      table5_8: [],
      table5_10: [],
      table6_1: [],
      table6_3: [],
      table6_6: [],
      table6_8: [],
      table6_10: [],
      table7_1: [],
      table7_3: [],
      table7_6: [],
      table7_8: [],
      table7_10: [],

      week: 1,
      index: 0,
      windowSize: 0,
    };
  }
  // async componentWillMount() {
  //   console.log('执行了componentWillMount');
  //   for (let u = 1; u < weekNum; u++) {
  //     let id_d = '@' + u;
  //     let json = await getData(id_d);
  //     json = JSON.parse(json);
  //     tableJson[u] = json;
  //     console.log('执行了componentWillMount' + u);
  //     console.log(tableJson[u]);
  //   }
  // }
  UpdateAll = async () => {
    console.log('执行了UpdateAll');
    for (let i = 1; i < weekNum + 1; i++) {
      await this.GetTableCache(i);
    }
    this.QueryTable(ThisWeek, 1, 1);
    this.QueryTable(ThisWeek, 1, 3);
    this.QueryTable(ThisWeek, 1, 6);
    this.QueryTable(ThisWeek, 1, 8);
    this.QueryTable(ThisWeek, 1, 10);
    this.QueryTable(ThisWeek, 2, 1);
    this.QueryTable(ThisWeek, 2, 3);
    this.QueryTable(ThisWeek, 2, 6);
    this.QueryTable(ThisWeek, 2, 8);
    this.QueryTable(ThisWeek, 2, 10);
    this.QueryTable(ThisWeek, 3, 1);
    this.QueryTable(ThisWeek, 3, 3);
    this.QueryTable(ThisWeek, 3, 6);
    this.QueryTable(ThisWeek, 3, 8);
    this.QueryTable(ThisWeek, 3, 10);
    this.QueryTable(ThisWeek, 4, 1);
    this.QueryTable(ThisWeek, 4, 3);
    this.QueryTable(ThisWeek, 4, 6);
    this.QueryTable(ThisWeek, 4, 8);
    this.QueryTable(ThisWeek, 4, 10);
    this.QueryTable(ThisWeek, 5, 1);
    this.QueryTable(ThisWeek, 5, 3);
    this.QueryTable(ThisWeek, 5, 6);
    this.QueryTable(ThisWeek, 5, 8);
    this.QueryTable(ThisWeek, 5, 10);
    this.QueryTable(ThisWeek, 6, 1);
    this.QueryTable(ThisWeek, 6, 3);
    this.QueryTable(ThisWeek, 6, 6);
    this.QueryTable(ThisWeek, 6, 8);
    this.QueryTable(ThisWeek, 6, 10);
    this.QueryTable(ThisWeek, 7, 1);
    this.QueryTable(ThisWeek, 7, 3);
    this.QueryTable(ThisWeek, 7, 6);
    this.QueryTable(ThisWeek, 7, 8);
    this.QueryTable(ThisWeek, 7, 10);
    this.forceUpdate();
  };

  GetTableCache = async id => {
    console.log('执行了GetTableCache' + tableJson[id]);
    let id_d = '@' + id;
    let json = await getData(id_d);
    json = JSON.parse(json);
    tableJson[id] = json;
  };

  /**
   * 查询课表
   * @param {int} 待查询的周数
   * @param {int} 待查询的星期几（天）
   * @param {int} 带查询的第几节课
   */

  QueryTable = async (wk, wa, cn) => {
    console.log('执行了QueryTable');
    // console.log('UpdateTable' + wk + wa + cn);
    let flag = false;
    let id_d = '@' + wk;
    // let json = await this.GetTableCache(wk);
    // 调用全局变量
    json = tableJson[wk];
    // json = JSON.parse(json);
    // json = tableJson[wk];
    let classInfo = [];
    json.forEach(n => {
      let wd = n.kcsj[0];
      wd = parseInt(wd);
      // 课程开始节数
      let ks = n.kcsj[1] + n.kcsj[2] + '';
      let ks_2 = n.kcsj[5] + n.kcsj[6] + '';
      let ks_3 = n.kcsj[3] + n.kcsj[4] + '';
      let ks_4 = n.kcsj[7] + n.kcsj[8] + '';
      ks = parseInt(ks);
      ks_2 = parseInt(ks_2);
      ks_3 = parseInt(ks_3);
      ks_4 = parseInt(ks_4);
      if (wd === wa && (ks === cn || ks_2 === cn)) {
        // console.log('找到课程');
        // console.log(n);
        flag = true;

        classInfo[1] = n.kcmc; //课程名称
        classInfo[2] = n.jsmc; //教师名称
        classInfo[3] = n.kssj + '-' + n.jssj; //上课时间
        classInfo[4] = n.jsxm; //教室名称
        classInfo[5] = ks_2; //课程结束节数，第五节
        classInfo[6] = ks_3; //课程结束节数2，第四节
        classInfo[7] = ks_4; //课程结束节数3，连上时最后一节
        classInfo[0] = cn; //查询时间判定
        tableName = 'table' + wa + '_' + ks;
        if (wa === 1 && cn === 1) {
          this.setState({
            table1_1: classInfo,
          });
        }
        if (wa === 1 && cn === 3) {
          this.setState({
            table1_3: classInfo,
          });
        }
        if (wa === 1 && cn === 6) {
          this.setState({
            table1_6: classInfo,
          });
        }
        if (wa === 1 && cn === 8) {
          this.setState({
            table1_8: classInfo,
          });
        }
        if (wa === 1 && cn === 10) {
          this.setState({
            table1_10: classInfo,
          });
        }
        if (wa === 2 && cn === 1) {
          this.setState({
            table2_1: classInfo,
          });
        }
        if (wa === 2 && cn === 3) {
          this.setState({
            table2_3: classInfo,
          });
        }
        if (wa === 2 && cn === 6) {
          this.setState({
            table2_6: classInfo,
          });
        }
        if (wa === 2 && cn === 8) {
          this.setState({
            table2_8: classInfo,
          });
        }
        if (wa === 2 && cn === 10) {
          this.setState({
            table2_10: classInfo,
          });
        }
        if (wa === 3 && cn === 1) {
          this.setState({
            table3_1: classInfo,
          });
        }
        if (wa === 3 && cn === 3) {
          this.setState({
            table3_3: classInfo,
          });
        }
        if (wa === 3 && cn === 6) {
          this.setState({
            table3_6: classInfo,
          });
        }
        if (wa === 3 && cn === 8) {
          this.setState({
            table3_8: classInfo,
          });
        }
        if (wa === 3 && cn === 10) {
          this.setState({
            table3_10: classInfo,
          });
        }
        if (wa === 4 && cn === 1) {
          this.setState({
            table4_1: classInfo,
          });
        }
        if (wa === 4 && cn === 3) {
          this.setState({
            table4_3: classInfo,
          });
        }
        if (wa === 4 && cn === 6) {
          this.setState({
            table4_6: classInfo,
          });
        }
        if (wa === 4 && cn === 8) {
          this.setState({
            table4_8: classInfo,
          });
        }
        if (wa === 4 && cn === 10) {
          this.setState({
            table4_10: classInfo,
          });
        }
        if (wa === 5 && cn === 1) {
          this.setState({
            table5_1: classInfo,
          });
        }
        if (wa === 5 && cn === 3) {
          this.setState({
            table5_3: classInfo,
          });
        }
        if (wa === 5 && cn === 6) {
          this.setState({
            table5_6: classInfo,
          });
        }
        if (wa === 5 && cn === 8) {
          this.setState({
            table5_8: classInfo,
          });
        }
        if (wa === 5 && cn === 10) {
          this.setState({
            table5_10: classInfo,
          });
        }
        if (wa === 6 && cn === 1) {
          this.setState({
            table6_1: classInfo,
          });
        }
        if (wa === 6 && cn === 3) {
          this.setState({
            table6_3: classInfo,
          });
        }
        if (wa === 6 && cn === 6) {
          this.setState({
            table6_6: classInfo,
          });
        }
        if (wa === 6 && cn === 8) {
          this.setState({
            table6_8: classInfo,
          });
        }
        if (wa === 6 && cn === 10) {
          this.setState({
            table6_10: classInfo,
          });
        }
        if (wa === 7 && cn === 1) {
          this.setState({
            table7_1: classInfo,
          });
        }
        if (wa === 7 && cn === 3) {
          this.setState({
            table7_3: classInfo,
          });
        }
        if (wa === 7 && cn === 6) {
          this.setState({
            table7_6: classInfo,
          });
        }
        if (wa === 7 && cn === 8) {
          this.setState({
            table7_8: classInfo,
          });
        }
        if (wa === 7 && cn === 10) {
          this.setState({
            table7_10: classInfo,
          });
        }

        table_1 = classInfo;
        return classInfo;
      }
    });
    if (flag === false) {
      // console.log('无课');
      tableName = 'table' + wa + '_' + cn;
      this.setState({
        table: classInfo,
      });
      return classInfo;
    }
  };

  storeClassData = async (id_data, value) => {
    try {
      // console.log('存储数据');
      jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(id_data, jsonValue);
    } catch (e) {
      console.log('存储失败' + e);
    }
  };

  render() {
    const Tab = createMaterialTopTabNavigator();
    const CS = [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6},
      {id: 7},
      {id: 8},
      {id: 9},
      {id: 10},
      {id: 11},
      {id: 12},
      {id: 13},
    ];
    const lineheight = Dimensions.get('window').height * 0.057;
    // 左侧课程序号组件
    const Pitem = ({item}) => {
      return (
        <View>
          <Text style={{lineHeight: lineheight, marginLeft: 2}}>{item.id}</Text>
        </View>
      );
    };
    // 课表顶部周几日组件
    const Witem = ({name, wk, nub}) => {
      const foDate = moment(firstWeek)
        .add(7 * (wk - 1) + nub - 1, 'days')
        .format('MM-DD');
      return (
        <View
          style={{
            width: 45,
            height: 30,
            margin: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
          }}>
          <Text style={{color: 'black', fontSize: 10}}>{name}</Text>
          <Text style={{color: 'black', fontSize: 10}}>{foDate}</Text>
        </View>
      );
    };
    // 主课表区域组件
    const MainView = table => {
      const ColWidth = '14.3%';

      return (
        <View
          style={{
            backgroundColor: '#eff6ff',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: 30,
              position: 'relative',
              float: 'left',
              // display: 'inline-block',
            }}>
            <Text style={{height: 30, marginTop: 5}}>9月</Text>
            <FlatList
              data={CS}
              renderItem={Pitem}
              keyExtractor={item => item.id}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              marginLeft: 20,
              // columnCount: 7,
              flexDirection: 'row',
            }}>
            <View style={{float: 'left', width: ColWidth}}>
              <Witem name="周一" wk={this.week} nub={1} />
              <ClassTableItem classInfo={this.state.table1_1} />
              <ClassTableItem classInfo={this.state.table1_3} type={3} />
              <ClassTableItem classInfo={this.state.table1_6} />
              <ClassTableItem classInfo={this.state.table1_8} />
              <ClassTableItem classInfo={this.state.table1_10} />
            </View>
            <View style={{float: 'left', width: ColWidth}}>
              <Witem name="周二" wk={this.week} nub={2} />
              <ClassTableItem classInfo={this.state.table2_1} />
              <ClassTableItem classInfo={this.state.table2_3} type={3} />
              <ClassTableItem classInfo={this.state.table2_6} />
              <ClassTableItem classInfo={this.state.table2_8} />
              <ClassTableItem classInfo={this.state.table2_10} />
            </View>
            <View style={{float: 'left', width: ColWidth}}>
              <Witem name="周三" wk={this.week} nub={3} />
              <ClassTableItem classInfo={this.state.table3_1} />
              <ClassTableItem classInfo={this.state.table3_3} type={3} />
              <ClassTableItem classInfo={this.state.table3_6} />
              <ClassTableItem classInfo={this.state.table3_8} />
              <ClassTableItem classInfo={this.state.table3_10} />
            </View>
            <View style={{float: 'left', width: ColWidth}}>
              <Witem name="周四" wk={this.week} nub={4} />
              <ClassTableItem classInfo={this.state.table4_1} />
              <ClassTableItem classInfo={this.state.table4_3} type={3} />
              <ClassTableItem classInfo={this.state.table4_6} />
              <ClassTableItem classInfo={this.state.table4_8} />
              <ClassTableItem classInfo={this.state.table4_10} />
            </View>
            <View style={{float: 'left', width: ColWidth}}>
              <Witem name="周五" wk={this.week} nub={5} />
              <ClassTableItem classInfo={this.state.table5_1} />
              <ClassTableItem classInfo={this.state.table5_3} type={3} />
              <ClassTableItem classInfo={this.state.table5_6} />
              <ClassTableItem classInfo={this.state.table5_8} />
              <ClassTableItem classInfo={this.state.table5_10} />
            </View>
            <View style={{float: 'left', width: ColWidth}}>
              <Witem name="周六" wk={this.week} nub={6} />
              <ClassTableItem classInfo={this.state.table6_1} />
              <ClassTableItem classInfo={this.state.table6_3} type={3} />
              <ClassTableItem classInfo={this.state.table6_6} />
              <ClassTableItem classInfo={this.state.table6_8} />
              <ClassTableItem classInfo={this.state.table6_10} />
            </View>
            <View style={{float: 'left', width: ColWidth}}>
              <Witem name="周日" wk={this.week} nub={7} />
              <ClassTableItem classInfo={this.state.table7_1} />
              <ClassTableItem classInfo={this.state.table7_3} type={3} />
              <ClassTableItem classInfo={this.state.table7_6} />
              <ClassTableItem classInfo={this.state.table7_8} />
              <ClassTableItem classInfo={this.state.table7_10} />
            </View>
          </View>
        </View>
      );
    };

    const arrA = [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6},
      {id: 7},
      {id: 8},
      {id: 9},
      {id: 10},
      {id: 11},
      {id: 12},
      {id: 13},
    ];
    const PreviewLayout = ({children, values}) => (
      <View style={{padding: 10, height: 50, backgroundColor: '#4099FF'}}>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button]}>
            <Icon name="calendar" type="evilicon" color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={this.UpdateAll}>
            <Icon name="arrow-down" type="evilicon" color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]}>
            <Icon name="gear" type="evilicon" color="white" />
          </TouchableOpacity>
        </View>
        <View style={[styles.container]}>{children}</View>
      </View>
    );
    return (
      <TailwindProvider utilities={utilities}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarScrollEnabled: true,
              tabBarItemStyle: {
                width: 70,
                height: 50,
                backgroundColor: '#4099FF',
              },
              tabBarStyle: {
                backgroundColor: 'powderblue',
                marginBottom: 5,
              },
              tabBarActiveTintColor: 'white',
              tabBarIndicatorStyle: {
                backgroundColor: 'white',
                height: 3,
                width: 90,
              },
            }}
            screenListeners={{
              state: e => {
                // Do something with the state
                console.log('state changed', e.data.state.index);
                ThisWeek = e.data.state.index + 1;
                this.setState({
                  week: e.data.state.index + 1,
                  table1_1: [],
                  table1_3: [],
                  table1_6: [],
                  table1_8: [],
                  table1_10: [],
                  table2_1: [],
                  table2_3: [],
                  table2_6: [],
                  table2_8: [],
                  table2_10: [],
                  table3_1: [],
                  table3_3: [],
                  table3_6: [],
                  table3_8: [],
                  table3_10: [],
                  table4_1: [],
                  table4_3: [],
                  table4_6: [],
                  table4_8: [],
                  table4_10: [],
                  table5_1: [],
                  table5_3: [],
                  table5_6: [],
                  table5_8: [],
                  table5_10: [],
                  table6_1: [],
                  table6_3: [],
                  table6_6: [],
                  table6_8: [],
                  table6_10: [],
                  table7_1: [],
                  table7_3: [],
                  table7_6: [],
                  table7_8: [],
                  table7_10: [],
                });

                this.QueryTable(ThisWeek, 1, 1);
                this.QueryTable(ThisWeek, 1, 3);
                this.QueryTable(ThisWeek, 1, 6);
                this.QueryTable(ThisWeek, 1, 8);
                this.QueryTable(ThisWeek, 1, 10);
                this.QueryTable(ThisWeek, 2, 1);
                this.QueryTable(ThisWeek, 2, 3);
                this.QueryTable(ThisWeek, 2, 6);
                this.QueryTable(ThisWeek, 2, 8);
                this.QueryTable(ThisWeek, 2, 10);
                this.QueryTable(ThisWeek, 3, 1);
                this.QueryTable(ThisWeek, 3, 3);
                this.QueryTable(ThisWeek, 3, 6);
                this.QueryTable(ThisWeek, 3, 8);
                this.QueryTable(ThisWeek, 3, 10);
                this.QueryTable(ThisWeek, 4, 1);
                this.QueryTable(ThisWeek, 4, 3);
                this.QueryTable(ThisWeek, 4, 6);
                this.QueryTable(ThisWeek, 4, 8);
                this.QueryTable(ThisWeek, 4, 10);
                this.QueryTable(ThisWeek, 5, 1);
                this.QueryTable(ThisWeek, 5, 3);
                this.QueryTable(ThisWeek, 5, 6);
                this.QueryTable(ThisWeek, 5, 8);
                this.QueryTable(ThisWeek, 5, 10);
                this.QueryTable(ThisWeek, 6, 1);
                this.QueryTable(ThisWeek, 6, 3);
                this.QueryTable(ThisWeek, 6, 6);
                this.QueryTable(ThisWeek, 6, 8);
                this.QueryTable(ThisWeek, 6, 10);
                this.QueryTable(ThisWeek, 7, 1);
                this.QueryTable(ThisWeek, 7, 3);
                this.QueryTable(ThisWeek, 7, 6);
                this.QueryTable(ThisWeek, 7, 8);
                this.QueryTable(ThisWeek, 7, 10);
                // this.forceUpdate();
              },
            }}>
            {arrA.map(v => (
              <Tab.Screen
                name={'第' + v.id + '周'}
                component={MainView}
                key={v.id}
                onPress={() => {
                  ThisWeek = v.id;
                  this.setState({week: v.id});
                  console.log('#' + ThisWeek);
                }}
              />
            ))}
          </Tab.Navigator>
          <PreviewLayout values={['更新', '设置', '课表']}></PreviewLayout>
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
    // console.log(this.responseText);
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
        // console.log('第' + zsc + '周' + this.responseText);
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
    // console.log('存储数据');
    jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(id_data, jsonValue);
  } catch (e) {
    console.log('存储失败' + e);
  }
};

// 获取缓存中的数据
const getData = async w => {
  try {
    // console.log('读取数据');
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
  // console.log('##' + props.classInfo[1] + props.type);
  // console.log('!@#' + props.classInfo[1]);
  // console.log('!@#' + props.classInfo[1] + '@' + props.classInfo[4]);
  if (
    props.data === null ||
    (props.classInfo[1] === undefined && props.type !== 3)
  ) {
    return <View style={[styles.item_enpty]}></View>;
  } else if (props.classInfo[1] === undefined && props.type === 3) {
    return <View style={[styles.item_enpty_1]}></View>;
  } else {
    if (props.classInfo[5] === 5 || props.classInfo[5] === 12) {
      return (
        <View style={[styles.item_1]}>
          <Text numberOfLines={5} style={[styles.item_child]}>
            {props.classInfo[1]}
          </Text>
          <Text style={[styles.item_child]}>#{props.classInfo[2]}</Text>
        </View>
      );
    } else {
      if (
        props.classInfo[6] === 4 ||
        (props.classInfo[7] === 4 && props.classInfo[0] === 3)
      ) {
        return (
          <View style={[styles.item_2]}>
            <Text numberOfLines={5} style={[styles.item_child]}>
              {props.classInfo[1]}
            </Text>
            <Text style={[styles.item_child]}>#{props.classInfo[2]}</Text>
          </View>
        );
      } else {
        return (
          <View style={[styles.item]}>
            <Text numberOfLines={5} style={[styles.item_child]}>
              {props.classInfo[1]}
            </Text>
            <Text style={[styles.item_child]}>#{props.classInfo[2]}</Text>
          </View>
        );
      }
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
    width: ScreenWidth / 7.8,
    height: ScreenHeight * 0.11,
    padding: 5,
    borderRadius: 11,
    backgroundColor: '#2A82E4',
    borderColor: '#5DA4F5',
    borderWidth: 3,
    display: 'flex',
    justifyContent: 'center',
    margin: 1.5,
  },
  item_1: {
    width: ScreenWidth / 7.8,
    height: ScreenHeight * 0.17,
    padding: 5,
    borderRadius: 11,
    backgroundColor: '#2A82E4',
    borderColor: '#5DA4F5',
    borderWidth: 3,
    display: 'flex',
    justifyContent: 'center',
    margin: 1.5,
    marginBottom: 7,
  },
  item_2: {
    width: ScreenWidth / 7.8,
    height: ScreenHeight * 0.11,
    padding: 5,
    borderRadius: 11,
    backgroundColor: '#2A82E4',
    borderColor: '#5DA4F5',
    borderWidth: 3,
    display: 'flex',
    justifyContent: 'center',
    margin: 1.5,
    marginBottom: (ScreenHeight * 0.11) / 1.6,
  },
  item_enpty: {
    width: ScreenWidth / 7.8,
    height: ScreenHeight * 0.11,
    padding: 5,
    margin: 1.5,
  },
  item_enpty_1: {
    width: ScreenWidth / 7.8,
    height: ScreenHeight * 0.17,
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    margin: 1.5,
    marginBottom: 7,
  },
  item_child: {
    color: 'white',
    fontSize: 10,
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
  tabNav: {
    // 让子元素并排显示
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  tabButton: {
    // 占屏幕宽度一半
    width: '50%',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: '#2A82E4',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: 1,
    minWidth: '30%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 15,
    fontWeight: '800',
    color: 'white',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
  sidebar: {
    position: 'fixed',
    display: 'inlinBlock',
    width: '50',
    height: '100',
    left: 0,
    float: 'left',
    backgroundColor: '#000000',
  },
  line: {
    position: 'relative',
    display: 'inlineBlock',
    width: 750,
    height: 153,
    left: 26,
    float: 'left',
    color: '#2A82B2',
    borderTop: '1px solid rgb(214, 211, 211)',
  },
});

export default App;
