import * as ReviewsAPIUtil from "../util/reviews_api";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
// export const CLEAR_REVIEWS = 'CLEAR_REVIEWS';


const receiveReviews = payload => {
    const { reviews, reviewers } = payload;

    return {
        type: RECEIVE_REVIEWS,
        reviews,
        reviewers
    };
};

const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review
    };
};

// export const clearReviews = () => {
//     return {
//         type: CLEAR_REVIEWS,
//     };
// };

export const getReviews = (restaurantId) => dispatch => (
    ReviewsAPIUtil.fetchReviews(restaurantId)
        .then(payload => dispatch(receiveReviews(payload)))
);

export const createReview = (review) => dispatch => (
    ReviewsAPIUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)))
);