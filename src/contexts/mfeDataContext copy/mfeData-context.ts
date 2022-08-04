import { createContext } from 'react';

interface TableHeadersProps {
    id: string;
    label: string;
    disableSorting: boolean;
}

export interface MfeDataProps {
    type: string;
    addFormId: string;
    editFormId: string;
    tableHeaders: TableHeadersProps[];
}

export interface MfeDataContextProps {
    mfeData: MfeDataProps;
    updateMfeData: (data: MfeDataProps) => void;
}

const MfeDataContext = createContext({} as MfeDataContextProps);

export default MfeDataContext;
