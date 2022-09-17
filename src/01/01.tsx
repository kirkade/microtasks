import React from "react";
import './01.module.css'

type MapComponentType = {
    cars: Array<CarsArrayType>
}

type CarsArrayType = {
    manufacturer: string,
    model: string,
}

export const MapComponent = (props: MapComponentType) => {
    return (
        <div>
            {props.cars.map((car, index) => {
                return (
                    <table>
                        <tr>
                            <th>Number</th>
                            <th>Manufacturer</th>
                            <th>Model</th>
                        </tr>
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{car.manufacturer}</td>
                            <td>{car.model}</td>
                        </tr>
                    </table>
                )
            })}
        </div>
    )
}