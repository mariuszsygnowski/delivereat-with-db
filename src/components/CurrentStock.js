import React from 'react';
import SingleProduct from './SingleProduct';


class CurrentStock extends React.Component {
    constructor() {
        super();
        // this.state = {
        //     quantity: 0
        // }
        // this.onChangeHandle = this.onChangeHandle.bind(this);

    }


    // onChangeHandleAddress (event) {
    //     this.props.addressSet(event.target.value)
    // }


    render() {

        return (
            <div className='currentStock container'>
                <div className="currentStock__stockList">
                    {this.props.menuItems.map(item => {
                        // console.log(item);
                        
                        return <SingleProduct
                            key={item.id}
                            singleItem={item}
                            basketItem={this.props.basketItem}
                        />;
                    })}
                </div>
                {/* <div className="currentStock__deliveryCharge">
                    <p>Set delivery charge: £</p>
                    <input type="number" value={this.props.deliveryCharge} onChange={this.onChangeHandle} />
                </div>
                <div className='currentStock__address'>
                    <p>Delivery address</p>
                    <p><input type="text" value={this.props.deliveryAddress} onChange={this.onChangeHandleAddress} /></p>
                </div> */}
            </div>
        )
    }
}

export default CurrentStock;