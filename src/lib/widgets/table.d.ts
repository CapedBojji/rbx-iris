import { Hovered, WidgetArguments, WidgetEvents, WidgetState } from "./creation/utils";

type TableArguments = [
	NumColumns: number,
	Header?: boolean,
	RowBackground?: boolean,
	OuterBorders?: boolean,
	InnerBorders?: boolean,
	Resizable?: boolean,
	FixedWidth?: boolean,
	ProportionalWidth?: boolean,
	LimitTableWidth?: boolean,
];
type TableEvents = Hovered;
type TableState = {
	widths: number[];
};

export type TableDeclaration = WidgetArguments<TableArguments> & WidgetEvents<TableEvents> & WidgetState<TableState>;
