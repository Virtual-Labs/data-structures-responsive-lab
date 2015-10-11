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
				else return i;
			}
		
		return -1;
	}
}

new BST();
