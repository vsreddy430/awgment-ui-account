import { createContext } from 'react';

import { UserData } from '../../services/UserService';

export interface UserTable {
    searchBy: string;
    rowsPerPageOptions: number[];
    recordsCount: number;
    page: number;
    rowsPerPage: number;
    sortBy: string;
    sortDirection: 'asc' | 'desc';
    records: UserData[] | [];
}

export interface UserContextProps {
    userTableData: UserTable;
    updateUserTableData: (data: UserTable) => void;
}

const UserContext = createContext({} as UserContextProps);

export default UserContext;
