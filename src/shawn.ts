
const rephrase = (
	phrase: string,
	pedantic: boolean = false
): string => {
	let sean_phrase: string = phrase

	//replace sean with Shawn
	sean_phrase = sean_phrase.replace(/([s,S])(ean)/, '$1awn')

	// Remove h after s
	sean_phrase = sean_phrase.replace(/([s,S])([h,H])/g, '$1')

	// Replace c/C with sh/Sh only if followed by a vowel
	sean_phrase = sean_phrase.replace(/(c)([eiyEIY])/g,'s$2')
	sean_phrase = sean_phrase.replace(/(C)([eiyEIY])/g,'S$2')

	if (pedantic){ 
		// pedantic flag replaces sea/Sea with shaw/Shaw
		sean_phrase = sean_phrase.replace(/s(ea|eA|Ea|EA)/g,'saw');
		sean_phrase = sean_phrase.replace(/S(ea|eA|Ea|EA)/g,'Saw');
	}

	// collapse multiples of ss.../Ss... with s/S
	sean_phrase = sean_phrase.replace(/s+/g, 's');
	sean_phrase = sean_phrase.replace(/S+/g, 'S');
	sean_phrase = sean_phrase.replace(/Ss/g, 'S');
	sean_phrase = sean_phrase.replace(/sS/g, 's');

	sean_phrase = sean_phrase.replace(/([s|S])/g, '$1h')

	return sean_phrase;
}

export {
	rephrase
}
