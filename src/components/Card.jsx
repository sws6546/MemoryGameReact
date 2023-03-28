
function Card({img, selected, handleClick}){

    return (
        <div style={{
            // backgroundColor: "grey",
            border: "2px solid aquamarine",
            boxSizing: "border-box",
            borderRadius: "15px",
            opacity: (img.known? "0%" : "100%"),
            transition: "1s"
        }}>
            <img onClick={()=> {if(img.canClick && !img.known){handleClick(img.key)}}} style={{
                width: '100%',
                height: '100%',
                borderRadius: "15px",
                cursor: img.canClick?"pointer":"",
                boxSizing: "border-box",
                border: (selected[0]===img.key||selected[1]===img.key?"0px solid red": ""),
                opacity: (selected[0]===img.key||selected[1]===img.key?"100%": "0%"),
                transition: "0.4s"
            }} src={"src/flowers/" + img.name} alt=""/>
        </div>
    )
}

export default Card