function(instance, properties, context) {
	
	if(!instance.data.getStarted){	
        instance.data.triggerMe(properties);
        instance.data.getStarted = true;
     }
   	    
}