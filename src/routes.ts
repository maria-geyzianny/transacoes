import res from "express/lib/response";
import CreateCoursesService from "./CreateCoursesService";

export function createCourse(request: Request, response: Response){
    
    CreateCoursesService.execute({
        name: "nodejs",
        educator: "Geizy",
        duration: 2
    });

    return ;
}