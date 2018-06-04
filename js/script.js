var neck = {
	notes: [["F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E"],
					["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"],
					["G#/Ab", "A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G"],
					["D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B", "C", "C#/Db", "D"],
					["A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A"],
					["F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E"]],
	frets: [[[318, 422], [318, 496], [317, 567], [317, 633], [316, 694], [316, 752], [315, 807], [314, 858], [314, 907], [313, 953], [313, 995], [312, 1037]],
					[[333, 422], [333, 496], [333, 567], [332, 633], [332, 694], [332, 752], [331, 807], [331, 858], [331, 907], [331, 953], [330, 995], [330, 1037]],
					[[349, 422], [349, 496], [349, 567], [349, 633], [349, 694], [349, 752], [348, 807], [348, 858], [348, 907], [348, 953], [348, 995], [348, 1037]],
					[[364, 422], [364, 496], [364, 567], [365, 633], [365, 694], [365, 752], [366, 807], [366, 858], [366, 907], [367, 953], [367, 995], [367, 1037]],
					[[379, 422], [379, 496], [380, 567], [380, 633], [381, 694], [382, 752], [382, 807], [383, 858], [384, 907], [384, 953], [385, 995], [386, 1037]],
					[[395, 422], [395, 496], [396, 567], [397, 633], [397, 694], [398, 752], [399, 807], [399, 858], [400, 907], [401, 953], [402, 995], [403, 1037]]]

};

var QuestNote = "C";
var AnswNote = "C";
var trueCounter = 0;
var allCounter = 0;

function neckNotes() {
	var strNum = Math.ceil(Math.random()*6);
 	var fretNum = Math.ceil(Math.random()*12);
	$("#neckArea_pointer").css("margin-top", neck.frets[strNum-1][fretNum-1][0]+"px").css("margin-left", neck.frets[strNum-1][fretNum-1][1]+"px");
	$("#neckArea_string").html(strNum);
	$("#neckArea_fret").html(fretNum);
	QuestNote = neck.notes[strNum-1][fretNum-1];
}

function start() {
	$(document).ready(function() {
		neckNotes();
	});
	$(".neckArea_answer").click(function() {
		$(".neckArea_answer").css("background-color", "white");
		AnswNote = $(this).html();
		if (QuestNote == AnswNote) {
			trueCounter++;
			$(this).css("background-color", "green");
		}
		else {
			$(this).css("background-color", "red");
		}
		allCounter++;
		$("#controlArea_trueAns").html(trueCounter);
		$("#controlArea_allAns").html(allCounter);
		neckNotes();
	});
	$(".controlArea_button-reset").click(function() {
		trueCounter = 0;
		allCounter = 0;
		$("#controlArea_trueAns").html(trueCounter);
		$("#controlArea_allAns").html(allCounter);
	});
}


