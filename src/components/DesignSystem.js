import React from 'react';

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

// Badge.jsx
/**
 * I Lease Motors — Badge / pill label.
 * Small uppercase tag. Used in trust bars and meta. Zero radius.
 */
function Badge({
  children,
  variant = 'gold',
  style = {},
  ...rest
}) {
  const variants = {
    gold: {
      background: 'var(--gold-tint)',
      color: 'var(--gold)',
      border: '1px solid var(--gold-line)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-2)',
      border: '1px solid var(--line-strong)'
    },
    solid: {
      background: 'var(--gold)',
      color: 'var(--accent-on)',
      border: '1px solid var(--gold)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "ilm-badge",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      padding: '6px 12px',
      borderRadius: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      lineHeight: 1,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}

// Button.jsx
/**
 * I Lease Motors — Button.
 * Sharp rectangle, zero radius. Primary = gold fill / black text, DARKENS on hover.
 * Secondary = ghost, white 50% border, fills gold-tint on hover.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  fullWidth = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '10px 18px',
      fontSize: 13
    },
    md: {
      padding: '14px 26px',
      fontSize: 14
    },
    lg: {
      padding: '18px 34px',
      fontSize: 15
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-8)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase',
    borderRadius: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1px solid transparent',
    transition: 'background var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out), color var(--dur) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.45 : 1,
    whiteSpace: 'nowrap',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--gold)',
      color: 'var(--accent-on)',
      borderColor: 'var(--gold)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-1)',
      borderColor: 'var(--line-ghost)'
    },
    quiet: {
      background: 'transparent',
      color: 'var(--text-1)',
      borderColor: 'transparent'
    }
  };
  const hover = (e, on) => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === 'primary') {
      el.style.background = on ? 'var(--gold-deep)' : 'var(--gold)';
      el.style.borderColor = on ? 'var(--gold-deep)' : 'var(--gold)';
    } else if (variant === 'secondary') {
      el.style.background = on ? 'var(--gold-tint)' : 'transparent';
      el.style.borderColor = on ? 'var(--gold)' : 'var(--line-ghost)';
      el.style.color = on ? 'var(--gold)' : 'var(--text-1)';
    } else {
      el.style.color = on ? 'var(--gold)' : 'var(--text-1)';
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "ilm-button",
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: e => hover(e, true),
    onMouseLeave: e => hover(e, false)
  }, rest), children);
}

// Card.jsx
/**
 * I Lease Motors — Card / panel.
 * Zero radius. Depth via surface color shift (#161616 -> #202020).
 * Optional hover: gentle translateY lift + brightness, plus a gold top reveal.
 */
function Card({
  children,
  interactive = false,
  accentTop = false,
  padding = 'var(--space-32)',
  style = {},
  ...rest
}) {
  const base = {
    position: 'relative',
    background: 'var(--surface-card)',
    border: '1px solid var(--border-1)',
    borderRadius: 0,
    padding,
    transition: 'background var(--dur) var(--ease-out), transform var(--dur) var(--ease-out), filter var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)',
    ...style
  };
  const onEnter = e => {
    if (!interactive) return;
    const el = e.currentTarget;
    el.style.background = 'var(--surface-card-hover)';
    el.style.transform = 'translateY(var(--lift))';
    el.style.filter = 'brightness(1.06)';
    el.style.borderColor = 'var(--line-strong)';
    const bar = el.querySelector('[data-accent-bar]');
    if (bar) bar.style.transform = 'scaleX(1)';
  };
  const onLeave = e => {
    if (!interactive) return;
    const el = e.currentTarget;
    el.style.background = 'var(--surface-card)';
    el.style.transform = 'translateY(0)';
    el.style.filter = 'none';
    el.style.borderColor = 'var(--border-1)';
    const bar = el.querySelector('[data-accent-bar]');
    if (bar) bar.style.transform = 'scaleX(0)';
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "ilm-card",
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), accentTop && /*#__PURE__*/React.createElement("span", {
    "data-accent-bar": true,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 2,
      background: 'var(--gold)',
      transform: 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform var(--dur) var(--ease-out)'
    }
  }), children);
}

