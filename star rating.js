// Initial rating
const ratings={
    sony:4.7,
    samsung:3.4,
    vizio:2.3,
    panasonic:3.6,
    phillips:3.4
}

//Total Stars

const starsTotal=5;

//Form elements
const productSelect=document.getElementById('product-select');
const ratingControl=document.getElementById('rating-control');

// Init product
let product;

// Product select change
productSelect.addEventListener('change',(e)=>{
    product=e.target.value;
    
    // Enable rating control
    ratingControl.disabled=false;
    ratingControl.value=ratings[product];
});
ratingControl.addEventListener('blur',(e)=>{
    const rating=e.target.value;
// Make sure under 5
    if(rating>5){
        alert('Please rate 1-5');
        return;
    }

    // Change ratings
    ratings[product]=rating;
    getRatings();
});
// Run getRating when DOM loads
document.addEventListener('DOMContentLoaded',getRatings);
//Get ratings
function getRatings(){
    
    for(let rating in ratings){
    
        // Get Percentage
        const starPercentage=(ratings[rating]/starsTotal)*100;
        // Round percentage

        const starPercentageRounded=`${Math.round(starPercentage/10)*10}%`;
        // Set width of star inner to percentage
        document.querySelector(`.${rating} .stars-inner`).style.width=starPercentageRounded;
    // Add number rating
    document.querySelector(`.${rating} .number-rating`)q.innerHTML=ratings[rating];
    }
}