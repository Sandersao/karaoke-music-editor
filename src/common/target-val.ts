export function targetVal(target?: EventTarget){
    if(!target){
        return null
    }
    const value = (target as HTMLInputElement).value
    if(value === undefined){
        return null
    }
    if(value === ''){
        return null
    }
    return value
}