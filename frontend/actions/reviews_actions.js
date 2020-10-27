import * as ReviewsAPIUtil from "../util/reviews_api";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_THIRTY_DAYS_COUNT = "RECEIVE_THIRTY_DAYS_COUNT";
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

const receiveThirtyCount = count => {
    return {
        type: RECEIVE_THIRTY_DAYS_COUNT,
        count
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

export const getThirtyDays = (info) => dispatch => (
    ReviewsAPIUtil.checkReview(info)
        .then(count => dispatch(receiveThirtyCount(count)))
);


export const PENDING_REVIEW = "PENDING_REVIEW";

const pendReview = info => {
    return {
        type: PENDING_REVIEW,
        info
    };
};

export const pendingReview = (info) => dispatch(pendReview(info));