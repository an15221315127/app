import { AsyncStorage } from "react-native"


/**
 * 保存数据
 * @param key
 * @param value
 */
export const setItem =async (key:string,value:any)=>{
    try {
      typeof value === 'object' ? value = JSON.stringify(value) :value;
      await AsyncStorage.setItem(key, value);
      return 1;
    } catch (error) {
      // Error saving data
      typeof error === 'string' ? console.log(error) : console.log(JSON.stringify(error));
    }
    return 0;
}

/**
 * 获取数据
 * @param key
 */
export const getItem =async (key:string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
     return value;
    }
  } catch (error) {
    // Error retrieving data
    typeof error === 'string' ? console.log(error) : console.log(JSON.stringify(error));
  }

}

/**
 * 删除数据
 * @param key
 */
export const removeItem = async (key:string)=>{
  try {
    const data =await AsyncStorage.removeItem(key);
  } catch (error) {

    typeof error === 'string' ? console.log(error) : console.log(JSON.stringify(error));
  }
}
/**
 * 清除所有数据
 */
export const clearBoth =async () =>{
  try {
    await AsyncStorage.clear();
  } catch (error) {

    typeof error === 'string' ? console.log(error) : console.log(JSON.stringify(error));
  }
}
/**
 * 获取所有保存的keys
 */
export const getAllKeys = async () => {
    try {
      const allKey =await AsyncStorage.getAllKeys();
      return allKey;
    } catch (error) {
      return null;
    }
}
