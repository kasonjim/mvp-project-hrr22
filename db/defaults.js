var Phrases = require('./models/Phrases');
var Entries = require('./models/Entries');

exports.initializePhrases = function() {
  // Drop Phrases collection and rebuild with default values
  return Phrases.remove({}, function(err) {
    if (err) { return console.log('error', err); }
    console.log('Phrases collection removed');
  });
};

exports.initalizeEntries = function() {
  // Drop Entries collection and rebuild with default values
  return Entries.remove({}, function(err) {
    if (err) { return console.log('error', err); }
    console.log('Entries collection removed');
  });
};

// Insert some default Phrases
var defaultPhrases = [
  { _id: 1, category: 'food', text: 'Feast me some of them...' },
  { _id: 2, category: 'food', text: 'Shovel me a truck full of...' },
  { _id: 3, category: 'food', text: 'Grind it up and snort me a kilo of...' },
  { _id: 4, category: 'food', text: 'Pound me with a tray of...' },
  { _id: 10, category: 'food', text: 'Bury me in a giant pile of...' },
  { _id: 5, category: 'drink', text: 'Drink me some good...' },
  { _id: 6, category: 'drink', text: 'Drown me in some...' },
  { _id: 7, category: 'drink', text: 'Pour me a bucket of...' },
  { _id: 8, category: 'drink', text: 'Let me bathe in a river of...' },
  { _id: 9, category: 'drink', text: 'Inject me with a large dose of...' }
];
exports.createDefaultPhrases = function() {
  console.log('Inserting default phrases');

  defaultPhrases.forEach( function(phrase) {
    var newPhrase = new Phrases(phrase);
    newPhrase.save(function(err) {
      if (err) { return console.log('error', err); }
    });
  });
};

// Insert some default Entries
var defaultEntries = [
  { _id: 1, category: 'food', title: 'Filet Mignon with Rich Balsamic Glaze', url: 'http://allrecipes.com/recipe/30578/filet-mignon-with-rich-balsamic-glaze', description: 'This is an elegant and quick romantic dinner for two. Wonderful served with steamed asparagus and baby red potatoes', submittedBy: 'Ife'},
  { _id: 2, category: 'food', title: 'Chicken Avocado Salad', url: 'http://allrecipes.com/recipe/79704/chicken-avocado-salad', description: 'A delicious salad that is great for a quick snack, but attractive enough for entertaining. You can even have it as a meal in a sandwich, or as a salad atop a lettuce leaf.', submittedBy: 'Tre'},
  { _id: 3, category: 'food', title: 'Chef Johns Smothered Pork Chops', url: 'http://allrecipes.com/recipe/234803/chef-johns-smothered-pork-chops/?', description: 'You know that when a recipe has smothered in the name, its going to be easy. Its a beautiful combination of dark, rich onion gravy covering pan-fried pork chops. Serve over hot cooked rice.', submittedBy: 'Robin'},
  { _id: 7, category: 'food', title: 'Sausage Hash Brown Breakfast Casserole', url: 'http://allrecipes.com/recipe/241105/sausage-hash-brown-breakfast-casserole', description: 'This super-easy breakfast casserole is actually good. You can make it the night before and keep the sausage/hash brown mixture separate from the egg mixture, then pour it over top right before it goes into the oven. You might need to cook it a little longer if its cold from the fridge. This is also great if you add a little onion.', submittedBy: 'Jason'},
  { _id: 8, category: 'food', title: 'Gorgonzola Stuffed Chicken Breasts Wrapped in Bacon', url: 'http://allrecipes.com/recipe/216388/gorgonzola-stuffed-chicken-breasts-wrapped-in-bacon', description: 'Chicken teams up with two of my favorite things: Gorgonzola cheese and bacon!', submittedBy: 'Shawn'},
  { _id: 9, category: 'food', title: 'Sweet Potato Chili', url: 'http://allrecipes.com/recipe/229081/sweet-potato-chili', description: 'A delectable, southern winter dish that warms the heart and fills the tummy! Garnish with chopped avocado if desired.', submittedBy: 'Howard'},
  { _id: 4, category: 'drink', title: 'Ultimate Frozen Strawberry Margarita', url: 'http://allrecipes.com/recipe/24494/ultimate-frozen-strawberry-margarita', description: 'A near perfect strawberry margarita with frozen strawberries and limeade concentrate.', submittedBy: 'Tre'},
  { _id: 5, category: 'drink', title: 'Party Mimosa', url: 'http://allrecipes.com/recipe/136514/party-mimosa', description: 'A wonderful change from the everyday orange juice and champagne mimosa!', submittedBy: 'Cody'},
  { _id: 6, category: 'drink', title: 'Wild River Bloody Mary Mix', url: 'http://allrecipes.com/recipe/75408/wild-river-bloody-mary-mix', description: 'This recipe was used in our bar in Clayton Idaho. It is a handy mix that can be made ahead of time. Just add to a glass of vodka and ice, and garnish as desired. The Wild River Saloon was known for its Bloody Marys.', submittedBy: 'Luke'},
  { _id: 10, category: 'drink', title: 'Bourbon Slush', url: 'http://allrecipes.com/recipe/27120/bourbon-slush', description: 'A fruity blend of juices, tea and bourbon whiskey are frozen into a slush, and then served topped off with lemon lime soda. This takes a while, but its worth it!', submittedBy: 'Andrew'},
  { _id: 11, category: 'drink', title: 'Absolute Stress', url: 'http://allrecipes.com/recipe/18917/absolute-stress', description: 'One is enough to relieve most stress levels!', submittedBy: 'codybot'},
  { _id: 12, category: 'drink', title: 'Tainted Fruit Shots', url: 'http://allrecipes.com/recipe/23542/tainted-fruit-shots', description: 'Its Jello with a kick. Vodka is mixed with any fruit flavored gelatin and drunk in a shot glass.', submittedBy: 'Gwynn'},
];
exports.createDefaultEntries = function() {
  console.log('Inserting default entries');

  defaultEntries.forEach( function(entry) {
    var newEntry = new Entries(entry);
    newEntry.save(function(err) {
      if (err) { return console.log('error', err); }
    });
  });
};