
function parseCardsString(str){
    //Cards saved as one markdown file with labels as headings and descriptions as pargraphs. Colors can be indicated 
    //immediately after heading marker and checkmarks directly after that
    //in this way: "# [1] [x] Label Text". Number corresponds to preset color, 0=default, which doesn't have to be included.
    //The bracketed X indicates the card is checked off.

    let firstLabel = /^# (.*)\n\n/;
    let label = /^# (.*)\n\n/gm;
    let newLines = /\r|\n/gm;
    let colorNum = /^\[(\d)\] /; 
    let checkMarker = /^\[[xX]\] /;

    let partialFirstLabel = /^# (.*\n?)$/;


    //escape JSON chars
    str = str.replaceAll('\\','\\\\');
    str = str.replaceAll('/','\\/');
    str = str.replaceAll('"','\\"');
    str = str.replaceAll('\t','\\t'); 

    //For live input, if user is entering a partial first label, autofill an empty description so it can be parsed
    str = str.replace(partialFirstLabel, '[{"label":"$1", "descr":"');

    str = str.replace(firstLabel, '[{"label":"$1", "descr":"');
    str = str.replace(label, '"}, {"label":"$1", "descr":"');
    str = str.replace(newLines, '\\n');
    str = str + '"}]';

    

    var rawCards;
    try{
        rawCards = JSON.parse(str);
    }
    catch(err){
        console.log('PARSING ERROR> Input text is not formatted correctly.');
        rawCards = [{
            label: 'PARSING ERROR',
            descr: 'Input text is not formatted correctly.'
        }];
        console.log(str);
    }
    

    for(i=0;i<rawCards.length;i++){
        var color = rawCards[i].label.match(colorNum);
        if(color){
            rawCards[i].label = rawCards[i].label.replace(colorNum, '');
            rawCards[i].color = color[1];
        }
        else {
            rawCards[i].color = 0;
        }
        var check = rawCards[i].label.match(checkMarker);
        if(check){
            rawCards[i].label = rawCards[i].label.replace(checkMarker, '');
            rawCards[i].checked = true;
        }
        else {
            rawCards[i].checked = false;
        }

        rawCards[i].descr = rawCards[i].descr.trim();
    }

    return rawCards;
}

function generateCardsString(cards){
    var cardsString = '';

    for(i=0;i<cards.length;i++){
        let card = cards[i];

        cardsString += '# ';
        if(card.color && card.color != 0)
            cardsString += '[' + card.color + '] ';
        if(card.checked == true)
            cardsString += '[x] ';
        cardsString += card.label + '\n\n';

        cardsString += card.descr + '\n\n';
    }
    
    return cardsString;
}
