function(instance, context) {
    
    instance.data.getStarted = false;
    
    // Define a random ID
    
    var random = Math.floor((Math.random() * 100000) + 1);
    const elementID = 'wt-container'+random;
    instance.data.elementID = elementID;
    
    instance.data.triggerMe = (properties) => {
		
        // Append div

        instance.canvas.append('<div style="width: 100% !important; height: 100% !important;" id="'+elementID+'"></div>');

        $(document).ready(function(){
     
            // Load script

            var script = document.createElement("script");
            script.innerHTML = "var wt = new api.WhiteboardTeam('#"+elementID+"', {clientId: '"+properties.clientId+"',boardCode: '"+properties.boardCode+"',participant: {role : '"+properties.role+"', name: '"+properties.displayName+"'},board: {tool: '"+properties.tool+"'}});";
            document.body.appendChild(script);



            // When board is ready

            wt.onReady(() => instance.triggerEvent('ready'));

            // When any error occured
            wt.onError(error => {
                 console.log(error.type, error.message);
                 instance.triggerEvent('error');
                 instance.publishState('errorMessage', `Error type: $('error.type'), Message: $('error.message')`);
            })

            // When a user joined

            wt.addListener('user-joined', user => {
                instance.publishState('joinedUserID', user.uid);
                instance.publishState('joinedUserDisplayName', user.displayName);
                instance.triggerEvent('userJoined');
            });

            // When a user left

            wt.addListener('user-left', user => {
                instance.publishState('leftUserID', user.uid);
                instance.publishState('leftUserDisplayName', user.displayName);
                instance.triggerEvent('userLeft');
            });
            
        });     
   };
    
}