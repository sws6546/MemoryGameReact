import {useEffect, useState} from "react";
import Card from "/src/components/Card"

function Plansza({changeWin}){
    const [cards, setCards] = useState([])
    const [selected, setSelected] = useState([-1, -1])
    const [guessed, setGuessed] = useState(0)

    useEffect(()=>{  // tasowanie kard i ustawianie ich
        let flowers = ["kwiat1.png", "kwiat2.png", "kwiat3.png", "kwiat4.png", "kwiat5.png", "kwiat6.png","kwiat1.png", "kwiat2.png", "kwiat3.png", "kwiat4.png", "kwiat5.png", "kwiat6.png"]
        let tempCards = []
        for(let i = 0; i < 12; i++){
            let flower = flowers[Math.floor(Math.random() * (flowers.length))]
            flowers.splice(flowers.indexOf(flower), 1);
            tempCards.push({name: flower, canClick: true, key: i, known: false})
        }
        setCards(tempCards)
    }, [])

    async function handleClick(key){
        console.log(key)
        if(selected[0] === -1){
            setSelected([key, -1])
        }else if(selected[0] !== key){
            let k1 = selected[0]
            await setSelected([k1, key])
            let tempCards = cards
            tempCards.map((e) => {
                e.canClick = false
            })
            setCards(tempCards)
            if(cards[selected[0]].name === cards[key].name){
                cards[selected[0]].known = true
                cards[key].known = true
                if(guessed === 10){
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    console.log("Wygrana")
                    changeWin()
                }else{
                    setGuessed((e)=>e+2)
                }
                await new Promise(resolve => setTimeout(resolve, 1000));
            }else{
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            tempCards.map((e) => {
                e.canClick = true
            })
            setCards(tempCards)
            setSelected([-1,-1])
        }
    }

    return (
        <div id="plansza" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr",
            width: "100vh",
            height: "80vh",
            gap: "5px"
        }}>
            {
                cards.map((e) => {
                    return <Card img={e} selected={selected} handleClick={handleClick}/>
                })
            }
        </div>
    )
}

export default Plansza