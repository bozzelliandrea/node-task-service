import express from 'express';
import {connect} from './src/db/config/connection';
import {user} from './src/api/user/user';

// database connection
try{
  connect();
} catch(error) {
  console.error(error);
}

const app = express();
const PORT = 8000;

app.get('/', (req: any, res: any) => res.send('Express + TypeScript Server'));

app.use('/api', user);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});