// src/components/Team.tsx
import React from 'react';
import {styled, useTheme} from '@mui/styles';
import {Paper, Typography} from '@mui/material';
import {TeamName, UserSummary} from "@root/sc-webcore-lib";

export type TeamProps = {
    name: string;
    image: string;
};

const Team: React.FC<TeamProps> = ({name, image}) => {
    const theme = useTheme();

    return (
        <Paper>
            <img src={image} alt={`${name}`} width="100"/>
            <Typography variant="h6">{name}</Typography>
            <TeamName name={name}/>
            {/*<UserSummary stats={{}} user={{}} sports={['soccer', 'hockey']}/>*/}
            <TeamLabel title={name}>
                Hello
            </TeamLabel>
        </Paper>
    );
};

const TeamLabel = styled("div")({
    fontWeight: 500,
    fontSize: "44px",
    lineHeight: "17px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
});

export default Team;
