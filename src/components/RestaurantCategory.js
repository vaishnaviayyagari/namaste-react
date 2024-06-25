
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowIndex}) => {

    const handleClick=()=>{
        setShowIndex();
    }
    return(
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-6  font-bold text-lg">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span>{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {showItems && <ItemList items={data.itemCards}/>}
        </div>
    )
}
export default RestaurantCategory;