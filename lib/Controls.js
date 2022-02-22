import React from 'react';
import { usePicker } from './context';
import GradientBar from './GradientBar';

const Controls = () => {
  const {
    isGradient,
    onChange,
    gradientType
  } = usePicker();
  const isLinear = gradientType === 'linear-gradient';

  const setSolid = () => {
    onChange('rgba(175, 51, 242, 1)');
  };

  const setGradient = () => {
    onChange('linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)');
  };

  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 12,
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "25%"
    }
  }, isGradient && /*#__PURE__*/React.createElement(GradientType, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderRadius: 6,
      cursor: 'pointer',
      fontWeight: 700,
      color: '#8c8c8f',
      height: 28,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 12,
      paddingRight: 12,
      background: isGradient ? 'white' : '#568CF5',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      lineHeight: 1,
      color: isGradient ? '' : 'white',
      borderRadius: 6
    },
    onClick: setSolid
  }, "Solid"), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 12,
      paddingRight: 12,
      background: isGradient ? '#568CF5' : 'white',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      lineHeight: 1,
      color: isGradient ? 'white' : '',
      borderRadius: 6
    },
    onClick: setGradient
  }, "Gradient")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "25%"
    }
  }, isLinear && isGradient && /*#__PURE__*/React.createElement(DegreePicker, null)));
};

export default Controls;

const GradientType = () => {
  const {
    gradientType,
    onChange,
    value
  } = usePicker();

  const handleLinear = () => {
    const remaining = value.split(/,(.+)/)[1];
    onChange(`linear-gradient(90deg, ${remaining}`);
  };

  const handleRadial = () => {
    const remaining = value.split(/,(.+)/)[1];
    onChange(`radial-gradient(circle, ${remaining}`);
  };

  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderRadius: 4,
      cursor: 'pointer',
      fontWeight: 700,
      color: '#8c8c8f',
      width: '30%',
      background: 'blue'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 2,
      background: 'white',
      borderRadius: 6,
      boxShadow: '0px 0px 2px 1px #8c8c8f',
      marginRight: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(90deg, rgba(96,93,93,1) 0%, rgba(255,255,255,1) 100%)',
      width: 28,
      height: 28,
      borderRadius: 6
    },
    onClick: handleLinear
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 2,
      background: 'white',
      borderRadius: 6,
      boxShadow: '0px 0px 2px 1px #8c8c8f',
      marginRight: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'radial-gradient(circle, rgba(96,93,93,1) 0%, rgba(255,255,255,1) 100%)',
      width: 28,
      height: 28,
      borderRadius: 6
    },
    onClick: handleRadial
  })));
};

const DegreePicker = () => {
  const {
    degrees,
    value,
    onChange
  } = usePicker();

  const handleDegrees = e => {
    let num = parseInt(e.target.value);
    let nans = isNaN(num) ? 0 : num;
    let min = Math.max(nans, 0);
    let max = Math.min(min, 360);
    const remaining = value.split(/,(.+)/)[1];
    onChange(`linear-gradient(${max}deg, ${remaining}`);
  };

  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "input-wrap",
    style: {
      marginLeft: 8,
      width: 44
    },
    value: degrees,
    onChange: e => handleDegrees(e)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 4,
      top: 0,
      fontWeight: 400
    }
  }, "\xB0"));
};