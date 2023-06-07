
import './ShoppingItem.css';
function ShoppingItem({data, onClick}) {

    const handleClick = () => {
        onClick(data);
    }

    return (
        <li className={data.done ? 'done' : ''} onClick={handleClick}>
            {data.title}
        </li>
    )
}

export default ShoppingItem;