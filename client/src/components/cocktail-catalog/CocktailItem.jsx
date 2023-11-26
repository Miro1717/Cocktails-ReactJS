import './cocktailItem.css'
import { Link } from "react-router-dom";

const CocktailsItem = function ({ _id, cocktailName, AlcoholType, imageUrl }) {
  return (
    <div class="card">
    <img class="image" src={imageUrl}/>
     <div class="content">
       <a href="#">
         <span class="title">
           {cocktailName}
         </span>
       </a>
   
       <p class="desc">
       {AlcoholType}
       </p>
   
       <Link class="action" to={`/cocktails/${_id}`}>
         Details
         <span aria-hidden="true">
           →
         </span>
       </Link>
     </div>
   </div>
        
  
  );
};

export default CocktailsItem;

