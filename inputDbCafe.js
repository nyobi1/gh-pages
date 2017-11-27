db.locations.save({
name: 'Cupuwatu Resto & Cafe',
address: 'Jalan nyobi, kalasan, sleman, Daerah Istimewa Yogyakarta 55571',
rating: 0,
facilities: ['Hot drinks', 'Food', 'Premium wifi'],
coords: [112.7520883 , -7.2574719],
openingTimes: [{
days: 'Monday - Friday',
opening: '7:00am',
closing: '8:00pm',
closed: false
}, {
days: 'Saturday',
opening: '8:00am',
closing: '5:00pm',
closed: false
}, {
days: 'Sunday',
closed: true
}, {
author: 'Achmad Sodikhin',
id: ObjectId(),
rating: 3,
timestamp: new Date("Dec 26, 2015"), reviewText: "this cafe is prety near with kampus, hence the name, but for the wifi access its prety standart also the food is standart too"
}]
})
