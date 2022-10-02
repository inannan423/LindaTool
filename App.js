/* eslint-disable radix */
/* eslint-disable */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
const moment = require('moment');
import {useTailwind} from 'tailwind-rn';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Icon} from '@rneui/themed';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Toast from 'react-native-toast-message';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Input, Button} from '@rneui/themed';

let firstWeek = '2022-08-29';
let id = '';
let pwd = '';
let semester = '2022-2023-1';
let jsonValue = null;
let week = getWeek();
let weekNum = 18;

let tken;
let itemHeight = 90;
let fga = 0;
import {
  Text,
  View,
  // Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  Share,
  Clipboard,
} from 'react-native';

let arrA = [];

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;
let table_1 = [];
let ThisWeek = 1;
let tableJson = [];
let tablea1_1 = [];
let tablea1_3 = [];
let tablea1_6 = [];
let tablea1_8 = [];
let tablea1_10 = [];
let tablea2_1 = [];
let tablea2_3 = [];
let tablea2_6 = [];
let tablea2_8 = [];
let tablea2_10 = [];
let tablea3_1 = [];
let tablea3_3 = [];
let tablea3_6 = [];
let tablea3_8 = [];
let tablea3_10 = [];
let tablea4_1 = [];
let tablea4_3 = [];
let tablea4_6 = [];
let tablea4_8 = [];
let tablea4_10 = [];
let tablea5_1 = [];
let tablea5_3 = [];
let tablea5_6 = [];
let tablea5_8 = [];
let tablea5_10 = [];
let tablea6_1 = [];
let tablea6_3 = [];
let tablea6_6 = [];
let tablea6_8 = [];
let tablea6_10 = [];
let tablea7_1 = [];
let tablea7_3 = [];
let tablea7_6 = [];
let tablea7_8 = [];
let tablea7_10 = [];

let tableData = [
  {
    jsxm: '无',
    jsmc: 'no',
    jssj: '00:00',
    kssj: '00:00',
    kkzc: '000000',
    kcsj: '000000',
    kcmc: '无课',
    sjbz: '0',
  },
];
// 创建主函数
class AppMain extends React.Component {
  constructor(props) {
    super(props);
    // Crawl();
    this.getAllData();
    this.state = {
      isloading: true,
      week: 1,
      index: 0,
      windowSize: 0,
      visible: false,
      user_id: '',
      password: '',
    };
  }

  // 事件挂载
  UNSAFE_componentWillMount() {
    this.setState({
      isloading: true,
    });
    this.getAllData();
  }

  UpdateAll = async () => {
    console.log('执行了UpdateAll');
    for (let i = 1; i < weekNum + 1; i++) {
      await this.GetTableCache(i);
    }

    this.forceUpdate();
  };

  GetTableCache = async id => {
    // console.log('执行了GetTableCache' + tableJson[id]);
    let id_d = '@' + id;
    let json = await getData(id_d);
    json = JSON.parse(json);
    tableJson[id] = json;
  };

  getAllData = async () => {
    try {
      // await Crawl();
      id = await AsyncStorage.getItem('studentid').catch(e => {
        console.log('读取学号失败' + e);
        showToast_Getfalse();
      });
      pwd = await AsyncStorage.getItem('password').catch(e => {
        console.log('读取密码失败' + e);
        showToast_Getfalse();
      });
      console.log('开始获取数据');
      weekNum = await AsyncStorage.getItem('weeknum').catch(e => {
        console.log('读取周数失败' + e);
      });
      semester = await AsyncStorage.getItem('sesmeter').catch(e => {
        console.log('读取学期失败' + e);
      });
      firstWeek = await AsyncStorage.getItem('begindate').catch(e => {
        console.log('读取学期开始失败' + e);
      });

      for (let r = 1; r <= weekNum; r++) {
        arrA[r] = {id: r};
      }
      let arr_1 = [];
      for (let i = 1; i < weekNum + 1; i++) {
        arr_1[i] = i;
      }
      let jsValue = [];
      let flag = 0;
      arr_1.forEach(async is => {
        flag = is;
        let id_o = '@' + is;
        jsValue[is] = await AsyncStorage.getItem(id_o).catch(e => {
          console.log('读取课表失败' + e);
        });
        tableData[is] = JSON.parse(jsValue[is]);
        let jf = JSON.parse(jsValue[is]);
      });

      setTimeout(() => {
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
        this.setState({isloading: false});
      }, 200);

      console.log('获取数据成功');
    } catch (e) {
      // error reading value
      console.log('读取失败' + e);
    }
  };
  /**
   * 查询课表
   * @param {int} 待查询的周数
   * @param {int} 待查询的星期几（天）
   * @param {int} 带查询的第几节课
   */

