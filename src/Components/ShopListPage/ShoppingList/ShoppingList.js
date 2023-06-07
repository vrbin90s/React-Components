import { useState } from "react";
import SHOPPING_LIST_DATA from "../../../Data/ShopListData";
import Container from "../../Core/Container/Container";
import ShoppingItem from "../ShoppingItem/ShoppingItem";
import './ShoppingList.css';

function ShoppingList(){
    const [shoppingList, setShoppingList] = useState(SHOPPING_LIST_DATA);
    const [newItem, setNewItem] = useState('');

    const newItemHandler = (event) => {

        
        event.preventDefault();
        
        // if(newItem === '') {
        //     return;
        // }
        // const newItemObject = {
        //     title: newItem,
        //     done: false
        // };

        // setShoppingList((prevList) => [...prevList, newItemObject]);

        setShoppingList(prevList => [{title: newItem, done: false}, ...prevList]);
        setNewItem('');
    }

    const itemInputHandler = (event) => setNewItem(event.target.value);


    const itemHandler = (clickedItem) => {
        const updatedList = shoppingList.map((listItem) => {
            if(listItem === clickedItem) {
                return {...listItem, done: !listItem.done }
            }
            return listItem;
        });
        
        setShoppingList(updatedList);
    }
    
    return(
        <Container title = 'Shopping List'>
            <form onSubmit={newItemHandler}>
                <label htmlFor="shopping-item">New Item:</label>
                <input type="text" id="shopping-item" value={newItem} onChange={itemInputHandler}></input>
                <input type="submit" value="create"></input>
            </form>
            {shoppingList && shoppingList.length > 0 ? (
            <ul className="shoppingList">
                <h1>Your shopping list:</h1>
                {shoppingList.map((item, index) => <ShoppingItem key={index} data={item} onClick={() => itemHandler(item)}/>)}
                   
            </ul>
            ) : (
                <h1>Your shopping list is empty</h1>
            )}
        </Container>
    )

}
export default ShoppingList;