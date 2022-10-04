class AdminRouter {
    constructor(express, adminService) {
      this.express = express;
      this.adminService = adminService;
    }
    router() {
      let router = this.express.Router();
  
      router.post("/login", this.login.bind(this));
      router.post("/signup", this.signup.bind(this));
      return router;
    }
  
    login(req, res) {
      return this.adminService
        .login(req.body.email, req.body.password)
        .then((token) => {
          res.json(token);
          console.log("Sign complete")
        })
        .catch(() => res.sendStatus(401));
    }
  
    signup(req, res) {
      return this.asminService
        .signup(req.body.name,req.body.email , req.body.password)
        .then((result) => {
          res.send(result);
        })
        .catch(() => res.sendStatus(401));
    }
  }
  module.exports = AdminRouter;
  