  QueryTable = (wk, wa, cn) => {
    wk = parseInt(wk);
    wa = parseInt(wa);
    cn = parseInt(cn);
    // console.log('执行了QueryTable' + tableData[wk]);
    let fdata = JSON.parse(tableData[wk]);
    let flag = true;
    let classInfo = [];

    fdata.forEach(n => {
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
        flag = true;

        classInfo[1] = n.kcmc; //课程名称
        classInfo[2] = n.jsmc; //教师名称
        classInfo[3] = n.kssj + '-' + n.jssj; //上课时间
        classInfo[4] = n.jsxm; //教室名称
        classInfo[5] = ks_2; //课程结束节数，第五节
        classInfo[6] = ks_3; //课程结束节数2，第四节
        classInfo[7] = ks_4; //课程结束节数3，连上时最后一节
        classInfo[0] = cn; //查询时间判定
        // console.log('找到课程' + classInfo);
        tableName = 'table' + wa + '_' + ks;
        if (wa == 1 && cn == 1) {
          // this.setState({
          //   table1_1: classInfo,
          // });
          tablea1_1 = classInfo;
          // console.log('Finding WA 1 CN 1' + classInfo);
          return classInfo;
        }
        if (wa == 1 && cn == 3) {
          // this.setState({
          //   table1_3: classInfo,
          // });
          tablea1_3 = classInfo;
          // console.log('Finding WA 1 CN 3' + classInfo);
          return classInfo;
        }
        if (wa === 1 && cn === 6) {
          // this.setState({
          //   table1_6: classInfo,
          // });
          tablea1_6 = classInfo;
          // console.log('Finding WA 1 CN 3');
          return classInfo;
        }
        if (wa === 1 && cn === 8) {
          // this.setState({
          //   table1_8: classInfo,
          // });
          tablea1_8 = classInfo;
          return classInfo;
        }
        if (wa === 1 && cn === 10) {
          // this.setState({
          //   table1_10: classInfo,
          // });
          tablea1_10 = classInfo;
          return classInfo;
        }
        if (wa === 2 && cn === 1) {
          // this.setState({
          //   table2_1: classInfo,
          // });
          tablea2_1 = classInfo;
          return classInfo;
        }
        if (wa === 2 && cn === 3) {
          // this.setState({
          //   table2_3: classInfo,
          // });
          tablea2_3 = classInfo;
          return classInfo;
        }
        if (wa === 2 && cn === 6) {
          // this.setState({
          //   table2_6: classInfo,
          // });
          tablea2_6 = classInfo;
          return classInfo;
        }
        if (wa === 2 && cn === 8) {
          // this.setState({
          //   table2_8: classInfo,
          // });
          tablea2_8 = classInfo;
          return classInfo;
        }
        if (wa === 2 && cn === 10) {
          // this.setState({
          //   table2_10: classInfo,
          // });
          tablea2_10 = classInfo;
          return classInfo;
        }
        if (wa === 3 && cn === 1) {
          // this.setState({
          //   table3_1: classInfo,
          // });
          tablea3_1 = classInfo;
          return classInfo;
        }
        if (wa === 3 && cn === 3) {
          // this.setState({
          //   table3_3: classInfo,
          // });
          tablea3_3 = classInfo;
          return classInfo;
        }
        if (wa === 3 && cn === 6) {
          // this.setState({
          //   table3_6: classInfo,
          // });
          tablea3_6 = classInfo;
          return classInfo;
        }
        if (wa === 3 && cn === 8) {
          // this.setState({
          //   table3_8: classInfo,
          // });
          tablea3_8 = classInfo;
          return classInfo;
        }
        if (wa === 3 && cn === 10) {
          // this.setState({
          //   table3_10: classInfo,
          // });
          tablea3_10 = classInfo;
          return classInfo;
        }
        if (wa === 4 && cn === 1) {
          // this.setState({
          //   table4_1: classInfo,
          // });
          tablea4_1 = classInfo;

          return classInfo;
        }
        if (wa === 4 && cn === 3) {
          // this.setState({
          //   table4_3: classInfo,
          // });
          tablea4_3 = classInfo;
          return classInfo;
        }
        if (wa === 4 && cn === 6) {
          // this.setState({
          //   table4_6: classInfo,
          // });
          tablea4_6 = classInfo;
          return classInfo;
        }
        if (wa === 4 && cn === 8) {
          // this.setState({
          //   table4_8: classInfo,
          // });
          tablea4_8 = classInfo;
          return classInfo;
        }
        if (wa === 4 && cn === 10) {
          // this.setState({
          //   table4_10: classInfo,
          // });
          tablea4_10 = classInfo;
          return classInfo;
        }
        if (wa === 5 && cn === 1) {
          // this.setState({
          //   table5_1: classInfo,
          // });
          tablea5_1 = classInfo;
          return classInfo;
        }
        if (wa === 5 && cn === 3) {
          // this.setState({
          //   table5_3: classInfo,
          // });
          tablea5_3 = classInfo;
          return classInfo;
        }
        if (wa === 5 && cn === 6) {
          // this.setState({
          //   table5_6: classInfo,
          // });
          tablea5_6 = classInfo;
          return classInfo;
        }
        if (wa === 5 && cn === 8) {
          // this.setState({
          //   table5_8: classInfo,
          // });
          tablea5_8 = classInfo;
          return classInfo;
        }
        if (wa === 5 && cn === 10) {
          // this.setState({
          //   table5_10: classInfo,
          // });
          tablea5_10 = classInfo;
          return classInfo;
        }
        if (wa === 6 && cn === 1) {
          // this.setState({
          //   table6_1: classInfo,
          // });
          tablea6_1 = classInfo;
          return classInfo;
        }
        if (wa === 6 && cn === 3) {
          // this.setState({
          //   table6_3: classInfo,
          // });
          tablea6_3 = classInfo;
          return classInfo;
        }
        if (wa === 6 && cn === 6) {
          // this.setState({
          //   table6_6: classInfo,
          // });
          tablea6_6 = classInfo;

          return classInfo;
        }
        if (wa === 6 && cn === 8) {
          // this.setState({
          //   table6_8: classInfo,
          // });
          tablea6_8 = classInfo;
          return classInfo;
        }
        if (wa === 6 && cn === 10) {
          // this.setState({
          //   table6_10: classInfo,
          // });
          tablea6_10 = classInfo;
          return classInfo;
        }
        if (wa === 7 && cn === 1) {
          // this.setState({
          //   table7_1: classInfo,
          // });
          tablea7_1 = classInfo;
          return classInfo;
        }
        if (wa === 7 && cn === 3) {
          // this.setState({
          //   table7_3: classInfo,
          // });
          tablea7_3 = classInfo;
          return classInfo;
        }
        if (wa === 7 && cn === 6) {
          // this.setState({
          //   table7_6: classInfo,
          // });
          tablea7_6 = classInfo;
          return classInfo;
        }
        if (wa === 7 && cn === 8) {
          // this.setState({
          //   table7_8: classInfo,
          // });
          tablea7_8 = classInfo;
          return classInfo;
        }
        if (wa === 7 && cn === 10) {
          // this.setState({
          //   table7_10: classInfo,
          // });
          tablea7_10 = classInfo;
          return classInfo;
        }
        return classInfo;
        table_1 = classInfo;
      }
    });
    if (flag === false) {
      tableName = 'table' + wa + '_' + cn;
      classInfo[1] = '无'; //课程名称
      classInfo[2] = '无'; //教师名称
      classInfo[3] = '000000'; //上课时间
      classInfo[4] = '000000'; //教室名称
      classInfo[5] = 0; //课程结束节数，第五节
      classInfo[6] = 0; //课程结束节数2，第四节
      classInfo[7] = 0; //课程结束节数3，连上时最后一节
      classInfo[0] = 0; //查询时间判定
      this.setState({
        table: classInfo,
      });
      return classInfo;
    }
  };
  // _showLoading() {
  //   //EasyLoading.show();//显示
  //   //EasyLoading.dimiss();//关闭
  //   //自定义文本和超时时间
  //   EasyLoading.show('加载中...', 2000);
  // }
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
    const lineheight = Dimensions.get('window').height * 0.058;
    // 左侧课程序号组件
    const Pitem = ({item}) => {
      return (
        <View>
          <Text
            style={{
              lineHeight: lineheight,
              marginLeft: 2,
              color: 'rgba(78, 116, 289, 1)',
            }}>
            {item.id}
          </Text>
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

    const PreviewLayout = ({children, values}) => (
      <View style={{padding: 10, height: 50, backgroundColor: '#4099FF'}}>
        <View style={styles.row}>
          {/* <TouchableOpacity style={[styles.button]}>
            <Icon name="calendar" type="evilicon" color="white" />
          </TouchableOpacity> */}
          <TouchableOpacity style={[styles.button]} onPress={this.UpdateAll}>
            <Icon name="arrow-down" type="evilicon" color="white" />
          </TouchableOpacity>
          {/* <TouchableOpacity style={[styles.button]}>
            <Icon name="gear" type="evilicon" color="white" />
          </TouchableOpacity> */}
        </View>
        <View style={[styles.container]}>{children}</View>
      </View>
    );
    let isloading = this.state.isloading;

    // 主课表区域组件
    const MainView = table => {
      const ColWidth = '14.3%';
      let Loadings = this.state.isloading;

      if (Loadings) {
        return (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Loading!</Text>
          </View>
        );
      } else {
        return (
          <View
            style={{
              backgroundColor: '#eff6ff',
              height: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            {/* <Loading /> */}

            <View
              style={{
                width: 30,
                position: 'relative',
                float: 'left',
                // display: 'inline-block',
              }}>
              <Icon
                style={{height: 22, width: 22, marginTop: 5}}
                name="trophy"
                type="evilicon"
                color="rgba(78, 116, 289, 1)"
              />
              {/* <Text style={{height: 30, marginTop: 5}}>\</Text> */}
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
                <Witem name="周一" wk={ThisWeek} nub={1} />
                <ClassTableItem classInfo={tablea1_1} />
                <ClassTableItem classInfo={tablea1_3} type={3} />
                <ClassTableItem classInfo={tablea1_6} />
                <ClassTableItem classInfo={tablea1_8} />
                <ClassTableItem classInfo={tablea1_10} />
              </View>
              <View style={{float: 'left', width: ColWidth}}>
                <Witem name="周二" wk={ThisWeek} nub={2} />
                <ClassTableItem classInfo={tablea2_1} />
                <ClassTableItem classInfo={tablea2_3} type={3} />
                <ClassTableItem classInfo={tablea2_6} />
                <ClassTableItem classInfo={tablea2_8} />
                <ClassTableItem classInfo={tablea2_10} />
              </View>
              <View style={{float: 'left', width: ColWidth}}>
                <Witem name="周三" wk={ThisWeek} nub={3} />
                <ClassTableItem classInfo={tablea3_1} />
                <ClassTableItem classInfo={tablea3_3} type={3} />
                <ClassTableItem classInfo={tablea3_6} />
                <ClassTableItem classInfo={tablea3_8} />
                <ClassTableItem classInfo={tablea3_10} />
              </View>
              <View style={{float: 'left', width: ColWidth}}>
                <Witem name="周四" wk={ThisWeek} nub={4} />
                <ClassTableItem classInfo={tablea4_1} />
                <ClassTableItem classInfo={tablea4_3} type={3} />
                <ClassTableItem classInfo={tablea4_6} />
                <ClassTableItem classInfo={tablea4_8} />
                <ClassTableItem classInfo={tablea4_10} />
              </View>
              <View style={{float: 'left', width: ColWidth}}>
                <Witem name="周五" wk={ThisWeek} nub={5} />
                <ClassTableItem classInfo={tablea5_1} />
                <ClassTableItem classInfo={tablea5_3} type={3} />
                <ClassTableItem classInfo={tablea5_6} />
                <ClassTableItem classInfo={tablea5_8} />
                <ClassTableItem classInfo={tablea5_10} />
              </View>
              <View style={{float: 'left', width: ColWidth}}>
                <Witem name="周六" wk={ThisWeek} nub={6} />
                <ClassTableItem classInfo={tablea6_1} />
                <ClassTableItem classInfo={tablea6_3} type={3} />
                <ClassTableItem classInfo={tablea6_6} />
                <ClassTableItem classInfo={tablea6_8} />
                <ClassTableItem classInfo={tablea6_10} />
              </View>
              <View style={{float: 'left', width: ColWidth}}>
                <Witem name="周日" wk={ThisWeek} nub={7} />
                <ClassTableItem classInfo={tablea7_1} />
                <ClassTableItem classInfo={tablea7_3} type={3} />
                <ClassTableItem classInfo={tablea7_6} />
                <ClassTableItem classInfo={tablea7_8} />
                <ClassTableItem classInfo={tablea7_10} />
              </View>
            </View>
          </View>
        );
      }
    };
    if (isloading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            color: 'deepskyblue',
            alignItems: 'center',
            backgroundColor: '#eff6ff',
          }}>
          <ActivityIndicator size="large" color="rgba(78, 116, 289, 1)" />
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
            林棵
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'rgba(78, 116, 289, 1)',
            }}>
            LinClass
          </Text>

          <Text
            style={{
              fontSize: 15,
              fontWeight: 'thin',
              color: 'black',
            }}>
            {/* <Icon name="sc-github" type="evilicon" color="black" /> */}
            github/inannan423 | Jetzihan
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: 'bold',
              color: 'black',
            }}>
            初次进入请先填写信息
          </Text>
        </View>
      );
    } else {
      return (
        <TailwindProvider utilities={utilities}>
          {/* <NavigationContainer> */}
          <Tab.Navigator
            initialRouteName={'第' + week + '周'}
            screenOptions={{
              tabBarScrollEnabled: true,
              tabBarItemStyle: {
                width: 70,
                height: 50,
                backgroundColor: 'rgba(78, 116, 289, 1)',
              },
              tabBarStyle: {
                backgroundColor: 'powderblue',
                // marginBottom: 5,
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
                // console.log('state changed', e.data.state.index);
                // if (fga === 0) {
                //   showToast();
                // }
                // fga = 0;
                ThisWeek = e.data.state.index + 1;
                tablea1_1 = [];
                tablea1_3 = [];
                tablea1_6 = [];
                tablea1_8 = [];
                tablea1_10 = [];
                tablea2_1 = [];
                tablea2_3 = [];
                tablea2_6 = [];
                tablea2_8 = [];
                tablea2_10 = [];
                tablea3_1 = [];
                tablea3_3 = [];
                tablea3_6 = [];
                tablea3_8 = [];
                tablea3_10 = [];
                tablea4_1 = [];
                tablea4_3 = [];
                tablea4_6 = [];
                tablea4_8 = [];
                tablea4_10 = [];
                tablea5_1 = [];
                tablea5_3 = [];
                tablea5_6 = [];
                tablea5_8 = [];
                tablea5_10 = [];
                tablea6_1 = [];
                tablea6_3 = [];
                tablea6_6 = [];
                tablea6_8 = [];
                tablea6_10 = [];
                tablea7_1 = [];
                tablea7_3 = [];
                tablea7_6 = [];
                tablea7_8 = [];
                tablea7_10 = [];
                // this.forceUpdate();
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
                this.setState({
                  week: e.data.state.index + 1,
                });
                // this._showLoading();
              },
            }}>
            {arrA.map(v => (
              <Tab.Screen
                name={'第' + v.id + '周'}
                component={MainView}
                key={v.id}
                options={{
                  // 解决过慢问题
                  lazy: true,
                }}
                listeners={{
                  tabPress: e => {
                    showToast();
                    fga = 1;
                  },
                }}
              />
            ))}
          </Tab.Navigator>
          {/* <Toast /> */}
          {/* <PreviewLayout values={['更新', '设置', '课表']}></PreviewLayout> */}
        </TailwindProvider>
      );
    }
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
  // console.log('爬虫开始' + id + ' ' + pwd);
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
    // console.log(rep);
    let res = JSON.parse(this.responseText);
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
    showToast_Error();
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

