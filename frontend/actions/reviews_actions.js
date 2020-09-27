import * as ReviewsAPIUtil from "../util/reviews_api";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

const receiveReviews = payload => {
    const { reviews, reviewers } = payload;

    return {
        type: RECEIVE_REVIEWS,
        reviews,
        reviewers
    };
};

export const getReviews = (restaurantId) => dispatch => (
    ReviewsAPIUtil.fetchReviews(restaurantId)
        .then(payload => dispatch(receiveReviews(payload)))
);