interface Date {
	// Utility function to append a 0 to single-digit numbers
	LZ(x:string):string;
	// Full month names. Change this for local month names
	monthNames : Array<string>;
	// Month abbreviations. Change this for local month names
	monthAbbreviations : Array<string>;
	// Full day names. Change this for local month names
	dayNames : Array<string>;
	// Day abbreviations. Change this for local month names
	dayAbbreviations : Array<string>;
	// Used for parsing ambiguous dates like 1/2/2000 - default to preferring 'American' format meaning Jan 2.
	// Set to false to prefer 'European' format meaning Feb 1
	preferAmericanFormat : bool;

	// Parse a string and convert it to a Date object.
	// If no format is passed, try a list of common formats.
	// If string cannot be parsed, return null.
	// Avoids regular expressions to be more portable.
	parseString(val : string, format:string);

	// Check if a date string is valid
	isValid(val,format):bool;

	// Check if a date object is before another date object
	isBefore(date2:Date):bool;

	// Check if a date object is after another date object
	isAfter(date2:Date):bool;

	// Check if two date objects have equal dates and times
	equals(date2:Date):bool;

	// Check if two date objects have equal dates, disregarding times
	equalsIgnoreTime(date2:Date) :bool;

	// Format a date into a string using a given format string
	format(format):string

	// Get the full name of the day for a date
	getDayName() :string;

	// Get the abbreviation of the day for a date
	getDayAbbreviation() :string;

	// Get the full name of the month for a date
	getMonthName():string;

	// Get the abbreviation of the month for a date
	getMonthAbbreviation() :string;

	// Clear all time information in a date object
	clearTime():void;

	// Add an amount of time to a date. Negative numbers can be passed to subtract time.
	add(interval:string, amount:number):Date;
}
