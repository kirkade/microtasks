import React, {useState} from 'react';
import {NewComponent} from "./03_useState/NewComponent";

export type FilterType = 'All' | 'Dollars' | 'Rubles'

function App() {

    const money = [
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'Rubles', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'Rubles', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'Rubles', value: 50, number: ' v1234567890'},
    ]

    const [filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money;

    if (filter === 'Rubles') {
        currentMoney = money.filter(item=> item.banknots === filter)
    }

    if (filter === 'Dollars') {
        currentMoney = money.filter(item => item.banknots === filter)
    }

    const onClickFilterHandler = (banknots: FilterType) => {
        setFilter(banknots)
    }

    return (
        <NewComponent money={currentMoney} callback={onClickFilterHandler}/>
    )

}

export default App;


// <div>
//     <ul>
//         {currentMoney.map((obj, index) => {
//             return (
//                 <li key={index}>
//                     <span>{obj.banknots} </span>
//                     <span>{obj.value} </span>
//                     <span>{obj.number}   </span>
//                 </li>
//             )
//         })}
//     </ul>
//     <div>
//         <button onClick={() => onClickFilterHandler('All')}>All</button>
//         <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
//         <button onClick={() => onClickFilterHandler('Rubles')}>Rubles</button>
//     </div>
// </div>