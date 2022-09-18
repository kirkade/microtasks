import React, {useState} from 'react';
import {NewComponent} from "./03_useState/NewComponent";

export type FilterType = 'All' | 'Rubles' | 'Dollars'


const App = () => {

    const money = [
        {currency: 'Dollars', value: 100, number: ' a1234567890'},
        {currency: 'Dollars', value: 50, number: ' z1234567890'},
        {currency: 'Rubles', value: 100, number: ' w1234567890'},
        {currency: 'Dollars', value: 100, number: ' e1234567890'},
        {currency: 'Dollars', value: 50, number: ' c1234567890'},
        {currency: 'Rubles', value: 100, number: ' r1234567890'},
        {currency: 'Dollars', value: 50, number: ' x1234567890'},
        {currency: 'Rubles', value: 50, number: ' v1234567890'},
    ]

    let [filter, setFIlter] = useState<FilterType>('All')

    let currentMoney = money;

    if (filter === 'Rubles') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.currency === 'Rubles')
    }

    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.currency === 'Dollars')
    }

    const onClickFilterHandler = (currency: FilterType) => {
        setFIlter(currency)
    }

    return (
        <div>
            <NewComponent filteredMoney={currentMoney} callback={onClickFilterHandler}/>
        </div>
    )
}
export default App
