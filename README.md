jGrid
=====

A 2d excel style scrollable grid using HTML, CSS and jQuery. [View the demo](https://rawgit.com/TomBZombie/jGrid/master/demo.html)


Usage
-----

1) Create your table with a &lt;thead&gt; and &lt;tbody&gt;

2) Include jquery, jquery.jgrid.js and jquery.jgrid.css on the page

3) Apply jGrid to your table

```javascript
$().ready(function() {
    $('#myTable').jGrid();
});

```

Your table will now be scrollable left/right and up/down! The first column and <thead> will *always* be visible!


Extra options
-------------

To specify the height that the grid will take up, initialise it with a height:


```javascript
$().ready(function() {
    $('#myTable').jGrid({height: '700px'});
});

```


