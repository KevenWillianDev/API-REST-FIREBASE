import { createUser } from "../controllers/user/user.controller";
import { InMemoryUsersRepository } from "./repositories/in.memory.orders.repository";

import { expect, test } from 'vitest';

test("create new user", async () => {
    const CreateUser = new createUser(new InMemoryUsersRepository());
    const user = await CreateUser.handle({
        name: 'John Doe'
    });

    expect(user.id);
});
