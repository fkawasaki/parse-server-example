
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});
 // vddar message = request.params.message;
Parse.Cloud.define('push', function(req, res) {
  res.success('called push.');
  var query = new Parse.Query(Parse.User);
 var message = 'test message from cloud code.';
  query.equalTo('objectId', 'pjOKjRFYVA');

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
    res.success('success');
    },
    error: function(error) {
    //Oops
    res.success('invalid');
    }
  },{ useMasterKey: true });
});

Parse.Cloud.define('pushTest', function(request,response){
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
