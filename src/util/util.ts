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
