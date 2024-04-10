import {DataGrid, GridColDef} from '@mui/x-data-grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import {RenderCheckBox} from './price.checkbox'

const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'service', headerName: 'Услуга', width: 420 },
    { field: 'term', headerName: 'Термин', width: 120 },
    { field: 'category', headerName: 'Категория', width: 90 },

    {
        field: 'amount',
        headerName: 'Цена за лист',
        type: 'number',
        width: 150,
        editable: false,
    },
    {
        field: 'count',
        headerName: 'Кол. листов',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        editable: true,
        width: 200,
        // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

const rows = [
    { id: 1,category: 'Нотариус',service: 'Нотаріальне засвідчення перекладу (подпись)', term: '1 день', amount: 200,count: 1 },
    { id: 2,category: 'Нотариус',service: 'Нотаріальне засвідчення перекладу (с копией)',  term: '1 день',  amount: 250,count: 1 },
    { id: 3,category: 'Нотариус',service: 'Заява про не перебування у шлюбі (без присутності особи)',   term: '1 день',  amount: 750,count: 1 },
    { id: 4,category: 'Нотариус',service: 'Засвідчення паспортів РФ/Білорусь (з копією)',   term: '1-2 дня',  amount: 550,count: 1 },
    { id: 5,category: 'Нотариус',service: 'Засвідчення паспортів РФ/Білорусь (фотокопія-витяг)',   term: '1-3 дня',  amount: 450,count: 1 },
    { id: 6,category: 'Нотариус',service: 'Засвідчення свідоцтв РФ/Білорусь (з копією)',   term: '1 день',  amount: 450,count: 1 },
    { id: 7,category: 'Апостиль',service: 'МЗС Физ лицо срочно',   term: '4-5 дней',  amount: 700,count: 1 },
    { id: 8,category: 'Апостиль',service: 'МЗС Физ лицо',   term: '7-10 дней',  amount: 500,count: 1 },
    { id: 9,category: 'Апостиль',service: 'МЗС Юр лицо срочно',   term: '4-5 дней',  amount: 1250,count: 1 },
    { id: 10,category: 'Апостиль',service: 'МЗС Юр лицо',   term: '7-10 дней',  amount: 800,count: 1 },
    { id: 11,category: 'Апостиль',service: 'МВС,ДПС',   term: '10 дней',  amount: 200,count: 1 },
    { id: 12,category: 'Апостиль',service: 'Минюст Физ лицо',   term: '2-5 дней',  amount: 300,count: 1 },
    { id: 13,category: 'Апостиль',service: 'Минюст Юр лицо',   term: '2-5 дней',  amount: 350,count: 1 },
    { id: 14,category: 'Апостиль',service: 'МОН Диплом старого и нового образца',   term: '30 дней',  amount: 350,count: 1 },
    { id: 15,category: 'Апостиль',service: 'МОН Диплом нового образца',   term: '1 день',  amount: 1550,count: 1 },
    { id: 16,category: 'Апостиль',service: 'МОН Диплом нового образца',   term: '3 дня',  amount: 850,count: 1 },
    { id: 17,category: 'Апостиль',service: 'МОН Диплом нового образца',   term: '10 дней',  amount: 590,count: 1 },
    { id: 18,category: 'Апостиль',service: 'МОН Диплом старого образца',   term: '20 дней',  amount: 800,count: 1 },
    { id: 19,category: 'Легализация',service: 'МЗС Физ лицо',   term: '10 дней',  amount: 500,count: 1 },
    { id: 20,category: 'Легализация',service: 'МЗС Физ лицо срочно',   term: '3 дня',  amount: 700,count: 1 },
    { id: 21,category: 'Легализация',service: 'МИНЮСТ + МЗС Физ лицо',   term: '10-12 дней',  amount: 700,count: 1 },
    { id: 22,category: 'Легализация',service: 'МИНЮСТ + МЗС Физ лицо срочно',   term: '6-7 дней',  amount: 900,count: 1 },
    { id: 23,category: 'Легализация',service: 'МИНЮСТ + МЗС Юр лицо',   term: '10-12 дней',  amount: 1000,count: 1 },
    { id: 24,category: 'Легализация',service: 'МИНЮСТ + МЗС Юр лицо срочно',   term: '6-7 дней',  amount: 1450,count: 1 },

];

export default function DataGridDemo() {
    return (
        <Box sx={{ height: 1400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                // initialState={{
                //     pagination: {
                //         paginationModel: {
                //             pageSize: 5,
                //         },
                //     },
                // }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}