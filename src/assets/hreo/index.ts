/**
 * 定义 type：1为战士，2为刺客，3为法师，4为射手5为辅助
 */
const HreoList = [
    {
        id:0,
        type:[1,2,],
        tit:'疾风剑豪',
        url:require('../../assets/icon/Heros/yasuo.jpeg')
    },
    {
        id:1,
        type:[1,2,],
        tit:'影流之主',
        url:require('../../assets/icon/Heros/jie.jpeg'),
        story:'',
    },
    {
        id:2,
        tit:'至高之拳',
        type:[1],
        url:require('../../assets/icon/Heros/mangseng.jpeg')
    },
    {
        id:3,
        tit:'放逐之刃',
        type:[1],
        url:require('../../assets/icon/Heros/ruiwen.jpeg')
    },
    {
        id:4,
        type:[3],
        tit:'沙漠皇帝',
        url:require('../../assets/icon/Heros/shahuang.jpeg')
    },
    {
        id:5,
        type:[4],
        tit:'荣耀行刑官',
        url:require('../../assets/icon/Heros/delaiwen.jpg')
    },
    {
        id:6,
        type:[4],
        tit:'伊泽瑞尔',
        url:require('../../assets/icon/Heros/ez.jpeg')
    },
    {
        id:7,
        type:[5],
        tit:'曙光女神',
        url:require('../../assets/icon/Heros/rinv.jpeg')
    },
    {
        id:8,
        type:[5],
        tit:'魂锁典狱长',
        url:require('../../assets/icon/Heros/chuishi.jpeg')
    },
]

export default HreoList;
