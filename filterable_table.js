function getData() {
    return [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
      ]
}

function HelloWorld(props) {
    return <h1>Hello World!</h1>
}

class FilterableProductTable extends React.Component {
    render() {
        return <h1>FilterableProductTable</h1>
    }
}

class SeachBar extends React.Component {
    render() {
        return (
            <form>
                <input type="text" /> <br/>
                <input name="inStock" type="checkbox" />
                Only show products in stock
            </form>
        )
    }
}

class ProductTable extends React.Component {
    render() {
        const listProducts = this.props.products.map( (product) => 
            <ProductRow product={product} key={product.name}/>
        )
        return (
            <tbody>
                {listProducts}
            </tbody>
        )
    }
}

class ProductCategoryRow extends React.Component {
    render() {
        return <h1>ProductCategoryRow</h1>
    }
}

class ProductRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}
const product = {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"}
const element = <table><ProductTable products={getData()} /></table>
ReactDOM.render(
  element,
  document.getElementById('filterable_table_container')
)