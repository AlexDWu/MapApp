var Engine = require('../controllers/engineController');

// the filter is an array of hashtags to filter
var filter = [];

// update the filter with hashtags associated with the hashtag parameter
var updateFilter = function (hashtag, threshold) {
  if (hashtag) {
    var threshold = threshold || .25;
    return Engine.getRelatedHashtags(hashtag)
      .then(function (relatedHashtags) {
        var result = [];

        for (var i = 0; i < relatedHashtags.length; i++) {
          if (relatedHashtags[i].strength >= threshold) {
            result.push(relatedHashtags[i]);
          }
        }

        filter = result;
        return result;
      }
    );
  } else {
    return filter;
  }
};

module.exports = {
  filter: filter,
  updateFilter: updateFilter
};
