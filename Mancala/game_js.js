var Player = [{id:"Player 1", score:0},
			{id:"Player 2", score:0}];
var board = [0,4,4,4,4,4,4,0,4,4,4,4,4,4];
var selected_val, end_val, turn = 0;
console.log("hello");
console.log("world");

function is_Valid(){
var s_val = Number(document.getElementById("label").value);
var flag = false;
	if(turn == 0){
		if( s_val > 0 && s_val < 7){
		flag = true;
		
		}
	}
	else if(turn == 1){
		if( s_val > 7 && s_val < 14) {
		flag = true;
		console.log("p2 go");
		}
	}
	
	if(flag) {
	update_board();
	}
	else{
	console.log("Invalid move!");
	}
}

function update_board(){
// The algorithm works as follows:
// 1. Compute the starting and ending bins using the indices of the board representation(array)
// 2. Clear the selected bin of stones(=0) and update subsequent bins(+1) taking care to:
//    a. skip opponents bin and update the ending bin index.
// 3. If on your turn the ending bin index corresponds to your score bin, you take another turn.
//    
	selected_val = Number(document.getElementById("label").value);
	console.log("Selected bin is " + selected_val);
	end_val = Number(selected_val) + board[selected_val]; //index + #ofstones for that bin
	document.getElementById(selected_val).style.backgroundColor = "green"; 
	document.getElementById(end_val).style.backgroundColor = "red"; 
	console.log("End bin is " + end_val + " " + selected_val + " " + board[selected_val]);
	//console.log(selected_val);
	//$console.log(end_val);
	board[selected_val] = 0;
	console.log("startBin at " + selected_val + " is now " + board[selected_val]);
	document.getElementById(selected_val).textContent = board[selected_val];
	for(var i = selected_val + 1; i <= end_val;i++){ //update subsequent bins
		// % helps us wrap around circular array.
		if(turn == 0 && (i%14) == 0){ // skip your opponents bin. P1 is 0, p2 is 1 for turn.
		end_val++;
		continue;
		}
		else if(turn == 1 &&(i%14) == 7){
		end_val++;
		continue;
		}
		board[i%14]++; //update logical board
		document.getElementById(i%14).textContent = board[i%14]; //update ui board
		//document.getElementById(i).textContent++;
		
	}
	if(turn == 0 && (end_val%14) == 7){ //if the ending bin index is your scoring bin go again.
	console.log("Player 1 go again");
	}
	else if(turn == 1 && (end_val%14) == 0) {
	console.log("Player 2 go again");
	}
	else { //otherwise its the next players turn. Toggles turn 0->1->0>1
	turn =  (turn + 1) % 2;
	console.log(turn);
	}
}
function clear_board(){
board[0] = 0;
board[1] = 4;
board[2] = 4;
board[3] = 4;
board[4] = 4;
board[5] = 4;
board[6] = 4;
board[7] = 0;
board[8] = 4;
board[9] = 4;
board[10] = 4;
board[11] = 4;
board[12] = 4;
board[13] = 4;
	for(var i = 0; i <= 13;i++){
//console.log(i);
	document.getElementById(i).textContent = board[i];
	document.getElementById(i).style.backgroundColor = "#cc9966";
	}
	turn = 0;
}
function minmax(state, depth){
	return max(state, depth);
}
function max(state,depth){
	if(depth = 2){
	return utility(state);
	}
}
function utility(state){


}
