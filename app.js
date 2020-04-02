var dataController = (function() {

  var ideas = {
    activeIdeas: [
      'Try going on a \'treasure hunt\' with your own toys, games, and books. See what types of \'new\' treasures you can discover!',
      'Find a camera and take a photo of each flower or plant you can find around your house or garden. Or, even better, take a piece of paper and draw the flowers you find!',
      'Write and send a handmade card to your grandparents.',
      'Write all family members names and randomly pull one to call or FaceTime each day.',
      'Build a big fort in the living room or in your bedroom.',
      'Draw or paint a family portrait to hang on the wall or refrigerator.',
      'Draw a self-portrait while looking at yourself in the mirror.',
      'Use an old cardboard box to build a house for your toys to live in.',
      'Create an art collage or dream poster with cutouts from old magazines.',
      'Build an obstacle course in the house or yard.',
      'Invent this week\'s meals and design a menu for your family.',
      'Go through your crayons, markers, and colored pencils and get rid of the old/non-working ones.',
      'Build a big puzzle and set a timer to see how quickly you can do it.',
      'Write secret messages to distribute around the house - for whoever finds them first.',
      'Transform your bedroom or living room into a radio station and record a radio show with today\'s news, your thoughts, and favorite songs.',
      'Have a picnic in the living room instead of eating at the dining table.',
      'Prepare a karoke party for you and your family - set the stage, choose the songs, find a microphone (pretend or not).',
      'Start a journal and write in it each morning or evening.',
      'Plan out your routine for the day - including the times for each activity.',
      'Set up a yoga studio in your bedroom or living room and look for a kids yoga video or spend some time stretching.',
      'Turn up the music and have a crazy dance party with your family.',
      'See how many exercises you can do without stopping (jumping jacks, situps, pushups). Then see if you can beat your record the next time.',
      'If you or parents have library card, download the Libby app and check out some digital books to read.',
      'Write five nice things about yourself and each member of your family.',
      'Call or FaceTime your cousins or friends from school.',
      'Write down ten things you\'re grateful for each day.'
    ]
  }

  return {
    getIdeas: function() {
      return ideas.activeIdeas;
    },

    testing: function() {
      console.log(ideas);
    }
  }


})();

var UIController = (function() {

  var DOMstrings = {
    container: '.idea__container',
    newIdeaBtn: '.btn__new',
    submitIdeaBtn: '.btn__submit',
    ideaInput: '.input__idea'

  };

  return {
    displayIdea: function(arr) {
      var index = Math.floor(Math.random() * arr.length);

      document.querySelector(DOMstrings.container).textContent = arr[index];
      
    },

    clearField: function() {
      var field = document.querySelector('.idea__input');
      field.value = '';
      field.focus();
    },

    transformArrowIcon: function() {
      document.getElementById('arrow-icon').classList.toggle('rotated');
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  }

})();


var controller = (function(dataCtrl, UICtrl) {
  var DOM = UICtrl.getDOMstrings();

  // 1. Set up event listeners
  var setUpEventListeners = function() {
    document.querySelector(DOM.newIdeaBtn).addEventListener('click', ctrlDisplayNewIdea);
  };

  var ctrlDisplayNewIdea = function() {
    // 3. Get ideas from dataCtrl
    var ideas = dataCtrl.getIdeas();

    // 4. Display one random idea from ideas array
    UICtrl.displayIdea(ideas);

    // 5. Arrow interaction
    UICtrl.transformArrowIcon();
  };

  // Problem with ctrlAddIdea: it works but it seems like I need a database for the submittedIdeas and to prevent the array from emptying out once the page is refreshed

  return {
    init: function() {
      setUpEventListeners()
    }
  }



})(dataController, UIController);

controller.init();