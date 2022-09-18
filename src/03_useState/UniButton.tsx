type UniButtonType = {
    name: string
    callback: () => void
}


export const UniButton = (props: UniButtonType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}