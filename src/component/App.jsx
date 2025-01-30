import Product from "./Product"
let products = [
    {
      title: "watch",
      feature: true,
      price: 1000,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci assumenda blanditiis libero voluptas nisi mollitia itaque alias dolore vero quas! Amet, porro atque vero reprehenderit dolorum quia nostrum possimus tempora."
    },
    {
      title: "keyboard",
      feature: false,
      price: 2000,
      description: "lorem lorem lorem lorem "
    },
    {
      title: "mouse",
      feature: true,
      price: 1500,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta a delectus deserunt eos quas nemo in voluptate est atque totam unde sit molestias provident incidunt, voluptatibus nam ipsa modi illum."
    },
    {
        title: "Printer",
        feature: false,
        price: 5000,
        description: "lorem lorem lorem lorem "
      }
  ]
  let heading = "Featured Products list"

function App() {

return <div>
    <h1>{heading}</h1>
{
    products.map((el,index) => {
        if (el.feature == true ) {
            return(    
            <Product title = {el.title} key={index} price = {el.price} description = {el.description} />
            )
        }

    })
}
<hr></hr>
<h1>normal product list</h1>
{
    products.map((el,index) => {
        if (el.feature == false ) {
            return(    
            <Product title = {el.title} key={index} price = {el.price} description = {el.description} />
            )
        }

    })
}
    </div>
  }
  {undefined}
  {null}
  {true}
  [false]
export default App
