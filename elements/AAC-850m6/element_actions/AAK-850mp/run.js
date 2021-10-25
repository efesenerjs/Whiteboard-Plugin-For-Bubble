function(instance, properties, context) {


  //Load any data 


	wt.getCurrentUser().then(user => instance.publishState('currentUserId', user.id));
    
  //Do the operation



}