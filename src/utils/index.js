// 判断参数是否是其中之一
export function oneOf(value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}

export function getIconNum() {
    let array = []
    for (let i = 1; i++; i <= 15) {
        array.push("icon" + i)
    }
    return array
}