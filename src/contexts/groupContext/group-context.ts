import { createContext } from 'react';

import { GroupData } from '../../services/GroupService';

export interface GroupTable {
    searchBy: string;
    rowsPerPageOptions: number[];
    recordsCount: number;
    page: number;
    rowsPerPage: number;
    sortBy: string;
    sortDirection: 'asc' | 'desc';
    records: GroupData[] | [];
}

export interface GroupContextProps {
    groupTableData: GroupTable;
    updateGroupTableData: (data: GroupTable) => void;
}

const GroupContext = createContext({} as GroupContextProps);

export default GroupContext;
