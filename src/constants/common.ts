// forms
export const ADD_GROUP_FORM_ID = '854937900724326400';
export const EDIT_GROUP_FORM_ID = '854938673633890304';

// process definition key
export const USER_PROCESS_DEFINITION_KEY = 'Process_844844770998710300';
export const GROUP_PROCESS_DEFINITION_KEY = 'Process_tyoovr6';
export const ACTION_EDIT = 'edit';
export const ACTION_DELETE = 'delete';

// table headers
export const USER_TABLE_HEADERS = [
    { id: 'userName', label: 'Username', disableSorting: false },
    { id: 'firstName', label: 'First Name', disableSorting: false },
    { id: 'lastName', label: 'Last Name', disableSorting: false },
    { id: 'mobileNumber', label: 'Mobile Number', disableSorting: false },
    { id: 'emailId', label: 'Email', disableSorting: false },
    { id: 'department', label: 'Department', disableSorting: false },
    // { id: 'groups', label: 'Groups', disableSorting: true },
    { id: 'actions', label: 'Actions', disableSorting: true },
];

// table headers
export const GROUP_TABLE_HEADERS = [
    // { id: 'id', label: 'Id', disableSorting: true },
    { id: 'name', label: 'Name', disableSorting: false },
    { id: 'description', label: 'Description', disableSorting: true },
    { id: 'actions', label: 'Actions', disableSorting: true },
];

// table actions
export const UPDATE_USER_TABLE = 'UPDATE_USER_TABLE';
export const UPDATE_GROUP_TABLE = 'UPDATE_GROUP_TABLE';

// spinner actions
export const OPEN_SPINNER = 'OPEN_SPINNER';
export const CLOSE_SPINNER = 'CLOSE_SPINNER';

// notification actions
export const PUSH_NOTIFICATION = 'PUSH_NOTIFICATION';

// show confirmation
export const SHOW_CONFIRMATION = 'SHOW_CONFIRMATION';

// MFE Data Action
export const UPDATE_MFE_DATA = 'UPDATE_MFE_DATA';
export const MFE_INITIAL_STATE = {
    type: '',
    addFormId: '847404176972648448',
    editFormId: '847404647649054720',
    tableHeaders: [
        { id: 'userName', label: 'Username', disableSorting: false },
        { id: 'firstName', label: 'First Name', disableSorting: false },
        { id: 'lastName', label: 'Last Name', disableSorting: false },
        { id: 'mobileNumber', label: 'Mobile Number', disableSorting: false },
        { id: 'emailId', label: 'Email', disableSorting: false },
        { id: 'department', label: 'Department', disableSorting: false },
        { id: 'actions', label: 'Actions', disableSorting: true },
    ],
};

// table initial states
export const TABLE_INITIAL_STATE = {
    searchBy: '',
    rowsPerPageOptions: [5, 10, 25],
    recordCount: 0,
    page: 1,
    rowsPerPage: 5,
    sortBy: '',
    sortDirection: '',
    records: [],
};
