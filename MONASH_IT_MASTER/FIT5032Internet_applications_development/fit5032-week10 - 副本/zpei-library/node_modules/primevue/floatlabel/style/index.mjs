import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-floatlabel {\n    display: block;\n    position: relative;\n}\n\n.p-floatlabel label {\n    position: absolute;\n    pointer-events: none;\n    top: 50%;\n    margin-top: -.5rem;\n    transition-property: all;\n    transition-timing-function: ease;\n    line-height: 1;\n    left: 0.75rem;\n    color: ".concat(dt('floatlabel.color'), ";\n    transition-duration: ").concat(dt('floatlabel.transition.duration'), ";\n}\n\n.p-floatlabel:has(textarea) label {\n    top: 1rem;\n}\n\n.p-floatlabel:has(input:focus) label,\n.p-floatlabel:has(input.p-filled) label,\n.p-floatlabel:has(input:-webkit-autofill) label,\n.p-floatlabel:has(textarea:focus) label,\n.p-floatlabel:has(textarea.p-filled) label,\n.p-floatlabel:has(.p-inputwrapper-focus) label,\n.p-floatlabel:has(.p-inputwrapper-filled) label {\n    top: -.75rem;\n    font-size: 12px;\n    color: ").concat(dt('floatlabel.focus.color'), ";\n}\n\n.p-floatlabel .p-placeholder,\n.p-floatlabel input::placeholder,\n.p-floatlabel .p-inputtext::placeholder {\n    opacity: 0;\n    transition-property: all;\n    transition-timing-function: ease;\n}\n\n.p-floatlabel .p-focus .p-placeholder,\n.p-floatlabel input:focus::placeholder,\n.p-floatlabel .p-inputtext:focus::placeholder {\n    opacity: 1;\n    transition-property: all;\n    transition-timing-function: ease;\n}\n\n.p-floatlabel > .p-invalid + label {\n    color: ").concat(dt('floatlabel.invalid.color'), ";\n}\n");
};
var classes = {
  root: 'p-floatlabel'
};
var FloatLabelStyle = BaseStyle.extend({
  name: 'floatlabel',
  theme: theme,
  classes: classes
});

export { FloatLabelStyle as default };
//# sourceMappingURL=index.mjs.map
