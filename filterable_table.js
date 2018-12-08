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

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props)

        this.state = {filterText:'o', inStockOnly:false}
    }

    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
                <ProductTable products={getData()} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
            </div>
        )

    }
}

class SearchBar extends React.Component {
    render() {
        const handlerFilterChange = () => {
            
        }

        const handlerInStockChange = () => {
            
        }

        return (
            <form>
                <input name="filterText" type="text" value={this.props.filterText} onChange={handlerFilterChange}/> <br/>
                <input name="inStockOnly" type="checkbox" checked={this.props.inStockOnly} onChange={handlerInStockChange}/>
                Only show products in stock
            </form>
        )
    }
}

class ProductTable extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        const rows = []

        let products = this.props.products
        if(this.props.filterText != '') {
            products = this.props.products.filter(product =>
                product.name.indexOf(this.props.filterText) != -1
            )
        }

        const categories = Array.from(new Set(products.map(product => product.category)))
        
        const productsForCategory = (category) => {
            return products.filter(product => product.category == category)
        }

        categories.forEach(category => {
            rows.push(<ProductCategoryRow category={category} key={category}/>)

            productsForCategory(category).forEach(product => {
                rows.push(<ProductRow product={product} key={product.name}/>)
            });
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody> 
                    {rows}
                </tbody>
            </table>
        )
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

class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr>
                <th colSpan="2">{this.props.category}</th>
            </tr>
        )
    }
}

const element = <FilterableProductTable />
ReactDOM.render(
  element,
  document.getElementById('filterable_table_container')
)