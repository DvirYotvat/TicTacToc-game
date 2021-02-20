function initModule() {
	$("#cmdNewGame").click(cmdNewGame);
	$("#11").click(turn);
	$("#12").click(turn);
	$("#13").click(turn);
	$("#21").click(turn);
	$("#22").click(turn);
	$("#23").click(turn);
	$("#31").click(turn);
	$("#32").click(turn);
	$("#33").click(turn);
}

let clickcount = -1;
let palyer1_wins = 0;
let palyer2_wins = 0;
let clicked1_arr = [0, 0, 0, 0, 0, 0, 0, 0, 0] 
let clicked2_arr = [0, 0, 0, 0, 0, 0, 0, 0, 0] 

function turn(e) {
	let clickedButton = $(this).attr('id');

	clickcount += 1;

	// case palyer 1 (X)
	if(clickcount % 2 == 0)
	{
		if(clickedButton == "11"){
			$("#11:first").html('<img src=images/X.png>');
			clicked1_arr[0] = 1;
			$("#11").unbind();
		}
		else if(clickedButton == "12"){
			$("#12:first").html('<img src=images/X.png>');
			clicked1_arr[1] = 1;
			$("#12").unbind();
		}
		else if(clickedButton == "13"){
			$("#13:first").html('<img src=images/X.png>');
			clicked1_arr[2] = 1;
			$("#13").unbind();
		}
		else if(clickedButton == "21"){
			$("#21:first").html('<img src=images/X.png>');
			clicked1_arr[3] = 1;
			$("#21").unbind();
		}
		else if(clickedButton == "22"){
			$("#22:first").html('<img src=images/X.png>');
			clicked1_arr[4] = 1;
			$("#22").unbind();
		}
		else if(clickedButton == "23"){
			$("#23:first").html('<img src=images/X.png>');
			clicked1_arr[5] = 1;
			$("#23").unbind();
		}
		else if(clickedButton == "31"){
			$("#31:first").html('<img src=images/X.png>');
			clicked1_arr[6] = 1;
			$("#31").unbind();
		}
		else if(clickedButton == "32"){
			$("#32:first").html('<img src=images/X.png>');
			clicked1_arr[7] = 1;
			$("#32").unbind();
		}
		else if(clickedButton == "33"){
			$("#33:first").html('<img src=images/X.png>');
			clicked1_arr[8] = 1;
			$("#33").unbind();
		}

	}

	// case palyer 2 (O)
	else{
		if(clickedButton == "11"){
			$("#11:first").html('<img src=images/O.png>');
			clicked2_arr[0] = 1;
			$("#11").unbind();
		}
		else if(clickedButton == "12"){
			$("#12:first").html('<img src=images/O.png>');
			clicked2_arr[1] = 1;
			$("#12").unbind();
		}
		else if(clickedButton == "13"){
			$("#13:first").html('<img src=images/O.png>');
			clicked2_arr[2] = 1;
			$("#13").unbind();
		}
		else if(clickedButton == "21"){
			$("#21:first").html('<img src=images/O.png>');
			clicked2_arr[3] = 1;
			$("#21").unbind();
		}
		else if(clickedButton == "22"){
			$("#22:first").html('<img src=images/O.png>');
			clicked2_arr[4] = 1;
			$("#22").unbind();
		}
		else if(clickedButton == "23"){
			$("#23:first").html('<img src=images/O.png>');
			clicked2_arr[5] = 1;
			$("#23").unbind();
		}
		else if(clickedButton == "31"){
			$("#31:first").html('<img src=images/O.png>');
			clicked2_arr[6] = 1;
			$("#31").unbind();
		}
		else if(clickedButton == "32"){
			$("#32:first").html('<img src=images/O.png>');
			clicked2_arr[7] = 1;
			$("#32").unbind();
		}
		else if(clickedButton == "33"){
			$("#33:first").html('<img src=images/O.png>');
			clicked2_arr[8] = 1;
			$("#33").unbind();
		}
	}

	// check if someone win
	check_if_win();
	
	$(".divResults:first").html(str);
}

// case push new game 
function cmdNewGame(){

	// rest the scores
	palyer1_wins = 0;
	palyer2_wins = 0;
	
	// call the func that rest the board
	continue_play();
}

