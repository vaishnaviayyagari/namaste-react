import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
   
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex,setShowIndex] = useState(null);
 
    if(resInfo === null) return <Shimmer/> ;
    const {name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating,totalRatingsString, sla} = resInfo?.cards[2]?.card?.card?.info;
    const itemCards = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card.itemCards;
    //console.log(resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter
    (c=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //console.log(categories);
    return(
        <div className="text-center">
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <p className="font-bold">{cuisines.join(",")}</p>
            {
                /* categories accodians */
                categories.map((category,index)=> (
                    <RestaurantCategory key={category.card.card.title} data={category?.card?.card}
                    showItems = {index === showIndex? true:false}
                    setShowIndex={()=>setShowIndex(index)}/>
                ))
            }
        </div>
    )
};

export default RestaurantMenu;