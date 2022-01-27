
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/libs/worker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2e08b1VXBOPrlZi03l/SBR', 'worker');
// Script/src/libs/worker.js

"use strict";

onmessage = function onmessage(evt) {
  var data = evt.data;

  if (data && data.__THREAD_TASK__) {
    var task = data.__THREAD_TASK__;

    try {
      var _run = function _run() {
        ctx.threadSignal = true;
        var ret = fn.call(ctx, data.sharedObj);
        postMessage({
          error: null,
          returnValue: ret,
          __THREAD_TASK__: task,
          sharedObj: data.sharedObj,
          taskId: data.taskId
        });
      };

      var fn = new Function("return " + task)();
      var ctx = {
        threadSignal: true,
        sleep: function sleep(interval) {
          ctx.threadSignal = false;
          setTimeout(_run, interval);
        },
        runOnUiThread: function runOnUiThread(task) {
          postMessage({
            __UI_TASK__: task.toString(),
            sharedObj: data.sharedObj
          });
        }
      };

      _run(0);
    } catch (ex) {
      postMessage({
        error: ex.toString(),
        returnValue: null,
        sharedObj: data.sharedObj
      });
    }
  }
};

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGxpYnNcXHdvcmtlci5qcyJdLCJuYW1lcyI6WyJvbm1lc3NhZ2UiLCJldnQiLCJkYXRhIiwiX19USFJFQURfVEFTS19fIiwidGFzayIsIl9ydW4iLCJjdHgiLCJ0aHJlYWRTaWduYWwiLCJyZXQiLCJmbiIsImNhbGwiLCJzaGFyZWRPYmoiLCJwb3N0TWVzc2FnZSIsImVycm9yIiwicmV0dXJuVmFsdWUiLCJ0YXNrSWQiLCJGdW5jdGlvbiIsInNsZWVwIiwiaW50ZXJ2YWwiLCJzZXRUaW1lb3V0IiwicnVuT25VaVRocmVhZCIsIl9fVUlfVEFTS19fIiwidG9TdHJpbmciLCJleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsU0FBUyxHQUFHLG1CQUFTQyxHQUFULEVBQ1o7QUFDSSxNQUFJQyxJQUFJLEdBQUdELEdBQUcsQ0FBQ0MsSUFBZjs7QUFDQSxNQUFHQSxJQUFJLElBQUlBLElBQUksQ0FBQ0MsZUFBaEIsRUFDQTtBQUNJLFFBQUlDLElBQUksR0FBR0YsSUFBSSxDQUFDQyxlQUFoQjs7QUFDQSxRQUNBO0FBQUEsVUFjYUUsSUFkYixHQWNJLFNBQVNBLElBQVQsR0FDQTtBQUNJQyxRQUFBQSxHQUFHLENBQUNDLFlBQUosR0FBbUIsSUFBbkI7QUFDQSxZQUFJQyxHQUFHLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRSixHQUFSLEVBQWFKLElBQUksQ0FBQ1MsU0FBbEIsQ0FBVjtBQUNBQyxRQUFBQSxXQUFXLENBQUM7QUFBQ0MsVUFBQUEsS0FBSyxFQUFDLElBQVA7QUFBYUMsVUFBQUEsV0FBVyxFQUFDTixHQUF6QjtBQUE4QkwsVUFBQUEsZUFBZSxFQUFDQyxJQUE5QztBQUFvRE8sVUFBQUEsU0FBUyxFQUFDVCxJQUFJLENBQUNTLFNBQW5FO0FBQThFSSxVQUFBQSxNQUFNLEVBQUViLElBQUksQ0FBQ2E7QUFBM0YsU0FBRCxDQUFYO0FBQ0gsT0FuQkw7O0FBQ0ksVUFBSU4sRUFBRSxHQUFJLElBQUlPLFFBQUosQ0FBYSxZQUFXWixJQUF4QixDQUFELEVBQVQ7QUFDQSxVQUFJRSxHQUFHLEdBQUc7QUFDTUMsUUFBQUEsWUFBWSxFQUFFLElBRHBCO0FBRU1VLFFBQUFBLEtBQUssRUFBRSxlQUFTQyxRQUFULEVBQ1A7QUFDSVosVUFBQUEsR0FBRyxDQUFDQyxZQUFKLEdBQW1CLEtBQW5CO0FBQ0FZLFVBQUFBLFVBQVUsQ0FBQ2QsSUFBRCxFQUFPYSxRQUFQLENBQVY7QUFDSCxTQU5QO0FBT01FLFFBQUFBLGFBQWEsRUFBRSx1QkFBU2hCLElBQVQsRUFDZjtBQUNJUSxVQUFBQSxXQUFXLENBQUM7QUFBQ1MsWUFBQUEsV0FBVyxFQUFDakIsSUFBSSxDQUFDa0IsUUFBTCxFQUFiO0FBQThCWCxZQUFBQSxTQUFTLEVBQUNULElBQUksQ0FBQ1M7QUFBN0MsV0FBRCxDQUFYO0FBQ0g7QUFWUCxPQUFWOztBQW1CQU4sTUFBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSjtBQUNILEtBdkJELENBd0JBLE9BQU1rQixFQUFOLEVBQ0E7QUFDWVgsTUFBQUEsV0FBVyxDQUFDO0FBQUNDLFFBQUFBLEtBQUssRUFBQ1UsRUFBRSxDQUFDRCxRQUFILEVBQVA7QUFBdUJSLFFBQUFBLFdBQVcsRUFBQyxJQUFuQztBQUF5Q0gsUUFBQUEsU0FBUyxFQUFFVCxJQUFJLENBQUNTO0FBQXpELE9BQUQsQ0FBWDtBQUNYO0FBQ0o7QUFDSixDQW5DRCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsib25tZXNzYWdlID0gZnVuY3Rpb24oZXZ0KVxue1xuICAgIHZhciBkYXRhID0gZXZ0LmRhdGE7XG4gICAgaWYoZGF0YSAmJiBkYXRhLl9fVEhSRUFEX1RBU0tfXylcbiAgICB7XG4gICAgICAgIHZhciB0YXNrID0gZGF0YS5fX1RIUkVBRF9UQVNLX187XG4gICAgICAgIHRyeVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgZm4gPSAobmV3IEZ1bmN0aW9uKFwicmV0dXJuIFwiKyB0YXNrKSkoKTtcbiAgICAgICAgICAgIHZhciBjdHggPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZWFkU2lnbmFsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsZWVwOiBmdW5jdGlvbihpbnRlcnZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC50aHJlYWRTaWduYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChfcnVuLCBpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5PblVpVGhyZWFkOiBmdW5jdGlvbih0YXNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2Uoe19fVUlfVEFTS19fOnRhc2sudG9TdHJpbmcoKSwgc2hhcmVkT2JqOmRhdGEuc2hhcmVkT2JqfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gX3J1bigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY3R4LnRocmVhZFNpZ25hbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IGZuLmNhbGwoY3R4LCBkYXRhLnNoYXJlZE9iaik7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2Uoe2Vycm9yOm51bGwsIHJldHVyblZhbHVlOnJldCwgX19USFJFQURfVEFTS19fOnRhc2ssIHNoYXJlZE9iajpkYXRhLnNoYXJlZE9iaiwgdGFza0lkOiBkYXRhLnRhc2tJZH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfcnVuKDApO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGV4KVxuICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHtlcnJvcjpleC50b1N0cmluZygpICwgcmV0dXJuVmFsdWU6bnVsbCwgc2hhcmVkT2JqOiBkYXRhLnNoYXJlZE9ian0pO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==