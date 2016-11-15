
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("pushTest", function(request,response){
  var query = new Parse.Query(Parse.User);
 // var message = request.params.message;
 var message = 'test message from cloud code.';
  query.equalTo('objectId', 'UZtbLFXGLn');

  Parse.Push.send({
    where: query,
    data : { 
      alert: message,
      badge: "Increment",
      sound: "",
    }
    }, {
    success: function() {
    //Success
    },
    error: function(error) {
    //Oops
    }
  });
});
