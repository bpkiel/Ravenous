const apiKey = 'P0U-YebiSYGjH7Mco5Vnf61nmM4K6TSEkmel21TE7SkyXn6XX-mwbxYjtWMdTwBKMmdc7gES0B7agmKf2fbQcfjy4GNsj9iqhckesbhdfkjMv3Q5kn18mGPAcIdtXnYx';

let Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        })
    }
};

export default Yelp;