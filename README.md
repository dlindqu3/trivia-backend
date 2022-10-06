## notes 
- store 10 question obj from API in local storage? cookies? 
- user obj: username, pass, scores, avg score 

// Other schema, quiz: 
// userID
// questions 
// options
// averageScore
// currentCorrect
// currentQuestion

## notes 
- one way to manage authentication between frontend and backend: JWT 
- JWT process: 
  - when a user sends a successful sign-up req from frontend to backend, backend generates a JWT token 
  - sends token to frontend 
  - presence of token tells frontend that there's a logged in user 
- parts of a JWT token: 
  - header, payload, signature 
    - header: has the algorithm used for the JWT 
    - payload: non-sensitive user data here
    - signature: used to verify the token by server and make sure it hasn't been altered 
- JWT process: 
  - successful signin/signup
  - server generates a token
    - token includes a header and payload, then these are hashed with a secret string known only to server, result is a signature 
    - secret string: keep it secret, keep it safe 
  - later, a given request's header + payload are hashed into a secret, which must match the signature on the server 
  - don't publish secret in code 