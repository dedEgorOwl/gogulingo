import listening_1 from '/audios/listening_1.mp3';
import listening_2 from '/audios/listening_2.mp3';
import listening_3 from '/audios/listening_2.mp3';

const audioPlayer = (audioId) => {
	switch (audioId) {
		case 0:
			new Audio(listening_1).play();
			break;
		case 1:
			new Audio(listening_2).play();
			break;
		case 2:
			new Audio(listening_3).play();
			break;
		default:
			break;
	}
};

export default audioPlayer;
