import Vue from 'vue'

import VeeValidate, {Validator} from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN';//引入中文文件

// 配置中文
Validator.addLocale(zh);

const config = {
  locale: 'zh_CN'
};

Vue.use(VeeValidate,config);

// 自定义validate
// const dictionary = {
//   zh_CN: {
//     messages: {
//       username: () => '请输入正确的用户名',
//       required: ( field )=> "请输入" + field
//     },
//     attributes:{
//       username:'用户名',
//       password:'密码',
//       name: '账号',
//     }
//   }
// };

// Validator.updateDictionary(dictionary);

Validator.extend('phone', {
  messages: {
    zh_CN:field => field ,
  },
  validate: value => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
});
