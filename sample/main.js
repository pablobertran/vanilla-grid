const sampleGuests = await fetch('./sample-guests.json');
const sampleRooms = await fetch('./sample-rooms.json');
const sampleStays = await fetch('./sample-stays.json');

// Parse data to let VanillaGrid know relationships between dataSources
const parsedStays = sampleStays.map( stay => {
    stay.linkedTo = [];
    stay.linkedTo.push( {source: 'rooms', field: 'room'} );
    stay.linkedTo.push( {source: 'guests', field: 'guest'} );
});

// Initiate, set up, define dataSources
const bookingsGrid = new VanillaGrid();
bookingsGrid.settings.gridSettings.axis.y = "rooms";
bookingsGrid.dataSources.add('guests', sampleGuests);
bookingsGrid.dataSources.add('rooms', sampleRooms);
bookingsGrid.dataSources.add('main', parsedStays);
// And finally, render.
bookingsGrid.create('#bookings');