// reset the board
function continue_play() {

	clickcount = -1;
	
	clicked1_arr[0] = 0;
	clicked1_arr[1] = 0;
	clicked1_arr[2] = 0;
	clicked1_arr[3] = 0;
	clicked1_arr[4] = 0;
	clicked1_arr[5] = 0;
	clicked1_arr[6] = 0;
	clicked1_arr[7] = 0;
	clicked1_arr[8] = 0;

	clicked2_arr[0] = 0;
	clicked2_arr[1] = 0;
	clicked2_arr[2] = 0;
	clicked2_arr[3] = 0;
	clicked2_arr[4] = 0;
	clicked2_arr[5] = 0;
	clicked2_arr[6] = 0;
	clicked2_arr[7] = 0;
	clicked2_arr[8] = 0;
	
	$("#player1").text(palyer1_wins);
	$("#player2").text(palyer2_wins);

	$("#11:first").html('');
	$("#12:first").html('');
	$("#13:first").html('');
	$("#21:first").html('');
	$("#22:first").html('');
	$("#23:first").html('');
	$("#31:first").html('');
	$("#32:first").html('');
	$("#33:first").html('');

	$("#11").bind();
	$("#12").bind();
	$("#13").bind();
	$("#21").bind();
	$("#22").bind();
	$("#23").bind();
	$("#31").bind();
	$("#32").bind();
	$("#33").bind();

	$("#11").click(turn);
	$("#12").click(turn);
	$("#13").click(turn);
	$("#21").click(turn);
	$("#22").click(turn);
	$("#23").click(turn);
	$("#31").click(turn);
	$("#32").click(turn);
	$("#33").click(turn);
}


function check_if_win()
{
	let flag = 0;
	let counter = 0;

	/**************** check all cases of wins ***************/

				/* all cases of player X win */
	if((clicked1_arr[0] == 1) && (clicked1_arr[1] == 1) && (clicked1_arr[2] == 1))
	{
		palyer1_wins += 1;
		flag = 1;
	}

	else if((clicked1_arr[0] == 1) && (clicked1_arr[3] == 1) && (clicked1_arr[6] == 1))
	{
		palyer1_wins += 1;
		flag = 1;
	}

	else if((clicked1_arr[0] == 1) && (clicked1_arr[4] == 1) && (clicked1_arr[8] == 1))
	{
		palyer1_wins += 1;
		flag = 1;
	}

	else if((clicked1_arr[1] == 1) && (clicked1_arr[4] == 1) && (clicked1_arr[7] == 1))
	{
		palyer1_wins += 1;
		flag = 1;
	}

	else if((clicked1_arr[2] == 1) && (clicked1_arr[5] == 1) && (clicked1_arr[8] == 1))
	{
		palyer1_wins += 1;
		flag = 1;
	}

	else if((clicked1_arr[2] == 1) && (clicked1_arr[4] == 1) && (clicked1_arr[6] == 1))
	{
		palyer1_wins += 1;
		flag = 1;
	}

	else if((clicked1_arr[3] == 1) && (clicked1_arr[4] == 1) && (clicked1_arr[5] == 1))
	{
		palyer1_wins += 1;
		flag = 1;
	}

	else if((clicked1_arr[6] == 1) && (clicked1_arr[7] == 1) && (clicked1_arr[8] == 1))
	{
		palyer1_wins += 1;
		flag = 1;
	}

						/* all cases of player X win */
	if((clicked2_arr[0] == 1) && (clicked2_arr[1] == 1) && (clicked2_arr[2] == 1))
	{
		palyer2_wins += 1;
		flag = 2;
	}

	else if((clicked2_arr[0] == 1) && (clicked2_arr[3] == 1) && (clicked2_arr[6] == 1))
	{
		palyer2_wins += 1;
		flag = 2;
	}

	else if((clicked2_arr[0] == 1) && (clicked2_arr[4] == 1) && (clicked2_arr[8] == 1))
	{
		palyer2_wins += 1;
		flag = 2;
	}

	else if((clicked2_arr[1] == 1) && (clicked2_arr[4] == 1) && (clicked2_arr[7] == 1))
	{
		palyer2_wins += 1;
		flag = 2;
	}

	else if((clicked2_arr[2] == 1) && (clicked2_arr[5] == 1) && (clicked2_arr[8] == 1))
	{
		palyer2_wins += 1;
		flag = 2;
	}

	else if((clicked2_arr[2] == 1) && (clicked2_arr[4] == 1) && (clicked2_arr[6] == 1))
	{
		palyer2_wins += 1;
		flag = 2;
	}

	else if((clicked2_arr[3] == 1) && (clicked2_arr[4] == 1) && (clicked2_arr[5] == 1))
	{
		palyer2_wins += 1;
		flag = 2;
	}

	else if((clicked2_arr[6] == 1) && (clicked2_arr[7] == 1) && (clicked2_arr[8] == 1))
	{
		palyer2_wins += 1;
		flag = 2;
	}

	// case player x win
	if(flag == 1){
		setTimeout(() => { alert(`X win!!`); }, 10);		
	}
	
	// case player 2 win
	else if(flag == 2){
		setTimeout(() => { alert(`O win!!`); }, 10);
	}

	// check if no one wins
	else
	{
		for(let i = 0; i < 9; i++)
		{
			if(clicked1_arr[i] == 1 || clicked2_arr[i] == 1)
				counter++;
		}
		if(counter == 9){
			setTimeout(() => { alert(`No one's win!!`); }, 10);
		
			flag = 3;
		}
	}

	// update the score of the players 
	$("#player1").text(palyer1_wins);
	$("#player2").text(palyer2_wins);

	if(flag != 0)
		setTimeout(() => { continue_play(); }, 10);

}


$(document).ready(initModule);
