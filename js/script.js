var neck = {
	notes: [["F ", "F#/Gb ", "G ", "G#/Ab ", "A ", "A#/Bb ", "B ", "C ", "C#/Db ", "D ", "D#/Eb ", "E "],
					["C ", "C#/Db ", "D ", "D#/Eb ", "E ", "F ", "F#/Gb ", "G ", "G#/Ab ", "A ", "A#/Bb ", "B "],
					["G#/Ab ", "A ", "A#/Bb ", "B ", "C ", "C#/Db ", "D ", "D#/Eb ", "E ", "F ", "F#/Gb ", "G "],
					["D#/Eb ", "E ", "F ", "F#/Gb ", "G ", "G#/Ab ", "A ", "A#/Bb ", "B ", "C ", "C#/Db ", "D "],
					["A#/Bb ", "B ", "C ", "C#/Db ", "D ", "D#/Eb ", "E ", "F ", "F#/Gb ", "G ", "G#/Ab ", "A "],
					["F ", "F#/Gb ", "G ", "G#/Ab ", "A ", "A#/Bb ", "B ", "C ", "C#/Db ", "D ", "D#/Eb ", "E "]],
	frets: [[[318, 422], [318, 496], [317, 567], [317, 633], [316, 694], [316, 752], [315, 807], [314, 858], [314, 907], [313, 953], [313, 995], [312, 1037]],
					[[333, 422], [333, 496], [333, 567], [332, 633], [332, 694], [332, 752], [331, 807], [331, 858], [331, 907], [331, 953], [330, 995], [330, 1037]],
					[[349, 422], [349, 496], [349, 567], [349, 633], [349, 694], [349, 752], [348, 807], [348, 858], [348, 907], [348, 953], [348, 995], [348, 1037]],
					[[364, 422], [364, 496], [364, 567], [365, 633], [365, 694], [365, 752], [366, 807], [366, 858], [366, 907], [367, 953], [367, 995], [367, 1037]],
					[[379, 422], [379, 496], [380, 567], [380, 633], [381, 694], [382, 752], [382, 807], [383, 858], [384, 907], [384, 953], [385, 995], [386, 1037]],
					[[395, 422], [395, 496], [396, 567], [397, 633], [397, 694], [398, 752], [399, 807], [399, 858], [400, 907], [401, 953], [402, 995], [403, 1037]]]

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
			$("#neckArea_infoString").html("Верно!<span id='neckArea_nextButton'>Следующий вопрос</span>");
		}
		else {
			$(this).addClass("neckArea_answer-false");
			$("p:contains("+QuestNote+")").addClass("neckArea_answer-true");
			$("#neckArea_infoString").html("Неверно!<span id='neckArea_nextButton'>Следующий вопрос</span>");
		}
		allCounter++;
		$("#controlArea_trueAns").html(trueCounter);
		$("#controlArea_allAns").html(allCounter);

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
}


