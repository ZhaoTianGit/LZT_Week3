
const express = require('express')
const app = express()
const port = 3000

//To anable the Json in Client.http line12
//should defined before using it
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//POST --> create resource
app.post('/', (req, res) => {
  let data = req.body
  res.send('Post Requested  ' + data.name);
})

app.post('/2', (req, res) => {
  let data = req.body
  //res.send('Post Requested' + data.name);
  res.send('Post Requested 2' + JSON.stringify(data));
})

app.get('/bye', (req, res) => {
  res.send('Jya Ne- World!')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

let dbUsers =[
  {
      username: "lee",
      password: "passwordlee",
      name: "lee zhao tian",
      email: "lzt@gmail.com"
  },
  {
      username: "hee",
      password: "passwordhee",
      name: "hee yee cinn",
      email: "hyc@gmail.com"
  },
  {
      username: "wee",
      password: "passwordwee",
      name: "wee mao phin",
      email: "wmp@gmail.com"
  }
] 

function login(username, password){
  console.log("someone try to login with",username , password);
  let matched = dbUsers.find(Element =>
      Element.username == username
  )
  if(matched){
      if(matched.password == password){
          return matched
      }else{
          return "Password not matched"
      }
  }else {
      return "User not found"
  }
}

app.post('/login2', (req, res) => {
  let data = req.body
  res.send(
    login(
      data.username,
      data.password
    )
  );
})

app.post('/login', (req,res) =>{
  
  const { username, password }= req.body;

  const user =dbUsers.find(user => user.username === username && user.password === password);

  if(user){
    res.send(user);
  }else{
    res.send({error: "User not found "});
  }
})

