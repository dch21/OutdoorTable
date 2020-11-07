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

* Look up restaurants by keyword, cuisine, area, date and time. 
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

  
* Restaurant show page features a comprehensive collection of information that allows users to make choices regarding where to dine.
  * Basic info such as hours, location, price range, photos, and COVID-19 precautions are shown on the overview and sidebar sections.
  * Integrated Google Maps: restaurant is shown on map, while clicking the address opens up new window with a Google Map so users can search how far they are from the restaurant
  * Review data for Food, Service, Ambience, Noise Level and Overall Value are aggregated and averaged on the backend to give users information on how past diners liked their dining experience.  
  * In addition to showing reviwer name and location, the app also calculates the age of the review based on days from today to quickly give users a sense of which reviews are most relevant and timely.




* Individual reviews can only be made by logged in users and those who have dined at a restaurant using a reservation made on OutdoorTable. The app 

