# OutdoorTable

![Logo](/readme_files/logo.png)

[Live Site!](https://outdoortable.herokuapp.com/#/)

Outdoor Table is a web application built with a Ruby on Rails/PostgreSQL backend and React/Redux frontend that allows users to look up restaurants in their area, make reservations, save favorites, and leave reviews based on their dining experience. 

## Technology

* Ruby on Rails
* React
* Redux
* JavaScript
* HTML/CSS
* PostgreSQL
* Google Maps API
* JBuilder
* Heroku

## Features

### Search
* Look up restaurants by keyword, cuisine, area, date and time. A search bar is integrated onto every page--just click on the magnyging glass and a search modal will pop up.
  * Through the Redux state, each search result contains basic restaurant info along with the most recent review to give users quick and relevant information for choosing a place to dine. 
  * Search makes use of the .includes method which solves the N + 1 query problem through eager loading. 
  * A basic filter is set up on the React frontend so search results can be sorted by price, location, and cuisine. Toggling a filter will add or remove restaurants seen on the Google Maps API.

Search
```ruby
  def search
      @searchTerms = params[:searchTerms]["searchTerm"]
      @time = params[:searchTerms]["time"]
      @date = params[:searchTerms]["date"]
      @party_size = params[:searchTerms]["party_size"]

      @restaurants = Restaurant.includes(:reviews).all
      if params["searchTerms"] == ""
          render "api/restaurants/search"
          return
      end

      @restaurants = Restaurant.includes(:reviews).includes(:reservations).where('name ILIKE ? OR description ILIKE ? OR neighborhood ILIKE ? OR cuisine ILIKE ? OR boro ILIKE?', "%#{@searchTerms}%", "%#{@searchTerms}%", "%#{@searchTerms}%", "%#{@searchTerms}%", "%#{@searchTerms}%" )

      render "api/restaurants/search"
      
  end
```

Filter
```javascript
  let filtered = []

  for (let i = 0; i < results.length; i++) {
      if (filters.boro.length !== 0 && !(filters.boro.includes(results[i].boro))) {
          continue;
      }
      if (filters.price.length !== 0 && !(filters.price.includes(results[i].price_range))) {
          continue;
      }
      if (filters.cuisine.length !== 0 && !(filters.cuisine.includes(results[i].cuisine))) {
          continue;
      }
      filtered.push(results[i])
  }

  const final = (filters.price.length > 0 || filters.boro.length > 0 || filters.cuisine.length > 0) ? filtered : results
```

![Search](/readme_files/search_demo_320.gif)

### Restaurant Show Page
  
* Restaurant Show Page: a comprehensive collection of information that allows users to make choices regarding where to dine.
  * Basic info: complete restaurant data such as hours, location, price range, photos, and COVID-19 precautions are fetched from the PostgreSQL database by the Rails RESTful API. They information is stored in the Redux state for React to render on the overview and sidebar sections. 
  * Favorites: through React/Redux, users can instantly save or unsave restaurants by clicking the save/unsave in the restaurant overview.
  * Integrated Google Maps API: restaurant is shown on map, while clicking the address opens up new Google Maps window so users can search how far they are from the restaurant.
  * Aggregate Data: review data for Food, Service, Ambience, Noise Level and Overall Value are aggregated and averaged on the Rails backend to give users information on how past diners liked their dining experience. In addition to showing reviewer name and location, the backend also calculates the age of the review based on days from today to quickly give users a sense of which reviews are most relevant and timely.


### Reservations and User Page

* Making a Reservation 
  * To make a reservation, fill out the "Make a reservation form" on the restuarant. Through React/Redux, picking a new time will result in a new list of avaibable times without a page refresh. Clicking the time redirects the user to a reservation confirmation page. 
  * Error handling: users cannot make a reservation unless they fill out the email and phone number fields. Users also have to be logged in to make a reservation. 
  * Upon confirming their reservation, the user is redirected to their account page where they can see the current and past reservations as well as saved restaurants.

