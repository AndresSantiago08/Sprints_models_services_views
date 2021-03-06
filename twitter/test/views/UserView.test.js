const UserView = require('./../../app/views/UserView');

describe("Test for UserView", () => {
    test("S-3, R-1: Return an error object when try to create a new user with an null playload", () => {
        const payload = null;
        const result = UserView.createUser(payload);

        expect(result.error).toMatch(/payload no existe/);
    })

    test("S-3, R-2: Return an error object when try to create a new user with a payload with invalid properties", () => {
        const payload = {userName: null, name: "Andres", id: 2};
        const result = UserView.createUser(payload);

        expect(result.error).toMatch(/necesitan tener un valor válido/);
    })

    test("S-3, R-3: Return an error object when try to create a new user with a payload with missing properties", () => {
        const payload = {userName: "Santiago"};
        const result = UserView.createUser(payload);

        expect(result.error).toMatch(/necesitan tener un valor válido/);
    })

    test("S-3, R-4: Create a user by a given valid payload", () => {
        const payload = {userName: "UserName", id: 1, name: "name"};
        const result = UserView.createUser(payload);

        expect(result.name).toBe("name");
        expect(result.userName).toBe("UserName");
        expect(result.id).toBe(1);
    })
})