# OutdoorTable

![Logo](/readme_files/logo.png)

[Live Site!](https://outdoortable.herokuapp.com/#/)

Outdoor Table is a web application built with a Ruby on Rails backend and React/Redux frontend that allows users to look up restaurants in their area, make reservations, and leave reviews based on their dining experience. 

## Features

* Look up restaurants by keyword, cuisine, or area. Searching restaurants by availability, date, and time will be implemented in future versions.
  * Each search results contain basic info along with the most recent review to give users quick and relevant information for choosing a restaurant.
  
* Restaurant show page features restaurant information such as hours, location, price range, and cuisine type. The show page also intergrates Google Maps API in providing a map of the location of the restaurant. 

* Review data for Food, Service, Ambience, Noise Level and Overall Value are aggregated and averaged on the backend to give users information on how past diners liked their dining experience.  

* Individual reviews can only be made by logged in users and those who have dined at a restaurant using a reservation made on OutdoorTable. The app also calculates the age of the review based on days from today to quickly give users a sense of which reviews are most relevant and timely.

* Ability to make reservations will be added in future versions. 

