import { CDN_URL } from "../utils/constants";

const ItemList = ({items})=> {
        return(
        <div>
            {items.map((item)=>(<div key={item.card.info.id} className="m-2 p-2 border-b-2 border-gray-200 text-left flex">
                    <img src={CDN_URL + item.card.info.imageId} className="w-3/12 "></img>
                    <div className="absolute top">
                        <button className="rounded-lg p-3 bg-slate-200 shadow-lg mx-16 mt-10">Add +</button>
                    </div>
                    <div className="py-2 ml-5 w-9/12">
                        <span>{item.card.info.name}</span>
                        <span>- ₹ {item.card.info.price? item.card.info.price/100: item.card.info.defaultPrice/100}</span>
                        <p className="text-base">{item.card.info.description}</p>
                    </div>
                    
                
            </div>))}
        </div>
    )
}

export default ItemList;