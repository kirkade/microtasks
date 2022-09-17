import React from "react";

import {FilterType} from "../App";

type NewComponentType = {
    money: Array<MoneyArray>
    callback: (banknots: FilterType) => void
}

type MoneyArray = {
    banknots: string,
    value: number,
    number: string,
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            <ul>
                {props.money.map((obj, index) => {
                    return (
                        <li key={index}>
                            <span>{obj.banknots} </span>
                            <span>{obj.value} </span>
                            <span>{obj.number}   </span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => props.callback('All')}>All</button>
                <button onClick={() => props.callback('Dollars')}>Dollars</button>
                <button onClick={() => props.callback('Rubles')}>Rubles</button>
            </div>
        </div>
    )
}