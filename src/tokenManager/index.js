import React, { Component } from 'react';
import './index.css';

class TokenManager extends Component {
  // TODO: update remove tokenPair
  render() {
    return (
      <div className="TokenManager">
        <div>
          blockChain : blockChain
        </div>
        <div>
          tokenPairs : tokenPairs
        </div>
        <div>
          admin : admin
        </div>
        <div>
          token : token
        </div>
        <div>
          owner : owner
        </div>
        <div>
          totalTokenPairs : totalTokenPairs
        </div>
        <div>
          upgradeTo : upgradeTo
        </div>
      </div>
    )
  }
}

export default TokenManager