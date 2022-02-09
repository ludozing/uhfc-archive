import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react';

function PlayerList(props) {
    return (
        <div>
            <ul>
                <li>ALL</li>
                <li>GK</li>
                <li>DF</li>
                <li>MF</li>
                <li>FW</li>
            </ul>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>등번호</TableCell>
                        <TableCell>이름</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            0
                        </TableCell>
                        <TableCell>
                            홍명보
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export default PlayerList;