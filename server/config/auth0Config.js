import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "https://property-mangement-app.vercel.app/",
    issuerBaseURL: "https://dev-n361pzjr66uahas0.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck