function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var index = {
  root: {
    background: '{form.field.background}',
    disabledBackground: '{form.field.disabled.background}',
    filledBackground: '{form.field.filled.background}',
    filledFocusBackground: '{form.field.filled.focus.background}',
    borderColor: '{form.field.border.color}',
    hoverBorderColor: '{form.field.hover.border.color}',
    focusBorderColor: '{form.field.focus.border.color}',
    invalidBorderColor: '{form.field.invalid.border.color}',
    color: '{form.field.color}',
    disabledColor: '{form.field.disabled.color}',
    placeholderColor: '{form.field.placeholder.color}',
    shadow: '{form.field.shadow}',
    paddingX: '{form.field.padding.x}',
    paddingY: '{form.field.padding.y}',
    borderRadius: '{form.field.border.radius}',
    focusRing: {
      width: '{form.field.focus.ring.width}',
      style: '{form.field.focus.ring.style}',
      color: '{form.field.focus.ring.color}',
      offset: '{form.field.focus.ring.offset}',
      shadow: '{form.field.focus.ring.shadow}'
    },
    transitionDuration: '{form.field.transition.duration}'
  },
  dropdown: {
    width: '2.5rem',
    color: '{form.field.icon.color}'
  },
  overlay: {
    background: '{overlay.select.background}',
    borderColor: '{overlay.select.border.color}',
    borderRadius: '{overlay.select.border.radius}',
    color: '{overlay.select.color}',
    shadow: '{overlay.select.shadow}'
  },
  list: {
    padding: '{list.padding}',
    gap: '{list.gap}',
    header: {
      padding: '{list.header.padding}'
    }
  },
  option: {
    focusBackground: '{list.option.focus.background}',
    selectedBackground: '{list.option.selected.background}',
    selectedFocusBackground: '{list.option.selected.focus.background}',
    color: '{list.option.color}',
    focusColor: '{list.option.focus.color}',
    selectedColor: '{list.option.selected.color}',
    selectedFocusColor: '{list.option.selected.focus.color}',
    padding: '{list.option.padding}',
    borderRadius: '{list.option.border.radius}',
    gap: '0.5rem'
  },
  optionGroup: _defineProperty(_defineProperty(_defineProperty(_defineProperty({
    background: '{list.option.group.background}',
    color: '{list.option.group.color}'
  }, "background", '{list.option.group.background}'), "color", '{list.option.group.color}'), "fontWeight", '{list.option.group.font.weight}'), "padding", '{list.option.group.padding}'),
  chip: {
    borderRadius: '{border.radius.sm}'
  },
  emptyMessage: {
    padding: '{list.option.padding}'
  }
};

export { index as default };
//# sourceMappingURL=index.mjs.map
