import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// 以下为语言包单独设置的场景，单独设置时语言包需单独引入
const messages = {
    'zh-cn': require('./zh_sg.ts'),   // 中文语言包
    'en-us': require('./en.ts'),    // 英文语言包
    'ja-jp': require('./jp.ts'), // 日文语言包
    'ko-kr': require('./kr.ts'),// 韩文语言包

}

// 最后 export default，这一步肯定要写的。
export default new VueI18n({
    locale : 'en-us', // set locale 默认显示英文
    messages : messages // set locale messages
})

