#target "indesign-7.0"
#include "./test.jsx"

win.close();
$.writeln(win['static'].type == 'statictext');