function BST() {

	BST.initialize = function() {
		for(i=0;i<1000;i++)
			Experiment.array[i]=-1;
	}
	BST.insertvalue = function(no) {
		no=parseInt(no)
		i=0;
		if(Experiment.array[0]==-1)
			Experiment.array[0]=no;
		else {
			while(Experiment.array[i]!=-1) {
				if(no>Experiment.array[i]) i=i*2+2;
				else if(no<Experiment.array[i]) i=i*2+1;
				else return -1;
			}
			Experiment.array[i]=no;
		}
		return i;
	}
	BST.searchvalue = function(no) {
		no=parseInt(no)
		i=0;
		while(Experiment.array[i]!=-1) {
				if(no>Experiment.array[i]) i=i*2+2;
				else if(no<Experiment.array[i]) i=i*2+1;
				else return i;
			}
		return -1;
	}
	BST.deletevalue = function(no) {
		no=parseInt(no)
		i=0;
		while(Experiment.array[i]!=-1) {
				if(no>Experiment.array[i]) i=i*2+2;
				else if(no<Experiment.array[i]) i=i*2+1;
				else break;
			}
		if(Experiment.array[i*2+1]!=-1&&Experiment.array[i*2+2]!=-1){
			pos=i
			i=i*2+2;
			while(Experiment.array[i*2+1]!=-1){
				i=i*2+1;
			}
			Experiment.array[pos]=Experiment.array[i]
			BST.movetreeup(i,i*2+2);
		}
		else if(Experiment.array[i*2+1]!=-1){
			BST.movetreeup(i,i*2+1);

		}
		else if(Experiment.array[i*2+2]!=-1){
			BST.movetreeup(i,i*2+2);
		}
		else{
			Experiment.array[i]=-1;	
		}
		
		return -1;
	}
	BST.movetreeup = function (parent,child) {
		if(Experiment.array[child]==-1){
			Experiment.array[parent]=-1;
			return;
		}
		BST.movetreeup(parent*2+1,child*2+1);
		BST.movetreeup(parent*2+2,child*2+2);		
	}
}

new BST();
