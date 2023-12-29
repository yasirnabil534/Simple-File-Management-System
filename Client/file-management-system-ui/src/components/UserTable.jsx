import { Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const StyledTable = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2007" : "#ffffff",
}));

const UserTable = (props) => {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [rowLength, setRowLength] = useState(15);
  const options = [5, 10, 15];
  const [show, setShow] = useState(false);

  useEffect(() => {
    setColumns(() => props.columns);
    setRows(() => props.rows);
  }, [props.columns, props.rows]);

  function Options() {
    if (show) {
      return (
        <div className="absolute rounded-md border w-14 left-0 z-10">
              {options.map((option) => {
                return (
                  <button className="flex justify-center items-center w-full border" onClick={(e) => setRowLength(option)}>
                    {option}
                  </button>
                );
              })}
            </div>
      );
    }
    return null;
  }

  return (
    <>
      <StyledTable>
        <Box sx={{ width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            disableRowSelectionOnClick
            disableColumnMenu
            hideFooter
            columnHeaderHeight={35}
            rowHeight={65}
            getRowId={(row) => row.sl}
            sx={{ '& .MuiDataGrid-columnSeparator': { display: 'none' }, '& .MuiDataGrid-columnHeaders': { backgroundColor: '#F9FAFB'} }}
          />
        </Box>
      </StyledTable>
      <div className='flex mt-4 justify-between'>
        <div className='flex space-x-2'>
          <button className='border-2 mx-1 py-2 px-3 rounded-md'>
            <img src={new URL('../assets/leftKey.svg', import.meta.url)} alt="" />
          </button>
          <input type='text' value={props.page} className="h-9 w-9 p-3 border rounded-sm" />
          <div className='py-[5px]'>/</div>
          <div className='py-[5px]'>{16}</div>
          <button className='border-2 mx-1 py-2 px-3 rounded-md rotate-180'>
            <img src={new URL('../assets/leftKey.svg', import.meta.url)} alt="" />
          </button>
        </div>
        <div className='flex items-center space-x-4'>
          <div className='font-normal'>
            Rows per page
          </div>
          <div className="relative">
            <button className="border rounded-md w-14 h-8 flex justify-evenly items-center" onClick={() => setShow(() => (!show))}>
              <div>{rowLength}</div>
              <img src={new URL('../assets/dropdown.svg', import.meta.url)} alt="" />
            </button>
            <Options />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTable;
