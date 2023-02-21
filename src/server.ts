import express from 'express';
import CreateCoursesService from './CreateCoursesService';
import { createCourse } from './routes';

const app = express();

app.get('/', (request: any, response: any) =>{
    console.log(createCourse);
});

app.listen(3333);