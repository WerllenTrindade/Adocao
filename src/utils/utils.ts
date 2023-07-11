import { ActivityIndicator, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../theme';

export const formatNumber = (amount: any, decimalCount = 2, decimal = ",", thousands = ".") => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i: any = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e)
  }
};

export function formatText(text: string){
  const resultado = text.length > 25 ? text.substring(0, 25) + "..." : text

  return resultado
}

export function generateGuid() {

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

export function maskCurrency(value : string) {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  return value;
}

export function formatDate(data: any){
    let date = new Date(data);
    
    let options: any = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };

    return date.toLocaleDateString('pt-BR', options);
}

export function isEmpty(value: string){
  return value.trim() === '';
} 

export function isNullOrEmpty(valor: any) {

  return valor === '' || valor === null || valor === undefined || valor.length === 0
}


export function removeSpecialCaracter(string: string) {

  return string.replace(/[^a-zA-Z0-9]/g, '');
}


export const ios_android = (ios: number, android: number) => Platform.OS == 'ios' ? RFValue(ios) : RFValue(android)
