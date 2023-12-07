const baseURL='https://jsonplaceholder.typicode.com'

const users='/users'

const posts='/posts'

const urls={
  users:{
    base:`${baseURL}${users}`
  },
  posts:{
    byUserId:(userId:number):string=>`${baseURL}${users}/${userId}${posts}`
  }
}

export {urls}
