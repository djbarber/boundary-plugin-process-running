var _param = require('./param.json');

var sys = require('sys')
var exec = require('child_process').exec;
var child;

var _os = require('os');
var _source = _os.hostname();

var _interval = parseInt(process.argv[1]) || 1000;

function numProcessRunning(processName){
	child = exec("ps -ef | grep splunk | wc -l", function (error, stdout, stderr) {
        var proc = stdout - 2;
	var host = processName + "-" + _source;
        console.log('BOUNDARY_PROCESS_RUNNING %d %s', proc, host);
	});
}


var _last; function poll()
{
	for(var i = 0; i < processes.length; i++)
	{
		numProcessRunning(processes[i]);
	}
	setTimeout(poll, _interval)
}

setInterval(poll, pollInterval);
