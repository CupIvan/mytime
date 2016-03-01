Time tracker for active window title
====================================

The programm consist of several modules:
* mytime-daemon   - raw data monitoring
* mytime-log      - convert raw data to pseudo-JSON format
* mytime-compress - simple compress utility for log files writte on PHP

Simple usage (put it to *~/.xinitrc*):
`mytime-daemon | mytime-log ~/log/time &`

You may also install chrome extension from *./chrome/* directory
for register domain name of the current page.

If you want to compress log files, use
`mytime-compress ~/log/time/2016-03/2016-03-01.json | gzip > log.json.gz`
