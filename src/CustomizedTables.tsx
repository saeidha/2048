import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#8f7a66',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

type Player = {
    name: string;
    score: number;
  }


interface CustomizedTablesProps {
    players: Player[]; // Define the shape of the items prop
  }

export default function CustomizedTables(palyers: CustomizedTablesProps) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 20 }}>
            <TableContainer component={Paper} sx={{ width: 500 }}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Top Players</StyledTableCell>
                            <StyledTableCell align="right">Score</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {palyers.players.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.score}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}