// Eyebrow.jsx
/**
 * I Lease Motors — Eyebrow / kicker label.
 * Uppercase, gold, wide tracking. Sits above section headings.
 */
function Eyebrow({
  children,
  tick = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: 'ilm-eyebrow' + (tick ? ' ilm-eyebrow--tick' : ''),
    style: style
  }, rest), children);
}

// Icon.jsx
/**
 * I Lease Motors — Icon.
 * Line icons (2px stroke) drawn from the open-source Lucide set, inlined so the
 * design system has no external icon dependency. Inherits color via currentColor.
 */
const PATHS = {
  phone: /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  }),
  mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
  })),
  'map-pin': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 6 12 12 16 14"
  })),
  check: /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }),
  'arrow-right': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  })),
  'arrow-up-right': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 7h10v10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 17 17 7"
  })),
  'chevron-right': /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }),
  menu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18"
  })),
  x: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  })),
  star: /*#__PURE__*/React.createElement("polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
  }),
  shield: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })),
  car: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "17",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 17h6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "17",
    r: "2"
  })),
  key: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 2-9.6 9.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7.5",
    cy: "15.5",
    r: "5.5"
  })),
  users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75"
  })),
  'file-text': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 13H8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 17H8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 9H8"
  })),
  handshake: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m11 17 2 2a1 1 0 1 0 3-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 3 1 11h-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 4h8"
  })),
  dollar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "22"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
  })),
  'log-out': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "16 17 21 12 16 7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    x2: "9",
    y1: "12",
    y2: "12"
  })),
  quote: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
  }))
};
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'inline-block',
      flexShrink: 0,
      ...style
    },
    "aria-hidden": "true"
  }, rest), PATHS[name] || null);
}

// Input.jsx
/**
 * I Lease Motors — Text input.
 * Sharp rectangle on surface-3, gold border on focus. Optional label.
 */
function Input({
  label,
  id,
  hint,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-2)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: "ilm-input",
    style: {
      background: 'var(--surface-input)',
      border: '1px solid var(--line-strong)',
      borderRadius: 0,
      color: 'var(--text-1)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      padding: '13px 16px',
      width: '100%',
      outline: 'none',
      transition: 'border-color var(--dur) var(--ease-out), background var(--dur) var(--ease-out)',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--gold)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = 'var(--line-strong)';
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-3)'
    }
  }, hint));
}

// Select.jsx
/**
 * I Lease Motors — Select. Matches Input styling, gold focus border.
 */
function Select({
  label,
  id,
  hint,
  children,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-2)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    className: "ilm-select",
    style: {
      appearance: 'none',
      background: 'var(--surface-input)',
      border: '1px solid var(--line-strong)',
      borderRadius: 0,
      color: 'var(--text-1)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      padding: '13px 40px 13px 16px',
      width: '100%',
      outline: 'none',
      cursor: 'pointer',
      transition: 'border-color var(--dur) var(--ease-out)',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--gold)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = 'var(--line-strong)';
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 8,
      height: 8,
      borderRight: '1.5px solid var(--gold)',
      borderBottom: '1.5px solid var(--gold)',
      rotate: '45deg',
      pointerEvents: 'none'
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-3)'
    }
  }, hint));
}

// Textarea.jsx
/**
 * I Lease Motors — Textarea. Matches Input styling.
 */
function Textarea({
  label,
  id,
  hint,
  rows = 4,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-2)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    className: "ilm-textarea",
    style: {
      background: 'var(--surface-input)',
      border: '1px solid var(--line-strong)',
      borderRadius: 0,
      color: 'var(--text-1)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      padding: '13px 16px',
      width: '100%',
      outline: 'none',
      resize: 'vertical',
      transition: 'border-color var(--dur) var(--ease-out)',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--gold)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = 'var(--line-strong)';
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-3)'
    }
  }, hint));
}


export { Badge, Button, Card, Eyebrow, Icon, Input, Select, Textarea };
