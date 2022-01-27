"use strict";
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