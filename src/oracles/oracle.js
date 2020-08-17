import React, { Component } from 'react';
import './oracle.css';

class Oracle extends Component {
  render() {
    return (
      <div className="Oracle">
        <div>
          pricesList : pricesList
        </div>
        <div>
          owner : owner
        </div>
        <div>
          admin : admin
        </div>
        <div>
          storeManGroups : storeManGroups
        </div>
        <div>
          isDebtClean : isDebtClean
        </div>
        <div>
          upgradeTo : upgradeTo
        </div>
      </div>
    )
  }
}

export default Oracle
