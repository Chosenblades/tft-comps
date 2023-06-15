export class Champion {
	id: number;
	name: string;
	cost: number;
	traits: string[];
	position: Position;
	borderColor: string;

	constructor(id: number, name: string, cost: number, traits: string[], position: Position) {
		this.id = id;
		this.name = name;
		this.cost = cost;
		this.traits = traits;
		this.position = position;
		this.borderColor = UNIT_COLORS[this.cost - 1];
	}

	getBorderColor(): string {
		return '#000'; //UNIT_COLORS[this.cost - 1];
	}
}

type Position = { row: number; column: number };
const UNIT_COLORS: string[] = ['#687989', '#20b157', '#18c1ee', '#c61b95', '#f6850b'];
