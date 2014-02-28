var express = require('express'),
    app = express(),
    appHome = process.env.TICKETAPPLY_HOME,
    portNr = process.env.TICKETAPPLY_PORTNR;

// Bootstrap files
app.use('/bootstrap', express.static(appHome + '/etc/bootstrap-3.1.1/dist'));

// Frontend website
app.use('/', express.static(appHome + '/public'));

app.listen(portNr);

console.log('Ticketapply started @ ['+portNr+'] with home ['+appHome+']');