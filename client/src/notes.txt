import React, { Component } from 'react';
import './DigitalAssets.css';




const btcLogo = <img height="56px" width="56px" src="https://www.coinbase.com/assets/assets/1-8022fd53c251f18cb39cefede445f1c78a3b265989232f0bb46b9c4622e55a9e.png" alt="bitcoin logo"/>
const ethLogo = <img height="56px" width="56px" src="https://www.coinbase.com/assets/assets/1027-99bf2102cc13a51bb226f931b8d0fa4c5b3ca9dc4179167e89d7ee3f677c3fdb.png" alt = "ethereum logo"/> 
const xrpLogo = <img height="56px" width="56px" src="https://www.coinbase.com/assets/assets/52-477a90ea7736b8757b093acef507a9aab6968e7b564e52716deb3803160ee49a.png" alt = "xrp logo"/> 
const defaultLogo = <img src="http://www.w3.org/2000/svg" alt="default logo"/>


class DigitalAssets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            };
        }

        componentDidMount() {
            fetch('https://api.binance.com/api/v1/ticker/24hr')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
        }

    

    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
      return <div>Loading...</div>
        } else {

        return (
            <section className="digital-assets">
                <section className="digital-assets">
                    <table className="mdl-data-table mdl-js-data-table mdl-button--colored" >
                        <thead>
                            <th className="item"></th>
                            <th className="name">Name</th>
                            <th className="description">Description</th>
                            <th className="price">Price</th>
                            <th className="add">Add to cart</th>
                        </thead>
                        <tbody>
                            {items
                            .filter(item => item.symbol === 'BTCUSDT' || item.symbol === 'ETHUSDT' || item.symbol === 'XRPUSDT')
                            .map(item => (
                                <tr>
                                <td>
                                {(() => {
                                    switch (item.symbol) {
                                    case "BTCUSDT":   return btcLogo;
                                    case "ETHUSDT": return ethLogo;
                                    case "XRPUSDT":  return xrpLogo;
                                    default:      return defaultLogo;
                                    }
                                })()}
                               
                                   
                               

                            </td>
                                <td key={item.symbol}>{item.lastPrice}</td>
                                <td>This is {item.symbol}</td>
                                <td id="eth-price">{item.lastPrice}</td>
                                <td><button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="addEthereum()" type="button">Buy</button></td>
                                </tr>

                            ))}
                       </tbody>
                    </table>

                </section>
            </section>
        );
    }
    }
}


export default DigitalAssets;
