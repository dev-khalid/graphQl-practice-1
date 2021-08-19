import { nanoid } from "nanoid";

class Course { 
  constructor(id, {
    courseName,category,price,language,email,Stack,teachingAssists
  }) { 
    this.id = id; 
    this.courseName = courseName; 
    this.category = category; 
    this.price  = price; 
    this.language = language; 
    this.email = email; 
    this.Stack = Stack; 
    this.teachingAssists = teachingAssists; 
  }
}

const courseholder = {}; 

const resolvers = {
  getCourse: ({id}) =>  {
    return new Course(id,courseholder[id]); 
  },
  createCourse: ({input}) => { 
    let id = nanoid(); 
    courseholder[id] = input; 
    //eikhane amra data take database rakhte pari .. 
    return new Course(id,input); 
  }
}
export default resolvers; 