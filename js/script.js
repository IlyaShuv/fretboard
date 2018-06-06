var neck = {
	notes: [["F ", "F#/Gb ", "G ", "G#/Ab ", "A ", "A#/Bb ", "B ", "C ", "C#/Db ", "D ", "D#/Eb ", "E "],
					["C ", "C#/Db ", "D ", "D#/Eb ", "E ", "F ", "F#/Gb ", "G ", "G#/Ab ", "A ", "A#/Bb ", "B "],
					["G#/Ab ", "A ", "A#/Bb ", "B ", "C ", "C#/Db ", "D ", "D#/Eb ", "E ", "F ", "F#/Gb ", "G "],
					["D#/Eb ", "E ", "F ", "F#/Gb ", "G ", "G#/Ab ", "A ", "A#/Bb ", "B ", "C ", "C#/Db ", "D "],
					["A#/Bb ", "B ", "C ", "C#/Db ", "D ", "D#/Eb ", "E ", "F ", "F#/Gb ", "G ", "G#/Ab ", "A "],
					["F ", "F#/Gb ", "G ", "G#/Ab ", "A ", "A#/Bb ", "B ", "C ", "C#/Db ", "D ", "D#/Eb ", "E "]],
	frets: [[[170, 422], [170, 496], [169, 567], [169, 633], [168, 694], [168, 752], [167, 807], [166, 858], [166, 907], [165, 953], [165, 995], [164, 1037]],
					[[185, 422], [185, 496], [185, 567], [184, 633], [184, 694], [184, 752], [183, 807], [183, 858], [183, 907], [183, 953], [182, 995], [182, 1037]],
					[[201, 422], [201, 496], [201, 567], [201, 633], [201, 694], [201, 752], [200, 807], [200, 858], [200, 907], [200, 953], [200, 995], [200, 1037]],
					[[216, 422], [216, 496], [216, 567], [217, 633], [217, 694], [217, 752], [218, 807], [218, 858], [218, 907], [219, 953], [219, 995], [219, 1037]],
					[[231, 422], [231, 496], [232, 567], [232, 633], [233, 694], [234, 752], [234, 807], [235, 858], [236, 907], [236, 953], [237, 995], [238, 1037]],
					[[247, 422], [247, 496], [248, 567], [249, 633], [249, 694], [250, 752], [251, 807], [251, 858], [252, 907], [253, 953], [254, 995], [255, 1037]]]

};

var QuestNote = "C ";
var AnswNote = "C ";
var trueCounter = 0;
var allCounter = 0;
var fretsCount = 12;
var modeStrings = 6;
var modeFrets = 12;
var modeOffsetString = 0;
var strMode = "";

function neckNotes() {
	var strNum = Math.ceil(Math.random()*modeStrings+modeOffsetString);
 	var fretNum = Math.ceil(Math.random()*modeFrets);
	$("#neckArea_pointer").css("margin-top", neck.frets[strNum-1][fretNum-1][0]+"px").css("margin-left", neck.frets[strNum-1][fretNum-1][1]+"px");
	$("#neckArea_string").html(strNum);
	$("#neckArea_fret").html(fretNum);
	QuestNote = neck.notes[strNum-1][fretNum-1];
}

function reset() {
	trueCounter = 0;
	allCounter = 0;
	$("#controlArea_trueAns").html(trueCounter);
	$("#controlArea_allAns").html(allCounter);
}

function initialQuestion() {
	$(".neckArea_answer-true").removeClass("neckArea_answer-true");
	$(".neckArea_answer-false").removeClass("neckArea_answer-false");
	$("#neckArea_infoString").html("Какая нота находитя на <span id='neckArea_string'></span> струне на <span id='neckArea_fret'></span> ладу?");
	$("#neckArea_nextButton").css("display", "none");
	$(".neckArea_answer").css("pointer-events", "auto");
}

function start() {
	$(document).ready(function() {
		neckNotes();
	});
	$(".neckArea_answer").click(function() {
		initialQuestion();
		AnswNote = $(this).html();
		if (QuestNote == AnswNote) {
			trueCounter++;
			$(this).addClass("neckArea_answer-true");
			$("#neckArea_infoString").html("Верно!");
			$("#neckArea_nextButton").css("display", "inline-block");
		}
		else {
			$(this).addClass("neckArea_answer-false");
			$("p:contains("+QuestNote+")").addClass("neckArea_answer-true");
			$("#neckArea_infoString").html("Неверно!");
			$("#neckArea_nextButton").css("display", "inline-block");
		}
		allCounter++;
		$("#controlArea_trueAns").html(trueCounter);
		$("#controlArea_allAns").html(allCounter);
		$(".neckArea_answer").css("pointer-events", "none");
	});

	$("#neckArea_nextButton").click(function() {
		initialQuestion();
		neckNotes();
	});

	$(".controlArea_button-reset").click(function() {
		reset();
	});	

	$(".controlArea_button-mode").click(function() {
		$(".controlArea_button-active").removeClass("controlArea_button-active");
		$(this).addClass("controlArea_button-active");
		strMode = $(this).html();
		switch (strMode) {
			case "Все струны до 3 лада": 
				modeFrets = 3;
				modeStrings = 6;
				modeOffsetString = 0;
				break;
			case "5,6 струны": 
				modeFrets = 12;
				modeStrings = 2;
				modeOffsetString = 4;
				break;
			case "Весь гриф":
				modeFrets = 12;
				modeStrings = 6;
				modeOffsetString = 0;
				break;
		}
		reset();
		initialQuestion();
		neckNotes();
	}); 

	$("#neckArea_teleButton").click(function() {
		$(".neckArea_fretTypeButton-active").removeClass("neckArea_fretTypeButton-active");
		$(this).addClass("neckArea_fretTypeButton-active");
		$("#neckArea").css("background", "url('../img/tele_neck.png') no-repeat center");
	});
	$("#neckArea_stratButton").click(function() {
		$(".neckArea_fretTypeButton-active").removeClass("neckArea_fretTypeButton-active");
		$(this).addClass("neckArea_fretTypeButton-active");
		$("#neckArea").css("background", "url('../img/strat_neck.png') no-repeat center");
	});
}


