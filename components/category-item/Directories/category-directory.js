import CategoryItem from "../category-item";
import MerchCategories from "../category-landing-menu";


import "../../../styles.scss";

const categoryDirectory = ()=>
{
    return(
        <div className="categories-container">
            {MerchCategories.map((category) => (
             <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
}

export default categoryDirectory;