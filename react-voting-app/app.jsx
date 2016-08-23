

/*

   components  

   1. ProductList
   2. Product

*/

const Product = React.createClass({
    handleUpVote: function () {
        this.props.handleUpVote(this.props.id); // on event , calling parent-comp function.
    },
    render: function () {
        return (
            <div className="item">
                <div className="image">
                    <img src={this.props.product_image_url} />
                </div>
                <div className="middle aligned content">
                    <div className="header">
                        <a onClick={this.handleUpVote}>
                            <i className="large caret up icon"></i>
                        </a>
                        {this.props.votes}
                    </div>
                    <div className="description">
                        <a href={this.props.url}> 
                            {this.props.title}
                        </a>
                    </div>
                    <div className="extra">
                        <span> submitted by: </span>
                        <img className="ui avatar image"
                             src={this.props.submitter_avatar_url}/> 
                    </div>    
                </div>
            </div>
        );
    }
});


const ProductList = React.createClass({
    getInitialState: function () {
        return {products:[]};  
    },
    componentDidMount: function () {
        this.updateState();
    },
    updateState: function () {
        const items = Data.sort((a, b) => { return b.votes - a.votes }); // load products ( desc )
        this.setState({products:items});
    },
    handleUpVote: function (productId) {
        //console.log(productId + " was up voted..");
        Data.forEach(product => { 
            if (product.id === productId) {
                product.votes += 1;
            }
        });
        this.updateState();
    },
    render: function () {
        //var product = Data[0];
        //var self = this;
        const products = Data.map((product) => {
            return (
                <Product
                    key={'product-'+product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    product_image_url={product.product_image_url}
                    submitter_avatar_url={product.submitter_avatar_url}
                    handleUpVote={this.handleUpVote}
                />
            );
         });

        return (
            <div className="ui items">
                {products}
            </div>
        );
    }
});

ReactDOM.render(<ProductList />,document.getElementById('root'));


