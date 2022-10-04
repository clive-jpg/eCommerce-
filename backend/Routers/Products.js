class ProductRouter {
    constructor(express, productService) {
      this.express = express;
      this.productService = productService;
    
    }
    router() {
        let router = this.express.Router();
    
        router.get("/show_product", this.showProduct.bind(this));
        // router.post("/signup", this.signup.bind(this));
        return router;
      }

      async showProduct(req,res){
          let response = await(this.productService.showProduct());
          return res.send(response);
      }
}
module.exports = ProductRouter;
