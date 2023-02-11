import {React} from 'react';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar'
import { Box, Stack } from '@mui/material';
import AddPost from './components/AddPost';

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction= "row" justifyContent="center" spacing = {2}>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
      <AddPost/>
    </Box>
  );
}

export default App;
