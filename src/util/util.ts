/**
 *
 * 验证邮箱
 * @export
 * @param {number} email - 邮箱地址 - 例：1000@qq.com
 * @returns {boolean} - 返回判断结果
 */
export function emailCheck(email: string): boolean {
  const emailReg: any = /^([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
  if (!emailReg.test(email)) {
    return false;
  } else {
    return true;
  }
}

/**
 * 数字转时间
 * @param num
 * @constructor
 */
export function NumToTime(num: number) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let currentTime = '00:00';
  let seconds = num % 60;
  let minutes = parseInt(String(num / 60));
  currentTime = `${minutes > 10 ? minutes : `0${minutes}:`}${
    seconds > 10 ? seconds : `0${seconds}`
  }`;
  return currentTime;
}
