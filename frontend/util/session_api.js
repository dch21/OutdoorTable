export const postUser = (user) => {
    return $.ajax({
        method: "POST",
        url: "api/users",
        data: {user: user}
    });
};

export const postSession = (user) => {
    return $.ajax({
        method: "POST",
        url: "api/session",
        data: {user: user}
    });
};

export const deleteSession = () => {
    return $.ajax({
        method: "DELETE",
        url: "api/session"
    });
};

