const format = (date, fmt) => {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
        }
    }
    return fmt
}

function padLeftZero(str) {
    return ('00' + str).substr(str.length)
}
//格式化日期
export const formatDate = (time = "0000000000000", type = 1) => {
    if (time == '' || time == null || time == undefined) return '';
    if (typeof time === 'string') time = parseInt(time)
    let date = new Date(time);
    if (type === 1) {
        //默认
        return format(date, 'yyyy-MM-dd hh:mm:ss')
    } else if (type === 2) {
        //自主选择
        return format(date, 'yyyy-MM-dd')
    }

}
//格式化金额
export const price = value => {
    if (!value) return '0.00';
    const _value = parseFloat(value);
    if (isNaN(_value)) return value;
    return _value.toFixed(2);
}

//格式化时间日期取值(日期 无时分秒)
export const formatTime = time => {
    if (time == '' || time == null || time == undefined) return '';
    if (typeof time === 'string') time = parseInt(time)
    let date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    return year + '-' + month + '-' + day;
}

//格式化距离
export const toKm = value => {
    if (value === undefined || value === null) {
        return;
    }
    value = Number(value)
    if (value > 1000) {
        if (value <= 60000) {
            return Number(value / 1000).toFixed(2) + 'km';
        } else {
            return ''
        }
    } else {
        return value.toFixed(0) + 'm';
    }
}