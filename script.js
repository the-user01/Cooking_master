

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
.then(res => res.json())
.then((data => {
     getData(data)

}))

const getData = elements => {

    elements.meals.map(function(data){

        const cardBody = document.getElementById('cardBody');

        const cardDiv = document.createElement('div');

        cardDiv.className = 'cardStyle';

        const cardElements = `

        <img src="${data.strMealThumb} " class="card-img-top">

        <div>
        <h5>${data.strMeal}</h5>
        </div>
        
        `
        cardDiv.innerHTML = cardElements;
        cardBody.appendChild(cardDiv);


        const mealNames = data.strMeal;

        const cardsSection =  document.getElementById('cardHeading');
        const cardDetails = document.getElementById('cardDetails');
        const detailsDiv = document.createElement('div');

        detailsDiv.className = "detailsDiv";

        cardsSection.addEventListener('click', function(event){
            
            const targetValue = (event.target).innerHTML;
            
            if( targetValue === mealNames)
            {
               cardsSection.style.display = 'none';
               cardDetails.style.display = 'block';

               const elementDetails = `

               <img src="${data.strMealThumb} " class="card-img-top">
       
               <div class="ingredientsDiv">
               <h3>${data.strMeal}</h3>

                <h6>Ingredients</h6>
               <ul type="square">
                <li>${data.strIngredient1}</li>
                <li>${data.strIngredient2}</li>
                <li>${data.strIngredient3}</li>
                <li>${data.strIngredient4}</li>
                <li>${data.strIngredient5}</li>
               </ul>

               </div>
               
               `

               detailsDiv.innerHTML = elementDetails;
               cardDetails.appendChild(detailsDiv);
                
               console.log(data);

            }
        
        }) // click handle

        const cardDetails2 = document.getElementById('cardDetails2');
        const detailsDiv2 = document.createElement('div');

        detailsDiv2.className = "detailsDiv";

        document.getElementById('button-addon2').addEventListener('click', function(event){
            
            const input = document.getElementById('input');
            const inputValue = input.value;
        
            console.log(inputValue);
            
            if( inputValue.toLowerCase() === mealNames.toLowerCase())
            {
               cardsSection.style.display = 'none';
               cardDetails2.style.display = 'block';

               const elementDetails2 = `

               <img src="${data.strMealThumb} " class="card-img-top">
       
               <div class="ingredientsDiv">
               <h3>${data.strMeal}</h3>

                <h6>Ingredients</h6>
               <ul type="square">
                <li>${data.strIngredient1}</li>
                <li>${data.strIngredient2}</li>
                <li>${data.strIngredient3}</li>
                <li>${data.strIngredient4}</li>
                <li>${data.strIngredient5}</li>
               </ul>

               </div>
               
               `

               detailsDiv2.innerHTML = elementDetails2;
               cardDetails2.appendChild(detailsDiv2);

               input.value = "";

            }
        
        }) // click btn


    }) // maps


}
