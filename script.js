// This is fetching the data from the Naruto database. 

async function getAnimeChar() {
    let resultObj = await fetch('https://api.jikan.moe/v3/search/anime?q=naruto')
    let apiData = await resultObj.json();

    // console.log(apiData)

    // this return is what I am returing from the api database. I am only returning the results.
    return apiData.results;
}

// This is finishing the fetch promise
getAnimeChar().then((animeChars) => {
    console.log(animeChars);

    // This const is what ties the fetch function to the HTML 

    const animeDiv = document.querySelector('#animeCharInfo');

    animeChars.forEach((char) => {

// This variable creates the individual divs

        let charDiv = document.createElement('div')

// This variable/template literal is what calls from the results and displays on the website.

        let charHtml = `
            <h2 id="title">Title: ${char.title}</h2>
            <p>Rated: ${char.rated}</p>
            <p>Type: ${char.type}</p>
            <p>Number of episodes: ${char.episodes}</p>
            <p>Score: ${char.score}</p>
            <img src="${char.image_url}">
            `
// This connects the new var to the html 
            charDiv.innerHTML = charHtml;

// This is what appends the const to the template literal

            animeDiv.append(charDiv)

    })


// This is a const that attaches to the button on the HTML for the pg-13 button

    const pg13rating = document.querySelector('#pg13rating');


// This is the event listener from the button to the java

    pg13rating.addEventListener('click', () => {

        animeDiv.innerHTML = '';

        getAnimeChar().then((char) => {

            let onlyPg13 = char.filter((char) => {
                return char.rated <= 'PG-13';               
            })

            // console.log(onlyPg13)

            onlyPg13.forEach((char) => {

                let charDiv = document.createElement('div')

 // This variable/template literal is what calls from the results and displays on the website.
       
                let charHtml = `
                    <h2 id="title">Title: ${char.title}</h2>
                    <p>Rated: ${char.rated}</p>
                    <p>Type: ${char.type}</p>
                    <p>Number of episodes: ${char.episodes}</p>
                    <p>Score: ${char.score}</p>
                    <img src="${char.image_url}">
                    `
                    charDiv.innerHTML = charHtml;

                    // This is what appends the const to the template literal
                    
                                animeDiv.append(charDiv)
                    console.log(charHtml)
            })  
           
        })
        
    })

    // This is a const that attaches to the button on the HTML and for the 100 + episodes

    const episodesOver100 = document.querySelector('#over100episodes');

// This is the event listener from the button to the java

    episodesOver100.addEventListener('click', () => {

        animeDiv.innerHTML = '';

        getAnimeChar().then((char) => {

            let moreEpisodes = char.filter((char) => {
                return char.episodes >= 50;               
            })


            moreEpisodes.forEach((char) => {

// This variable/template literal is what calls from the results and displays on the website.

                let charDiv = document.createElement('div')
                
                let charHtml = `
                    <h2 id="title">Title: ${char.title}</h2>
                    <p>Rated: ${char.rated}</p>
                    <p>Type: ${char.type}</p>
                    <p>Number of episodes: ${char.episodes}</p>
                    <p>Score: ${char.score}</p>
                    <img src="${char.image_url}">
                    `
                    charDiv.innerHTML = charHtml;

                    // This is what appends the const to the template literal
                    
                        animeDiv.append(charDiv)

                        console.log(charHtml)

            })  
           
        })
        
    })

    // This is a const that attaches to the button on the HTML and is for the score above 7 button.

    const ratingOver5 = document.querySelector('#scoreabout5');

// This is the event listener from the button to the java

    ratingOver5.addEventListener('click', () => {

        animeDiv.innerHTML = '';

        getAnimeChar().then((char) => {

            let highRating = char.filter((char) => {
                return char.score >= 7;               
            })


            highRating.forEach((char) => {

                let charDiv = document.createElement('div')

// This variable/template literal is what calls from the results and displays on the website.

                let charHtml = `
                    <h2 id="title">Title: ${char.title}</h2>
                    <p>Rated: ${char.rated}</p>
                    <p>Type: ${char.type}</p>
                    <p>Number of episodes: ${char.episodes}</p>
                    <p>Score: ${char.score}</p>
                    <img src="${char.image_url}">
                    `
                    charDiv.innerHTML = charHtml;

                    // This is what appends the const to the template literal
                    
                        animeDiv.append(charDiv)

                        console.log(charHtml)

            })  
           
        })
        
    })
    
    })





