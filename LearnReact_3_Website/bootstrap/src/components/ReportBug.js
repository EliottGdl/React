import React from 'react';
import {Button} from 'react-bootstrap'

function help() {
    alert("There is a bug")
}

export const ReportBug = () => (
        <Button variant = "danger" onClick={help}> Report a bug </Button>
);