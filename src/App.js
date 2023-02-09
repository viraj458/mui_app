import {React} from 'react';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import { Box } from '@mui/material';

function App() {
  return (
    <Box>
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </Box>
  );
}

export default App;
