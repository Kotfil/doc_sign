import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function PriceSelect() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Услуга</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Услуга"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Засвідчення паспортів РФ/Білорусь</MenuItem>
                    <MenuItem value={20}>МЗС Физ лицо срочно</MenuItem>
                    <MenuItem value={30}>МЗС Юр лицо</MenuItem>
                </Select>
                <FormHelperText>With label + helper text</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Нотариус</MenuItem>
                    <MenuItem value={20}>Нотариус + Апостиль</MenuItem>
                    <MenuItem value={30}>Нотариус + Апостиль + Перевод</MenuItem>
                </Select>
                <h1>{age + ' UAH'}</h1>
                <FormHelperText>Without label</FormHelperText>

            </FormControl>

        </div>
    );
}

// service: 'Засвідчення паспортів РФ/Білорусь (з',
// service: 'Засвідчення паспортів РФ/Білорусь (фотокопія',
// service: 'Засвідчення свідоцтв РФ/Білорусь (з',
// service: 'МЗС Физ лицо срочно',
// service: 'МЗС Физ лицо',
// service: 'МЗС Юр лицо срочно',
// service: 'МЗС Юр лицо',
// service: 'МВС,ДПС',
// service: 'Минюст Физ лицо',
// service: 'Минюст Юр лицо',
// service: 'МОН Диплом старого и нового образца',
// service: 'МОН Диплом нового образца',
// service: 'МОН Диплом нового образца',
// service: 'МОН Диплом нового образца',
// service: 'МОН Диплом старого образца',
// service: 'МЗС Физ лицо',   ,
// service: 'МЗС Физ лицо срочно',
