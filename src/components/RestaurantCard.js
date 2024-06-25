import { CDN_URL } from "../utils/constants"

const styleCard = {
    backgroundColor:"#f0f0f0"
}

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating ,sla} = resData?.info
    return (
        <div className="m-4 p-4 w-[300px] rounded-lg" style={styleCard}>
            <img className="rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold p-3 text-lg">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export const withOpenLabel = (RestaurantCard)=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open Label</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;