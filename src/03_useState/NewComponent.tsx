import React from "react";

import {FilterType} from '../App'
import {UniButton} from "./UniButton";

type NewComponentType = {
    filteredMoney: Array<FilteredMoneyArrayType>
    callback: (currency: FilterType) => void
}

type FilteredMoneyArrayType = {
    currency: string
    value: number
    number: string
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            <ul>
                {props.filteredMoney.map((item) => {
                    return (
                        <li>
                            <span>{item.currency} </span>
                            <span>{item.value} </span>
                            <span>{item.number} </span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: 40}}>
                <UniButton name={'All'} callback={() => props.callback('All')}/>
                <UniButton name={'Dollars'} callback={() => props.callback('Dollars')}/>
                <UniButton name={'Rubles'} callback={() => props.callback('Rubles')}/>
            </div>
        </div>
    )
}

