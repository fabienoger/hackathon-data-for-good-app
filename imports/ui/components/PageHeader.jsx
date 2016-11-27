import React              from 'react';

export default class PageHeader extends React.Component {
  render() {
    const heightFifty = {
      height: "50%"
    }
    return (
      <div id="page-header">
        <div style={heightFifty}>
          <img height="100%" width="100%" src="/images/home_background.png" />
        </div>
        <div style={heightFifty} className="presentation">
          <h1 className="text-center">Présentation</h1>
          <div className="divider" style={{width: "25%", margin: "auto"}}></div>
          <div style={{width: "60%", padding: "50px"}} className="centered">
            <p className="text-center">Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
            <p className="text-center">Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</p>
          </div>
        </div>
      </div>
    )
  }
}
