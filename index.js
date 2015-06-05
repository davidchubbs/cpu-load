var os = require('os')

module.exports = avgCpuLoad

/*
 * Generate the average CPU load across the time
 * of your choosing.
 *
 * @func avgCpuLoad
 * @param {number} milliseconds
 * @param {function} callback
 * @return {number} avg-load (1.0 = 100%)
 */
function avgCpuLoad (span, cb) {
  if (typeof span !== 'number' || span < 0) span = 100
  var start = os.cpus()

  setTimeout(function avgCpuLoadCompare () {
    var totals = os.cpus().reduce(function (totals, end, i) {
      var busy = end.times.user + end.times.sys - start[i].times.user - start[i].times.sys
      totals.total += busy + end.times.idle - start[i].times.idle
      totals.busy += busy
      return totals
    }, {busy: 0, total: 0})

    cb(totals.busy / totals.total)
  }, span)
}
