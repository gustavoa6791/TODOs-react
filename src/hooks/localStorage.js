import React from "react"

function useLocalStorage(itemName, itemValue) {
    
    const localStorageItem = localStorage.getItem(itemName)
    let itemFormat = itemValue

    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(itemValue))
    } else {
        itemFormat = JSON.parse(localStorageItem)
    }

    const [item, setItem] = React.useState(itemFormat)

    function saveItem(newItem) {
        const itemJson = JSON.stringify(newItem)
        localStorage.setItem(itemName, itemJson)
        setItem(newItem)
    }

    return [item, saveItem]
}

export default useLocalStorage

