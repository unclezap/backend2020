// fetch('http://localhost:3000/api/v1/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json'
//   },
//   body: JSON.stringify({
//     user: {
//       username: "unclezap",
//       password: "the_eagle_flies_at_night"
//     }
//   })
// })
//   .then(r => r.json())
//   .then(data => console.log(data))

for (let i=0;i<20;i++) {
  console.log(Math.floor(Math.random()*2))
}