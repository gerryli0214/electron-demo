(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{17:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./web/src/views/voice-record/index.vue?vue&type=template&id=02486ac4&\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c("div", { staticClass: "full" })\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n// CONCATENATED MODULE: ./web/src/views/voice-record/index.vue?vue&type=template&id=02486ac4&\n\n// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"\nvar asyncToGenerator_ = __webpack_require__(11);\nvar asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);\n\n// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"\nvar classCallCheck_ = __webpack_require__(12);\nvar classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);\n\n// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"\nvar createClass_ = __webpack_require__(13);\nvar createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);\n\n// EXTERNAL MODULE: external "@babel/runtime/regenerator"\nvar regenerator_ = __webpack_require__(14);\nvar regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);\n\n// CONCATENATED MODULE: ./web/src/lib/voice-handler.js\n\n\n\n\n\n/**\r\n * @description 前端处理音频数据\r\n */\nvar voice_handler_VoiceHandler = /*#__PURE__*/function () {\n  function VoiceHandler() {\n    classCallCheck_default()(this, VoiceHandler);\n\n    this.init();\n  }\n\n  createClass_default()(VoiceHandler, [{\n    key: "init",\n    value: function init() {\n      this.voiceRecordDeviceList = []; // web端录音需要用户权限授权，仅当localhost && https服务下可用\n\n      this.isCanRecord = window.navigator.mediaDevices;\n    }\n  }, {\n    key: "getRecordList",\n    value: function () {\n      var _getRecordList = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {\n        var devices, result, index, element, pattern, label, item;\n        return regenerator_default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (this.isCanRecord) {\n                  _context.next = 2;\n                  break;\n                }\n\n                return _context.abrupt("return", this.voiceRecordDeviceList);\n\n              case 2:\n                _context.next = 4;\n                return window.navigator.mediaDevices.enumerateDevices();\n\n              case 4:\n                devices = _context.sent;\n                result = [];\n                index = 0;\n\n              case 7:\n                if (!(index < devices.length)) {\n                  _context.next = 17;\n                  break;\n                }\n\n                element = devices[index];\n\n                if (element.audioinput) {\n                  _context.next = 11;\n                  break;\n                }\n\n                return _context.abrupt("continue", 14);\n\n              case 11:\n                pattern = new RegExp();\n                label = element.label.replace();\n                item = {\n                  groupId: element.groupId,\n                  label: label\n                };\n\n              case 14:\n                index++;\n                _context.next = 7;\n                break;\n\n              case 17:\n              case "end":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function getRecordList() {\n        return _getRecordList.apply(this, arguments);\n      }\n\n      return getRecordList;\n    }()\n  }]);\n\n  return VoiceHandler;\n}();\n\n/* harmony default export */ var voice_handler = (voice_handler_VoiceHandler);\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./web/src/views/voice-record/index.vue?vue&type=script&lang=js&\n//\n//\n//\n//\n//\n\n/* harmony default export */ var voice_recordvue_type_script_lang_js_ = ({\n  name: \'voiceRecord\',\n  data: function data() {\n    return {\n      voiceInstance: null\n    };\n  },\n  mounted: function mounted() {\n    this.voiceInstance = new voice_handler();\n\n    if (!this.voiceInstance.isCanRecord) {\n      this.$message.error(\'当前浏览器不支持录音\');\n      return;\n    }\n\n    this.voiceInstance.getRecordList();\n  }\n});\n// CONCATENATED MODULE: ./web/src/views/voice-record/index.vue?vue&type=script&lang=js&\n /* harmony default export */ var views_voice_recordvue_type_script_lang_js_ = (voice_recordvue_type_script_lang_js_); \n// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__(3);\n\n// CONCATENATED MODULE: ./web/src/views/voice-record/index.vue\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(componentNormalizer["a" /* default */])(\n  views_voice_recordvue_type_script_lang_js_,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "web/src/views/voice-record/index.vue"\n/* harmony default export */ var voice_record = __webpack_exports__["default"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvc3JjL3ZpZXdzL3ZvaWNlLXJlY29yZC9pbmRleC52dWU/NGMxYSIsIndlYnBhY2s6Ly8vLi93ZWIvc3JjL2xpYi92b2ljZS1oYW5kbGVyLmpzPzEzZjAiLCJ3ZWJwYWNrOi8vL3dlYi9zcmMvdmlld3Mvdm9pY2UtcmVjb3JkL2luZGV4LnZ1ZT9mMjA0Iiwid2VicGFjazovLy8uL3dlYi9zcmMvdmlld3Mvdm9pY2UtcmVjb3JkL2luZGV4LnZ1ZT81ZTMzIiwid2VicGFjazovLy8uL3dlYi9zcmMvdmlld3Mvdm9pY2UtcmVjb3JkL2luZGV4LnZ1ZT83Y2Q2Il0sIm5hbWVzIjpbIlZvaWNlSGFuZGxlciIsImluaXQiLCJ2b2ljZVJlY29yZERldmljZUxpc3QiLCJpc0NhblJlY29yZCIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImVudW1lcmF0ZURldmljZXMiLCJkZXZpY2VzIiwicmVzdWx0IiwiaW5kZXgiLCJsZW5ndGgiLCJlbGVtZW50IiwiYXVkaW9pbnB1dCIsInBhdHRlcm4iLCJSZWdFeHAiLCJsYWJlbCIsInJlcGxhY2UiLCJpdGVtIiwiZ3JvdXBJZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtJQUNNQSwwQjtBQUNKLDBCQUFlO0FBQUE7O0FBQ2IsU0FBS0MsSUFBTDtBQUNEOzs7O1dBRUQsZ0JBQVE7QUFDTixXQUFLQyxxQkFBTCxHQUE2QixFQUE3QixDQURNLENBRU47O0FBQ0EsV0FBS0MsV0FBTCxHQUFtQkMsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxZQUFwQztBQUNEOzs7OytGQUVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNPLEtBQUtILFdBRFo7QUFBQTtBQUFBO0FBQUE7O0FBQUEsaURBQ2dDLEtBQUtELHFCQURyQzs7QUFBQTtBQUFBO0FBQUEsdUJBRXNCRSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFlBQWpCLENBQThCQyxnQkFBOUIsRUFGdEI7O0FBQUE7QUFFTUMsdUJBRk47QUFHTUMsc0JBSE4sR0FHZSxFQUhmO0FBSVdDLHFCQUpYLEdBSW1CLENBSm5COztBQUFBO0FBQUEsc0JBSXNCQSxLQUFLLEdBQUdGLE9BQU8sQ0FBQ0csTUFKdEM7QUFBQTtBQUFBO0FBQUE7O0FBS1VDLHVCQUxWLEdBS29CSixPQUFPLENBQUNFLEtBQUQsQ0FMM0I7O0FBQUEsb0JBTVNFLE9BQU8sQ0FBQ0MsVUFOakI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFPUUMsdUJBUFIsR0FPa0IsSUFBSUMsTUFBSixFQVBsQjtBQVFRQyxxQkFSUixHQVFnQkosT0FBTyxDQUFDSSxLQUFSLENBQWNDLE9BQWQsRUFSaEI7QUFTUUMsb0JBVFIsR0FTZTtBQUNUQyx5QkFBTyxFQUFFUCxPQUFPLENBQUNPLE9BRFI7QUFFVEgsdUJBQUssRUFBTEE7QUFGUyxpQkFUZjs7QUFBQTtBQUk4Q04scUJBQUssRUFKbkQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7Ozs7QUFrQmFWLDRFQUFmLEU7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBLHFCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBTkE7QUFPQSxTQVBBLHFCQU9BO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQWRBLEc7O0FDUDJMLENBQWdCLG1IQUFHLEVBQUMsQzs7Ozs7QUNBM0g7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ2dHO0FBQ2hHLGdCQUFnQiw4Q0FBVTtBQUMxQixFQUFFLDBDQUFNO0FBQ1IsRUFBRSxNQUFNO0FBQ1IsRUFBRSxlQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLG1HIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g5YmN56uv5aSE55CG6Z+z6aKR5pWw5o2uXHJcbiAqL1xyXG5jbGFzcyBWb2ljZUhhbmRsZXIge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHRoaXMuaW5pdCgpXHJcbiAgfVxyXG5cclxuICBpbml0ICgpIHtcclxuICAgIHRoaXMudm9pY2VSZWNvcmREZXZpY2VMaXN0ID0gW11cclxuICAgIC8vIHdlYuerr+W9lemfs+mcgOimgeeUqOaIt+adg+mZkOaOiOadg++8jOS7heW9k2xvY2FsaG9zdCAmJiBodHRwc+acjeWKoeS4i+WPr+eUqFxyXG4gICAgdGhpcy5pc0NhblJlY29yZCA9IHdpbmRvdy5uYXZpZ2F0b3IubWVkaWFEZXZpY2VzXHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRSZWNvcmRMaXN0ICgpIHtcclxuICAgIGlmICghdGhpcy5pc0NhblJlY29yZCkgcmV0dXJuIHRoaXMudm9pY2VSZWNvcmREZXZpY2VMaXN0XHJcbiAgICBsZXQgZGV2aWNlcyA9IGF3YWl0IHdpbmRvdy5uYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKVxyXG4gICAgbGV0IHJlc3VsdCA9IFtdXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGV2aWNlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRldmljZXNbaW5kZXhdO1xyXG4gICAgICBpZiAoIWVsZW1lbnQuYXVkaW9pbnB1dCkgY29udGludWVcclxuICAgICAgbGV0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKClcclxuICAgICAgbGV0IGxhYmVsID0gZWxlbWVudC5sYWJlbC5yZXBsYWNlKClcclxuICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgZ3JvdXBJZDogZWxlbWVudC5ncm91cElkLFxyXG4gICAgICAgIGxhYmVsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWb2ljZUhhbmRsZXIiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IFZvaWNlSGFuZGxlciBmcm9tICcuLi8uLi9saWIvdm9pY2UtaGFuZGxlci5qcydcclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAndm9pY2VSZWNvcmQnLFxyXG4gICAgZGF0YSAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdm9pY2VJbnN0YW5jZTogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy52b2ljZUluc3RhbmNlID0gbmV3IFZvaWNlSGFuZGxlcigpXHJcbiAgICAgIGlmICghdGhpcy52b2ljZUluc3RhbmNlLmlzQ2FuUmVjb3JkKSB7XHJcbiAgICAgICAgdGhpcy4kbWVzc2FnZS5lcnJvcign5b2T5YmN5rWP6KeI5Zmo5LiN5pSv5oyB5b2V6Z+zJylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnZvaWNlSW5zdGFuY2UuZ2V0UmVjb3JkTGlzdCgpXHJcbiAgICB9LFxyXG4gIH1cclxuPC9zY3JpcHQ+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDI0ODZhYzQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXGNvZGVcXFxcZWxlY3Ryb24tZGVtb1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwMjQ4NmFjNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwMjQ4NmFjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwMjQ4NmFjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyNDg2YWM0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzAyNDg2YWM0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ3ZWIvc3JjL3ZpZXdzL3ZvaWNlLXJlY29yZC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n')}}]);