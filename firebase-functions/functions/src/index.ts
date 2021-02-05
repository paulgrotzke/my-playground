import * as functions from 'firebase-functions';
import * as express from 'express';
import { getAllTodos } from './todos';

const app = express();

app.get('/todos', getAllTodos);
export const api = functions.region('europe-west1').https.onRequest(app);
