import React from "react";

type ButtonType = {
    name: string,
    callBack:()=> void,
}

export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    )
}

// const Button1Foo = (sub:string,age:number) => {
//     console.log(sub,age)
// }
//
// const Button2Foo = (sub:string,age:number) => {
//     console.log(sub,age)
// }
//
// const Button3Foo = () => {
//     console.log('Im stupid button')
// }
//
// return (
//     <div>
//         <Button name={'MyYoutubeChannel - 1'} callBack={()=>Button1Foo('Im Vasya',21)}/>
//         <Button name={'MyYoutubeChannel - 1'} callBack={()=>Button2Foo('Im Ivan',45)}/>
//         <Button name={'Stupid button'} callBack={Button3Foo}/>
//     </div>
// );