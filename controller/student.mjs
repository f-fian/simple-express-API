
const student = [
    {id:1,name:"alfian",age:24},
    {id:1,name:"alamsyah",age:25},
    {id:1,name:"jayakelana",age:26}
]

export const StudentController = {
    getAllStudent(req,res){
        res.send(student)
    }
}