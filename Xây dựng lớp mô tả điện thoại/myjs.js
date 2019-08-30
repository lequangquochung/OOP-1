var Mobile = function (name,type,battery,status) {
	this.name = name;
	this.type = type;
	this.battery = 20;
	this.draftMess = [];
	this.inboxMess = [];
	this.sendMess = [];
	this.status = true;

	this.setStatus = function(){
		if (battery > 0 ) {
			return status == true;
		}else if(battery == 0){ 
			return status == false;
		}
	}

	this.checkstatus = function(){
		if (this.status == false){
		return;
	}

	this.charge = function(){
		setTimeout(battery++, 3000);	
	}

	this.getTypeMess = function(){
		battery--;
		return draftMess;		
	}

	this.getSendMess = function(){
		battery--;
		return sendMess;		
	}

	this.getIbMess = function(){
		battery--;
		return inboxMess;
	}

	this.showIbMess = function(){
		battery--;
		return inboxMess;
	}
}



	











}