var $__continuation = $traceurRuntime.getModule($traceurRuntime.normalizeModuleName("traceur/dist/commonjs/runtime/modules/continuation.js", "index.js")).default;
var $__call = $traceurRuntime.getModule($traceurRuntime.normalizeModuleName("traceur/dist/commonjs/runtime/modules/call.js", "index.js")).default;
var $__initTailRecursiveFunction = $traceurRuntime.getModule($traceurRuntime.normalizeModuleName("traceur/dist/commonjs/runtime/modules/initTailRecursiveFunction.js", "index.js")).default;
var $__1 = $__initTailRecursiveFunction(async1),
    $__3 = $__initTailRecursiveFunction(async2);
var $__asyncWrap = $traceurRuntime.getModule($traceurRuntime.normalizeModuleName("traceur/dist/commonjs/runtime/modules/asyncWrap.js", "index.js")).default;
function async1() {
  return $__call(function() {
    return $__continuation($__asyncWrap, null, [$__initTailRecursiveFunction(function($ctx) {
      return $__call(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              console.log('async1 start');
              $ctx.state = 4;
              break;
            case 4:
              Promise.resolve(async2()).then($ctx.createCallback(2), $ctx.errback);
              return;
            case 2:
              console.log('async1 end');
              $ctx.state = -2;
              break;
            default:
              return $__continuation($ctx.end, $ctx, []);
          }
      }, this, arguments);
    }), this]);
  }, this, arguments);
}
function async2() {
  return $__call(function() {
    return $__continuation($__asyncWrap, null, [$__initTailRecursiveFunction(function($ctx) {
      return $__call(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              console.log('async2');
              $ctx.state = -2;
              break;
            default:
              return $__continuation($ctx.end, $ctx, []);
          }
      }, this, arguments);
    }), this]);
  }, this, arguments);
}
