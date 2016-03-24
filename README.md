Time tracker for active window title
====================================

The programm consist of several modules:
* mytime-monitor  - raw data monitoring
* mytime-log      - save data to dayly file
* mytime-daemon   - raw data monitoring
* mytime-json     - simple compress utility for log files writte on PHP

Simple usage (put it to *~/.xinitrc*):
`mytime-daemon &`

You may also install chrome extension from *./chrome/* directory
for register domain name of the current page.

If you want to convert raw file to JSON, use:
`mytime-jsoncompress ~/log/time/2016-03/2016-03-01.raw`

> JSON format:
> {
> 	timestamp: "timestamp", t: "delta from last timestamp",
> 	T:  "title", H: "title id",
> 	dt: "number of repeats",
> 	i:  "idle time in seconds",
> }
