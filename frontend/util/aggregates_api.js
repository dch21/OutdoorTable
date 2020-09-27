export const fetchAggregates = (restId) => {
    return $.ajax({
        method: "GET",
        url: `/api/restaurants/${restId}/aggregates`
    });
};
