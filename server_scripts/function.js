function getGradientColor(value) {
    if (value < 0 || value > 5) {
        throw new Error('Value must be between 0 and 5');
    }

    // 线性插值计算红色和绿色的强度
    const red = Math.min(255, Math.floor(255 * value / 5));
    const green = Math.min(255, Math.floor(255 * (1 - value / 5)));

    // 将RGB值转换为十六进制代码
    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');

    return `#${redHex}${greenHex}00`; // 固定蓝色分量为0
}

function between(x,num1,num2) {//判断一个数是否在两个数之间的函数
    return (x <= num1 && x>=num2)
}
