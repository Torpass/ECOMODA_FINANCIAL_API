
import express from 'express';
import router from './routes/index'
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
import swaggerSetUp from "./routes/docs/swagger";



const app = express();

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSetUp));
app.use('/api', router);

export { app };
