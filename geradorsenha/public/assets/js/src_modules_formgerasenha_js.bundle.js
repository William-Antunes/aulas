"use strict";
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["src_modules_formgerasenha_js"],{

/***/ "./src/modules/formgerasenha.js"
/*!**************************************!*\
  !*** ./src/modules/formgerasenha.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formGeraSenha)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");

var senhagerada = document.querySelector('.senha-gerada');
var qtdcaracteres = document.querySelector('.qtd-caracteres');
var chkmaisculas = document.querySelector('.chk-maisculas');
var chkminusculas = document.querySelector('.chk-minusculas');
var chknumeros = document.querySelector('.chk-numeros');
var chksimbolos = document.querySelector('.chk-simbolos');
var gerarsenha = document.querySelector('.gerar-senha');
function formGeraSenha() {
  gerarsenha.addEventListener('click', function () {
    senhagerada.innerHTML = gera();
  });
}
function gera() {
  var senha = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.geraSenha)(qtdcaracteres.value, chkmaisculas.checked, chkminusculas.checked, chknumeros.checked, chksimbolos.checked);
  return senha;
}

/***/ }

}]);
//# sourceMappingURL=src_modules_formgerasenha_js.bundle.js.map