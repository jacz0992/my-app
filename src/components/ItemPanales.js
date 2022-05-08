import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Items, players } from '../utils/Items'
import Player from "./Item"

const ItemDetail = () => {

    const {itemId}  = useParams()
    const [item, setItem] = useState ({})

    useEffect(() => {
        const fn= async () => { const players = await getItemDetail() 
            if (players) {
                setItem(players) 
            }
              
        }

        fn()

    }, [])

    const getItemDetail = () => {
        return new Promise ((resolve) => {
            setTimeout (() => { 
                resolve(players.find( r => r.id == itemId ))
            }, 2000);
        } )
    }


    return (
        <>
        <div> Detalle del Item -  {itemId}</div>

        <div><img src={item.pictureUrl}></img></div>
        <div><strong>Id: {item.id}</strong></div>
        <div><strong>Producto: {item.name}</strong></div>
        <div><strong>Precio: {item.precio}</strong></div>
       
        </>
        
    )
}
export default ItemDetail