import * as yup from 'yup';

const userValidator = yup.object({
    id: yup.mixed().test('not-allowed', 'The ID field must not be entered to create a new user', (value) => value === undefined),
    name: yup.string().required().min(2).max(200)
});

export default userValidator
