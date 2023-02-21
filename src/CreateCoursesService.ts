
interface courser{
    name: string;
    duration: number;
    educator: string;
}

class CreateCoursesService{

    execute({name, duration, educator}: courser){
        console.log(name, duration, educator);

    }
}

export default new CreateCoursesService();