export const multiSelectChecked = (array, name) => {
    const checked = array.includes(name)
    console.log(checked, name, array)
    let newArray = []
    if(checked){
        newArray = array.filter(item => item !== name)
    } else {
        newArray = [...array, name]
    }

    return newArray
}