Time tracker for active window title
====================================

The programm consist of several modules:
* mytime-daemon - show raw data
* mytime-log    - convert raw data to JSON format

Simple usage (put it to *~/.xinitrc*):
`mytime-daemon | mytime-log ~/log/time &`

You may also install chrome extension from *./chrome/* directory
for register domain name of the current page.
