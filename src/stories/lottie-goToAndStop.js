import React from 'react';
import Lottie from '../index';
import * as animationData from './TwitterHeart.json';

export default class LottieGoToAndStop extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isStopped: false,
      value: 0,
      isFrame: false,
      isPercent: false,
      loop: true,
    };
  }

  render() {
    const centerStyle = {
      display: 'block',
      margin: '10px auto',
      textAlign: 'center',
    };
    const { isStopped, value, isFrame, loop, isPercent } = this.state;
    const defaultOptions = { animationData, loop };

    return (<div>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={isStopped}
        goToAndStop={{
          value,
          isFrame,
          isPercent
        }}
      />

      <p style={centerStyle}>Go to and stop: [value: {value}, isFrame: {isFrame ? 'true' : 'false'}, isPercent: {isPercent ? 'true' : 'false'}]</p>
      <div style={centerStyle}>
        <input
          type="text" value={value}
          onChange={e => this.setState({ value: parseInt(e.currentTarget.value, 10) || 0 })}
        />

        <label htmlFor="isFrame">
          <input
            id="isFrame"
            name="isFrame"
            type="checkbox"
            checked={isFrame}
            onChange={e => this.setState({ isFrame: e.currentTarget.checked })}

          />
          Is frame
        </label>


        <label htmlFor="isPercent">
          <input
            id="isPercent"
            name="isPercent"
            type="checkbox"
            checked={isPercent}
            onChange={e => this.setState({ isPercent: e.currentTarget.checked })}

          />
          Is Percent
        </label>
      </div>
    </div>);
  }
}
