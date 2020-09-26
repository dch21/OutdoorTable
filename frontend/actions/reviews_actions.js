import * as ReviewsAPIUtil from "../util/reviews_api";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

const receiveReviews = reviews => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    };
};

export const getReviews = (restaurantId) => dispatch => (
    ReviewsAPIUtil.fetchReviews(restaurantId)
        .then(reviews => dispatch(receiveReviews(reviews)))
);