import Button from '@material-ui/core/Button'
//Types

import {CartItemType} from '../App'

import {Wrapper} from './Item.style'

type Props={
    item: CartItemType;
    handleAddToCart:(clickedItem: CartItemType)=>void

}


export const Item:React.FC <Props>= ({item, handleAddToCart})=>(
    <Wrapper>
        <img src={item.image}/>
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <Button onClick={()=>handleAddToCart(item)}>
            Add to Cart
        </Button>
    </Wrapper>
)



