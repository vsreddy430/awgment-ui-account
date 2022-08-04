import {
    GET_FORM_ENDPOINT,
    GET_GROUPS_ENDPOINT,
    GET_ROLES_ENDPOINT,
    getGroups,
    getRoles,
    getFormById,
} from '../CommonService';
import { request } from '../../request';

jest.mock('../../request');

const mockedRequest = request as jest.Mocked<typeof request>;

const successResponse = (data) => {
    return {
        success: true,
        message: 'Success Response',
        data: data,
    };
};

const errorResponse = () => {
    return {
        success: false,
        message: 'Error Response',
    };
};

const roles = [
    { roleId: '1', roleName: 'Role 1' },
    { roleId: '2', roleName: 'Role 2' },
];

const groups = [
    { groupId: '1', name: 'Group 1' },
    { groupId: '2', name: 'Group 2' },
];

const formioComponents = [
    {
        key: 'userName',
        label: 'Username',
    },
    {
        key: 'roles',
        label: 'Roles',
        data: {
            values: [],
        },
    },
];

const formioSchema = {
    display: 'form',
    components: formioComponents,
};

describe('getGroups', () => {
    afterEach(jest.clearAllMocks);
    const modifiedGroups = [
        { value: 'Group 1', label: 'Group 1' },
        { value: 'Group 2', label: 'Group 2' },
    ];

    test('fetches successfully data from an API', async () => {
        mockedRequest.get.mockResolvedValue(successResponse(groups));
        const result = await getGroups();
        expect(mockedRequest.get).toHaveBeenCalledTimes(1);
        expect(mockedRequest.get).toHaveBeenCalledWith(GET_GROUPS_ENDPOINT);
        expect(result).toEqual(modifiedGroups);
    });

    test('fetches erroneously data from an API', async () => {
        mockedRequest.get.mockResolvedValue(errorResponse());
        const result = await getGroups();
        expect(mockedRequest.get).toHaveBeenCalledTimes(1);
        expect(result).toEqual([]);
    });
});

describe('getRoles', () => {
    afterEach(jest.clearAllMocks);
    const modifiedRoles = [
        { value: 'Role 1', label: 'Role 1' },
        { value: 'Role 2', label: 'Role 2' },
    ];

    test('fetches successfully data from an API', async () => {
        mockedRequest.get.mockResolvedValue(successResponse(roles));
        const result = await getRoles();
        expect(mockedRequest.get).toHaveBeenCalledTimes(1);
        expect(result).toEqual(modifiedRoles);
    });

    test('getRoles() should call wilth proper Request URL', async () => {
        await getRoles();
        expect(mockedRequest.get).toHaveBeenCalledWith(GET_ROLES_ENDPOINT);
    });

    test('fetches erroneously data from an API', async () => {
        mockedRequest.get.mockResolvedValue(errorResponse());
        const result = await getRoles();
        expect(mockedRequest.get).toHaveBeenCalledTimes(1);
        expect(result).toEqual([]);
    });
});

describe('getFormById', () => {
    afterEach(jest.clearAllMocks);
    test('fetches successfully data from an API', async () => {
        mockedRequest.get.mockResolvedValue(successResponse(formioSchema));
        const result = await getFormById('123');
        expect(mockedRequest.get).toHaveBeenCalledTimes(1);
        expect(result).toEqual(formioComponents);
    });

    test('getRuleDetails() should call wilth proper Request URL', async () => {
        await getFormById('123');
        expect(mockedRequest.get).toHaveBeenCalledWith(`${GET_FORM_ENDPOINT}/123`);
    });

    test('fetches erroneously data from an API', async () => {
        mockedRequest.get.mockResolvedValue(errorResponse());
        const result = await getFormById('123');
        expect(mockedRequest.get).toHaveBeenCalledTimes(1);
        expect(result).toEqual({});
    });
});
