import app from './app';

import { SERVER_CONFIG } from './config/server';


const PORT = SERVER_CONFIG.PORT;




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});