const showToast = () => {
  Toast.show({
    type: 'info',
    text1: 'LOADING',
    text2: '疯狂加载中🚀🚀',
    visibilityTime: 50,
  });
};
const showToast_Getfalse = () => {
  Toast.show({
    type: 'error',
    text1: '课表获取失败',
    text2: '请检查信息是否正确',
    visibilityTime: 4000,
  });
};

const showToast_1 = () => {
  Toast.show({
    type: 'info',
    text1: '保存成功',
    text2: '该信息已保存在本地缓存，不会被上传到网络🔐',
    visibilityTime: 4000,
  });
};

const showToast_Error = () => {
  Toast.show({
    type: 'success',
    text1: '读取成功！请关闭后台重启APP',
    text2: '课表刷新成功，重启应用后就可以正常使用了🎉🎉',
    visibilityTime: 10000,
  });
};

const showToast_Share = () => {
  Toast.show({
    type: 'success',
    text1: '分享！',
    text2: '感谢分享！🎉🎉',
    visibilityTime: 4000,
  });
};

const showToast_False = () => {
  Toast.show({
    type: 'error',
    text1: '分享失败',
    text2: '都点开了，还不分享？🤔🤔',
    visibilityTime: 4000,
  });
};

function ClassTableItem(props) {
  const tailwind = useTailwind();
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
        (props.classInfo[7] === 4 && props.classInfo[0] === 3) ||
        (props.classInfo[7] === 9 && props.classInfo[0] === 8)
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
    backgroundColor: 'rgba(78, 116, 289, 1)',
    borderColor: 'rgba(78, 101, 255, 1)',
    borderWidth: 2,
    display: 'flex',
    justifyContent: 'center',
    margin: 1.5,
  },
  item_1: {
    width: ScreenWidth / 7.8,
    height: ScreenHeight * 0.17,
    padding: 5,
    borderRadius: 11,
    backgroundColor: 'rgba(78, 116, 289, 1)',
    borderColor: 'rgba(78, 101, 255, 1)',
    borderWidth: 2,
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
    backgroundColor: 'rgba(78, 116, 289, 1)',
    borderColor: 'rgba(78, 101, 255, 1)',
    borderWidth: 2,
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
  // button: {
  //   paddingHorizontal: 8,
  //   paddingVertical: 6,
  //   borderRadius: 4,
  //   // backgroundColor: '#2A82E4',
  //   alignSelf: 'center',
  //   marginHorizontal: '1%',
  //   marginBottom: 1,
  //   minWidth: '100%',
  //   textAlign: 'center',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   color: 'white',
  // },
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

function SettingsScreen() {
  const [studentid, setStudentid] = useState('12345');
  const [password, setPassword] = useState('12345');
  const [begindate, setBegindate] = useState('2022-08-27');
  const [weeknum, setWeeknum] = useState('18');
  const [sesmeter, setSesmeter] = useState('2022-2023-1');
  const WriteBeginDate = async () => {
    try {
      showToast_1();
      let dataid = 'begindate';
      await AsyncStorage.setItem(dataid, begindate);
      dataid = 'weeknum';
      await AsyncStorage.setItem(dataid, weeknum);
      dataid = 'studentid';
      await AsyncStorage.setItem(dataid, studentid);
      dataid = 'password';
      await AsyncStorage.setItem(dataid, password);
      dataid = 'sesmeter';
      await AsyncStorage.setItem(dataid, sesmeter);
    } catch (e) {
      console.log('存储失败' + e);
    }
  };
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            backgroundColor: '#eff6ff',
            width: '100%',
          }}
          alwaysBounceHorizontal="true">
          <Input
            placeholder="输入学号"
            leftIcon={{
              type: 'evilicon',
              name: 'user',
              color: 'rgba(78, 116, 289, 1)',
            }}
            style={{fontSize: 12}}
            containerStyle={{
              width: '95%',
              // backgroundColor: 'rgba',
              marginTop: 10,
              color: 'white',
            }}
            label="常规"
            labelStyle={{color: 'rgba(78, 116, 289, 1)'}}
            onChangeText={value => setStudentid(value)}
            // inputContainerStyle={{color: '#fff'}}
            // onChangeText={value => this.setState({user_id: value})}
          />
          <Input
            placeholder="输入密码"
            leftIcon={{
              type: 'evilicon',
              name: 'lock',
              color: 'rgba(78, 116, 289, 1)',
            }}
            style={{fontSize: 12}}
            containerStyle={{width: '95%'}}
            // onChangeText={value => this.setState({password: value})}
            secureTextEntry={true}
            onChangeText={value => setPassword(value)}
          />
          <Text
            style={{
              fontSize: 12,
              width: '90%',
            }}>
            *所有数据都存储在您手机本地，不会上传到网络，也不会泄露给第三方，开发者也无从知晓，请放心使用，使用本APP即代表你授权林棵使用以上信息，林棵只在查课时使用教务系统API时调用这些数据，没有其他任何接口。填写完成后请点击保存按钮，并点击刷新课表。
          </Text>
          <Input
            placeholder="学期开始日期，格式：2022-08-27"
            leftIcon={{
              type: 'evilicon',
              name: 'clock',
              color: 'rgba(78, 116, 289, 1)',
            }}
            style={{fontSize: 12}}
            containerStyle={{
              width: '95%',
              // backgroundColor: 'rgba',
              marginTop: 10,
              color: 'white',
            }}
            label="学期信息"
            labelStyle={{color: 'rgba(78, 116, 289, 1)'}}
            onChangeText={value => setBegindate(value)}
          />
          <Input
            placeholder="当前学期，格式:2022-2023-1"
            leftIcon={{
              type: 'evilicon',
              name: 'paperclip',
              color: 'rgba(78, 116, 289, 1)',
            }}
            style={{fontSize: 12}}
            containerStyle={{
              width: '95%',
              // backgroundColor: 'rgba',
              color: 'white',
            }}
            onChangeText={value => setSesmeter(value)}
          />
          <Input
            placeholder="学期周数，例：18"
            leftIcon={{
              type: 'evilicon',
              name: 'chart',
              color: 'rgba(78, 116, 289, 1)',
            }}
            style={{fontSize: 12}}
            containerStyle={{
              width: '95%',
              // backgroundColor: 'rgba',
              color: 'white',
            }}
            onChangeText={value => setWeeknum(value)}
          />
          <View
            style={{
              width: '80%',
            }}>
            <Button
              title="保存"
              type="outline"
              buttonStyle={{
                borderColor: 'rgba(78, 116, 289, 1)',
              }}
              titleStyle={{color: 'rgba(78, 116, 289, 1)'}}
              containerStyle={{
                width: '100%',
              }}
              onPress={() => {
                WriteBeginDate();
              }}
            />
            <Button
              title="刷新课表"
              // type="outline"
              buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                // borderColor: 'rgba(78, 116, 289, 1)',
                marginTop: 10,
              }}
              titleStyle={{color: 'white'}}
              containerStyle={{
                width: '100%',
              }}
              onPress={() => {
                // AppMain.forceUpdate();
                Crawl();
              }}
            />
            <Button
              title="分享"
              // type="outline"
              buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                // borderColor: 'rgba(78, 116, 289, 1)',
                marginTop: 10,
              }}
              titleStyle={{color: 'white'}}
              containerStyle={{
                width: '100%',
              }}
              onPress={async () => {
                // AppMain.forceUpdate();
                onShare();
              }}
            />
            <Button
              title="开源仓库"
              // type="outline"
              buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                // borderColor: 'rgba(78, 116, 289, 1)',
                marginTop: 10,
              }}
              titleStyle={{color: 'white'}}
              containerStyle={{
                width: '100%',
              }}
              onPress={() => {
                // AppMain.forceUpdate();
                Clipboard.setString('https://github.com/inannan423/LindaTool');
              }}>
              <Icon name="sc-github" type="evilicon" color="white" />
              复制仓库地址
            </Button>
          </View>

          <Text
            style={{
              fontSize: 12,
              width: '90%',
              marginTop: 10,
            }}>
            *本软件仅供开源学习使用，任何恶意使用与本人无关。源代码已开源，欢迎大家star和贡献。
          </Text>
          <Text
            style={{
              fontSize: 12,
              width: '90%',
              marginTop: 20,

              textAlign: 'center',
              color: 'black',
            }}>
            林棵 | LinClass By Jetzh
          </Text>
          <Text
            style={{
              fontSize: 12,
              width: '90%',
              textAlign: 'center',
              color: 'black',
              marginBottom: 20,
            }}>
            Powered by React Native
          </Text>
        </ScrollView>
      </SafeAreaView>
      {/* <Toast /> */}
    </>
  );
}

const onShare = async () => {
  try {
    const result = await Share.share({
      message: '林棵 LinClass | 手机桌面端北林课表,下载地址:',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        showToast_Share();
      } else {
        showToast_Share();
        // showToast_False();
      }
    } else if (result.action === Share.dismissedAction) {
      showToast_False();
    }
  } catch (error) {
    alert(error.message);
  }
};

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,

        tabBarStyle: {backgroundColor: 'rgba(78, 116, 289, 1)'},
        // tabBarLabel: {color: 'white'},
        tabBarLabelStyle: {color: 'white'},
        tabBarLabelPosition: 'beside-icon',
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="calendar" type="evilicon" color="white" />
          ),
        }}
        name="课表"
        component={AppMain}
      />
      <Tab.Screen
        name="设置"
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="gear" type="evilicon" color="white" />
          ),
          headerTitle: '林棵 LinClass',
          headerTintColor: 'white',
          headerStyle: {
            height: 50,
            backgroundColor: 'rgba(78, 116, 289, 1)',
          },
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

// export default App;

export default function App() {
  return (
    <>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
      <Toast />
    </>
  );
}
