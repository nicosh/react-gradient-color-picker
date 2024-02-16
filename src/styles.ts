export const coreCss = {
  '@global': {
    body: {
      boxSizing: 'border-box',
    },
  },
  ac: {
    display: 'flex',
    alignItems: 'center',
  },
  jc: {
    display: 'flex',
    justifyContent: 'center',
  },
  jsb: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  psRl: {
    position: 'relative',
  },
  cResize: {
    cursor: 'ew-resize',
  },
  cCross: {
    cursor: 'crosshair',
  },
  rbgcpControlBtn: {
    paddingLeft: '8px',
    paddingRight: '8px',
    lineHeight: '1',
    borderRadius: '4px',
    fontWeight: '700',
    fontSize: '12px',
    height: '24px',
    transition: 'all 160ms ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0)',
    boxShadow: '1px 1px 3px rgba(0, 0, 0, 0)',
    color: 'rgb(86, 86, 86)',
  },
  rbgcpControlIcon: {
    stroke: 'rgb(50, 49, 54)',
  },
  rbgcpControlIconBtn: {
    width: '30px',
    height: '24px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  rbgcpControlBtnWrapper: {
    height: '28px',
    background: '#e9e9f5',
    borderRadius: '6px',
    padding: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  rbgcpColorModelDropdown: {
    position: 'absolute',
    right: '-2px',
    top: '34px',
    padding: '5px',
    background: '#e9e9f5',
    zIndex: '100000000',
    borderRadius: '6px',
    boxShadow: '1px 1px 14px 1px rgba(0, 0, 0, 0.25)',
  },
  rbgcpEyedropperCover: {
    position: 'fixed',
    left: '0px',
    top: '0px',
    zIndex: '100000000',
    width: '100vw',
    height: '100vh',
    cursor: 'copy',
  },
  rbgcpControlInput: {
    height: '24px',
    borderRadius: '4px',
    border: 'none',
    outline: 'none',
    textAlign: 'center',
    width: '34px',
    fontWeight: '500',
    color: 'rgb(50, 49, 54)',
    fontSize: '13px',
    background: 'transparent',
  },
  rbgcpInputLabel: {
    textAlign: 'center',
    lineHeight: '1.2',
    fontWeight: '700',
    color: 'rgb(86, 86, 86)',
    fontSize: '11px',
  },
  rbgcpInput: {
    height: '32px',
    borderRadius: '6px',
    border: '1px solid #bebebe',
    width: '100%',
    padding: '2px',
    outline: 'none',
    color: 'black',
    fontWeight: '400',
    textAlign: 'center',
  },
  rbgcpHandle: {
    position: 'absolute',
    border: '2px solid white',
    borderRadius: '50%',
    boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)',
    width: '18px',
    height: '18px',
    zIndex: '1000',
    transition: 'all 10ms linear',
  },
  rbgcpCanvasWrapper: {
    borderRadius: '6px',
    overflow: 'hidden',
    height: '294px',
  },
  rbgcpCheckered: {
    background:
      'linear-gradient(45deg, rgba(0, 0, 0, 0.18) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.18) 75%, rgba(0, 0, 0, 0.18) 0), linear-gradient(45deg, rgba(0, 0, 0, 0.18) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.18) 75%, rgba(0, 0, 0, 0.18) 0), white',
    backgroundRepeat: 'repeat, repeat',
    backgroundPosition: '0px 0, 7px 7px',
    WebkitTransformOrigin: '0 0 0',
    transformOrigin: '0 0 0',
    WebkitBackgroundOrigin: 'padding-box, padding-box',
    backgroundOrigin: 'padding-box, padding-box',
    WebkitBackgroundClip: 'border-box, border-box',
    backgroundClip: 'border-box, border-box',
    WebkitBackgroundSize: '14px 14px, 14px 14px',
    backgroundSize: '14px 14px, 14px 14px',
    WebkitBoxShadow: 'none',
    boxShadow: 'none',
    textShadow: 'none',
    WebkitTransition: 'none',
    MozTransition: 'none',
    OTransition: 'none',
    transition: 'none',
    WebkitTransform: 'scaleX(1) scaleY(1) scaleZ(1)',
    transform: 'scaleX(1) scaleY(1) scaleZ(1)',
    borderRadius: '10px',
  },
  rbgcpOpacityOverlay: {
    position: 'absolute',
    left: '0px',
    top: '0px',
    width: '100%',
    height: '100%',
    borderRadius: '10px',
  },
  rbgcpGradientHandleWrap: {
    position: 'absolute',
    zIndex: '10000',
    top: '-2px',
    outline: 'none',
  },
  rbgcpGradientHandle: {
    border: '2px solid white',
    borderRadius: '50%',
    boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)',
    width: '18px',
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rbgcpControlIcon2: {
    fill: '#323136',
  },
  rbgcpControlBtnSelected: {
    background: 'white',
    color: '#568cf5',
    boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',
  },
  rbgcpComparibleLabel: {
    color: '#323136',
  },
}

export const darkCss = {
  '@media (prefers-color-scheme: dark)': {
    rbgcpInputLabel: {
      color: 'rgb(212, 212, 212)',
    },
    rbgcpControlBtnWrapper: {
      background: 'rgb(54, 54, 54)',
    },
    rbgcpInput: {
      border: 'none',
      color: 'white',
      background: 'rgb(54, 54, 54)',
    },
    rbgcpControlBtn: {
      color: 'rgb(212, 212, 212)',
    },
    rbgcpControlIcon: {
      stroke: 'rgb(212, 212, 212)',
    },
    rbgcpControlIcon2: {
      fill: 'rgb(212, 212, 212)',
    },
    rbgcpControlInput: {
      color: 'white',
    },
    rbgcpControlBtnSelected: {
      background: 'black',
      color: '#568cf5',
    },
    rbgcpDegreeIcon: {
      color: 'rgb(212, 212, 212)',
    },
    rbgcpColorModelDropdown: {
      background: 'rgb(32, 32, 32)',
    },
    rbgcpComparibleLabel: {
      color: 'rgb(212, 212, 212)',
    },
  },
}