export const fetchReviews = (restaurantId) => {
    return $.ajax({
        method: "GET",
        url: `/api/restaurants/${restaurantId}/reviews`,
    });
};

export const createReview = (review) => {
    return $.ajax({
        method: "POST",
        url: "/api/reviews",
        data: { review: review }
    });
};

//check if review has been left in last 30 days
export const checkReview = (info) => {
    return $.ajax({
        method: "GET",
        url: "/api/reviews/leftreview",
        data: { info: info }
    });
};

