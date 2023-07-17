import React from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import Inventory2Icon from '@mui/icons-material/Inventory2';

type Props = {
    title: string;
    description: string;
    icon: any
}
export const CardSpecialties = ({ title, description, icon }: Props) => {
    return (
        <Card
            sx={{ marginBottom: 10 }}
            style={{ boxShadow: 'inherit', padding: '0px 40px' }}>
            <CardHeader
                avatar={icon}
                className="card-icon"
                style={{ flexDirection: 'column' }}
            />
            <CardContent style={{ padding: 0 }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ fontWeight: 'bold' }}
                    sx={{ typography: { sm: 'h5', xs: 'h6', md: 'h5' } }}
                >{title}</Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ lineHeight: '2.1' }}>{description}</Typography>
            </CardContent>
        </Card>
    )
}
