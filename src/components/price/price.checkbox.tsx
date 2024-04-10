import {Checkbox} from "@mui/material";
import {GridRenderCellParams} from "@mui/x-data-grid";
import React from "react";

export function RenderCheckBox(props: GridRenderCellParams<any, boolean>) {
    const [checked, setChecked] = React.useState(props.value); // Initiated react binded value with param from `rows`

    // Handler for user clicks to set checkbox mark or unset it
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    //The bind for dynamic mark/unmark: checked={checked}
    //The handler for user clicks: onChange={handleChange}
    return (
        <Checkbox
            size="large"
            checked={checked}
            onChange={handleChange}
        />
    );
}