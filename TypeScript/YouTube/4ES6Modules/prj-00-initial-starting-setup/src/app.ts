
import { Post } from './IPost.js'
import * as Posts from './IPost.js'  
import anyNameApplicable from './defaultExport.js'  //import statement for export default
import {Post as Postss} from './IPost.js'

// { Post }
const data = new Post();
console.log(data)

// export default o/p
let abc = new anyNameApplicable()
console.log(abc)


// * as O/P
const data1 = new Posts.Post();
console.log(data1)

const data2 = new Postss();
console.log(data2)

interface Student {
    displayId(id: number);
  }
    
  interface Student {
    displayId(id: string);
  }

  interface Student {
    displayId(id: number);
    displayId(id: string);
   
  }

  const obj : Student;
  console.log(obj.displayId())