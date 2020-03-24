'use strict';
import {
    post,
} from '@/util/service';

/**
 * 注册账户
 * @param params
 * @constructor
 */
export const Register = (params:object) =>post('common/register',params);
/**
 * 退出登陆
 * @param params
 * @constructor
 */
export const logout = (params:object) =>post('common/logout',params);

/**
 * 邮箱验证码
 * @param params
 * @constructor
 */
export const EmailCode = (params:object) =>post('common/emailCode',params);

/**
 * 登陆
 * @param params
 * @constructor
 */
export const Login = (params:object) =>post('common/login',params);

/**
 * 首页
 * @param params
 * @constructor
 */
export const Index = () =>post('common/index',{});

/**
 * 币种查找
 * @param params
 * @constructor
 */
export const symbolList = (params:object) =>post('common/coinType',params);

/**
 * 云算力机器配置
 * @param params
 * @constructor
 */
export const Config = (params:object) =>post('miner/config',params);

/**
 * 云算力详情
 * @param params
 * @constructor
 */
export const productInfo = (params:object) =>post('miner/info',params);


/**
 * 我的收益
 * @param params
 * @constructor
 */
export const myRecord = (params:object) =>post('user/profit',params);

/**
 * 我的云算力
 * @param params
 * @constructor
 */
export const myMiner = (params:object) =>post('user/miner',params);

/**
 * 云算力购买
 * @param params
 * @constructor
 */
export const Buy = (params:object) =>post('miner/buy',params);

/**
 * 我的BTC云算力 简显
 * @param params
 * @constructor
 */
export const minerSum = (params:object) =>post('user/minerSum',params);

/**
 * 云算力列表
 * @param params
 * @constructor
 */
export const MinerIndex = (params:object) =>post('miner/index',params);

/**
 * 余额显示
 * @param params
 * @constructor
 */
export const wallet = (params:object) =>post('wallet/withdraw',params);

/**
 * 币种余额
 * @param params
 * @constructor
 */
export const WalletList = (params:object) =>post('wallet/index',params);

/**
 * 提现
 * @param params
 * @constructor
 */
export const doWithdraw = (params:object) =>post('wallet/doWithdraw',params);

/**
 * 提现记录
 * @param params
 * @constructor
 */
export const withdrawRecord = (params:object) =>post('wallet/withdrawRecord',params);


/**
 * 检查是否有支付密码
 * @param params
 * @constructor
 */
export const payPassword = (params:object) =>post('user/payPassword',params);

/**
 * 修改支付密码
 * @param params
 * @constructor
 */
export const changePayPassword = (params:object) =>post('user/changePayPassword',params);

/**
 * 修改密码
 * @param params
 * @constructor
 */
export const changePassword = (params:object) =>post('user/changePassword',params);

/**
 * 支付方式选择
 * @param params
 * @constructor
 */
export const choose = (params:object) =>post('order/choose',params);
/**
 * 电量使用情况
 * @param params
 * @constructor
 */
export const electricity = () =>post('electricity/record',{});

/**
 * 电力余额
 * @param params
 * @constructor
 */
export const PowerBalance = () =>post('electricity/index',{});

/**
 * 当前电费价格
 * @param params
 * @constructor
 */
export const electricityPrice = () =>post('electricity/price',{});

/**
 * 电费充值
 * @param params
 * @constructor
 */
export const ElectricityCharge = (num:number) =>post('electricity/buy',{num});

/**
 * 订单列表
 * @param params
 * @constructor
 */
export const orderList = (params:object) =>post('order/index',params);

/**
 * 获取订单可支付币种
 * @param params
 * @constructor
 */
export const orderCurrency = (params:object) =>post('order/currency',params);

/**
 * 订单选择
 * @param params
 * @constructor
 */
export const orderChoose = (params:object) =>post('order/choose',params);

/**
 * 取消订单
 * @param params
 * @constructor
 */
export const cancel = (params:object) =>post('order/cancel',params);

/**
 * 会员列表+当前等级
 * @param params
 * @constructor
 */
export const VipList = (params:object) =>post('member/index',params);
/**
 * 会员购买
 * @param params
 * @constructor
 */
export const VipBuy = (params:object) =>post('member/buy',params);

/**
 * 租赁归还
 * @param params
 * @constructor
 */
export const redeem = (params:object) =>post('miner/redeem',params);

/**
 * 团队信息
 * @param params
 * @constructor
 */
export const TeamMessage = (params:object) =>post('user/team',params);

/**
 * 我的收益记录
 * @param params
 * @constructor
 */
export const profitRecord = (params:object) =>post('user/profitRecord',params);

/**
 * 我的算力产品收益记录
 * @param params
 * @constructor
 */
export const minerRecord = (params:object) =>post('user/minerRecord',params);

/**
 * 兑换
 * @param params
 * @constructor
 */
export const InstantExchange = (params:object) =>post('swap/InstantExchange',params);


/**
 * 兑换列表
 * @param params
 * @constructor
 */
export const swapIndex = (params:object) =>post('swap/index',params);
/**
 * 我的等级
 * @param params
 * @constructor
 */
export const grade = (params:object) =>post('user/grade',params);


/**
 * 我的邀请
 * @param params
 * @constructor
 */
export const myInvite = (params:object) =>post('user/invite',params);

/**
 * 转账页面信息
 * @param params
 * @constructor
 */
export const transferConfig = (params:object) =>post('wallet/transferConfig',params);

/**
 * 转账
 * @param params
 * @constructor
 */
export const transfer = (params:object) =>post('wallet/transfer',params);

/**
 * 我的收款码
 * @param params
 * @constructor
 */
export const paymenCode = (params:object) =>post('wallet/paymenCode',params);

/**
 * 密码支付
 * @param params
 * @constructor
 */
export const pay_password = (params:object) =>post('order/pay',params);

/**
 * 会员试用
 * @param params
 * @constructor
 */
export const onTrial = (params:object) =>post('member/onTrial',params);


/**
 * 转账记录
 * @param params
 * @constructor
 */
export const transferRecord = (params:object) =>post('wallet/transferRecord',params);
