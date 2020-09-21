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

// test newuser
// const user = {
//     email: "test1@test.com",
//     password: "testing",
//     first_name: "testfirst1",
//     last_name: "testlast1",
//     location: "Brooklyn",
//     phone_num: "555-555-test1"
// }

// test newuser
// const user = {
//     email: "test2@test.com",
//     password: "testing",
//     first_name: "testfirst2",
//     last_name: "testlast2",
//     location: "Brooklyn",
//     phone_num: "555-555-test2"
// }


// test session
// const user = {
//     email: "test1@test.com",
//     password: "testing",
// }

