import {observable} from 'mobx';

/**
 * 用户信息
 */
class Setting {
  @observable background = '#000000';
}

export default new Setting();
