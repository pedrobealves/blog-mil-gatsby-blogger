// JQuery Twitter Feed. Coded by www.tom-elliott.net (2012) and modified from https://twitter.com/javascripts/blogger.js
//UPDATED TO AUTHENTICATE TO API 1.1

jQuery(function($){
  var twitter_feed = $('.twitter-feed');
  var displaylimit = twitter_feed.attr('data-count');
  var screenname = "Dan Fisher";
  var showdirecttweets = false;
  var showretweets = true;
  var showtweetlinks = true;
  var showprofilepic = true;
  var showtweetactions = true;
  var showretweetindicator = false;

  var headerHTML = '';
  var loadingHTML = '';
  loadingHTML += '<div class="twitter-feed__preloader">Please wait...</div>';

  twitter_feed.html(headerHTML + loadingHTML);

    $.getJSON('php/get-tweets.php',
        function(feeds) {
        var feedHTML = '';
        var displayCounter = 1;
        for (var i=0; i<feeds.length; i++) {
        var tweetscreenname = feeds[i].user.name;
        var tweetusername = feeds[i].user.screen_name;
        var profileimage = feeds[i].user.profile_image_url_https;
        var status = feeds[i].text;
        var isaretweet = false;
        var isdirect = false;
        var tweetid = feeds[i].id_str;

        //If the tweet has been retweeted, get the profile pic of the tweeter
        if(typeof feeds[i].retweeted_status != 'undefined'){
           profileimage = feeds[i].retweeted_status.user.profile_image_url_https;
           tweetscreenname = feeds[i].retweeted_status.user.name;
           tweetusername = feeds[i].retweeted_status.user.screen_name;
           tweetid = feeds[i].retweeted_status.id_str
           isaretweet = true;
         };


         //Check to see if the tweet is a direct message
         if (feeds[i].text.substr(0,1) == "@") {
           isdirect = true;
         }

        //console.log(feeds[i]);

         if (((showretweets == true) || ((isaretweet == false) && (showretweets == false))) && ((showdirecttweets == true) || ((showdirecttweets == false) && (isdirect == false)))) {
          if ((feeds[i].text.length > 1) && (displayCounter <= displaylimit)) {
            if (showtweetlinks == true) {
              status = addlinks(status);
            }

            if (displayCounter == 1) {
              feedHTML += headerHTML;
            }

            feedHTML += '<li class="twitter-feed__item">';
              feedHTML += '<header class="twitter-feed__header">';
                feedHTML += '<figure class="twitter-feed__thumb">';
                  feedHTML += '<a href="https://twitter.com/'+tweetusername+'" target="_blank"><img src="'+profileimage+'"images/twitter-feed-icon.png" width="40" height="40" alt="Avatar" /></a>';
                feedHTML += '</figure>';
                feedHTML += '<div class="twitter-feed__info">';
                  feedHTML += '<h5 class="twitter-feed__name">'+tweetscreenname+'</h5>';
                  feedHTML += '<h6 class="twitter-feed__username"><a href="https://twitter.com/'+tweetusername+'" target="_blank">@'+tweetusername+'</a></h6>';
                feedHTML += '</div>';
              feedHTML += '</header>';
              feedHTML += '<div class="twitter-feed__body">'+status+'</div>';
              feedHTML += '<footer class="twitter-feed__footer">';
                feedHTML += '<div class="twitter-feed__timestamp">';
                  feedHTML += '<a href="https://twitter.com/'+tweetusername+'/status/'+tweetid+'">'+relative_time(feeds[i].created_at)+'</a>';
                feedHTML += '</div>';

                if (showtweetactions == true) {
                  feedHTML += '<div class="twitter-feed__actions">';
                    feedHTML += '<a href="https://twitter.com/intent/tweet?in_reply_to='+tweetid+'" class="twitter-feed__reply"></a>';
                    feedHTML += '<a href="https://twitter.com/intent/retweet?tweet_id='+tweetid+'" class="twitter-feed__retweet"></a>';
                    feedHTML += '<a href="https://twitter.com/intent/favorite?tweet_id='+tweetid+'" class="twitter-feed__favorite"></a>';
                  feedHTML += '</div>';
                }

              feedHTML += '</footer>';
            feedHTML += '</li>';
            displayCounter++;
          }
         }
            }

            $('.twitter-feed').html(feedHTML);

            //Add new window for action clicks
            if (showtweetactions == true) {

              $('.twitter-feed__actions a').click(function(){
                var url = $(this).attr('href');
                window.open(url, 'tweet action window', 'width=580,height=500');
                return false;
              });
            }
    });

    //Function modified from Stack Overflow
    function addlinks(data) {
        //Add link to all http:// links within tweets
        data = data.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
            return '<a href="'+url+'" >'+url+'</a>';
        });

        //Add link to @usernames used within tweets
        data = data.replace(/\B@([_a-z0-9]+)/ig, function(reply) {
            return '<a href="http://twitter.com/'+reply.substring(1)+'" style="font-weight:lighter;" >'+reply.charAt(0)+reply.substring(1)+'</a>';
        });
        return data;
    }


    function relative_time(time_value) {
      var values = time_value.split(" ");
      time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
      var parsed_date = Date.parse(time_value);
      var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
      var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
      delta = delta + (relative_to.getTimezoneOffset() * 60);

      if (delta < 60) {
        return 'less than a minute ago';
      } else if(delta < 120) {
        return 'about a minute ago';
      } else if(delta < (60*60)) {
        return (parseInt(delta / 60)).toString() + ' minutes ago';
      } else if(delta < (120*60)) {
        return 'about an hour ago';
      } else if(delta < (24*60*60)) {
        return 'about ' + (parseInt(delta / 3600)).toString() + ' hours ago';
      } else if(delta < (48*60*60)) {
        return '1 day ago';
      } else {
        return (parseInt(delta / 86400)).toString() + ' days ago';
      }
    }

});
