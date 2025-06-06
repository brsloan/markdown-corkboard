# markdown-corkboard

Digital corkboard that saves as a plain text markdown file readable as an outline, for planning novels/stories/screenplays. Test it live at [https://brsloan.github.io/markdown-corkboard/](https://brsloan.github.io/markdown-corkboard/).

![screenshot of program described](markdown-corkboard_screenshot.png?raw=true)

Written entirely in vanilla client-side Javascript. Basic functionality but still early stages.

## How Do You Use it?

You create cards on a digital corkboard, each representing a chapter or scene. Each card has a title and description, and can be optionally given a color and checked off as completed. (For instance, you might check off each scene as you write them.) Then you can shift the cards around to re-order them. There are also "board divisions", dotted lines that divide the cards into equal groups.  You can make as many divisions as you like, including one, meaning one continuous group. If you are writing a five-act play, you would use five divisions so that you can visually see each act as its own group of cards. Alternatively, you may think in terms of three acts (beginning, middle, end) and use three divisions to get a quick sense of the progression of your novel. Altering the number of divisions does not change your cards--only how they are presented--so you can try different ways of viewing and thinking about your work.

As you edit using the digital corkboard, you will see the markdown document on the right update accordingly. Conversely, you can edit the document directly and see the corkboard update. (But beware that you may see some strange results as you edit the document directly: it has to follow a certain structure, which is very simple but must be followed exactly to avoid any weird results. Generally it's pretty easy to fix if you mess anything up.)

When you save a corkboard, it saves as this plain text document, which can double as an outline even without the corkboard. That also means you can write an outline in any text editor, and if you follow the simple markdown structure required, you can load it into Markdown Corkboard and it will automatically render as a visual corkboard.

## What is this special Markdown document structure?

You can use Markdown Corkboard without worrying about the text document at all, but if you want to know how it works or write/edit it directly, it is very simple.

Each card is represented by a heading, which is the title, followed by a paragraph, which is the description. In markdown terms, that means you will write one line with a # symbol as the first character, followed by a space, and then your title, like this: 

>\# Card Title

Then hit enter twice to create a blank line, and below the blank line write your description. Repeat for each card, leaving a blank line between each card, and that's it!

    # First Card Title
    
    First card description.

    # Second Card Title

    Second card description.

So far that is all standard Markdown, so you can open a corkboard document in any markdown editor and it will display correctly as a series of headings and paragraphs, but there are two additional features Corkboard uses which are not a part of normal Markdown. These are symbols to denote what color the card is and whether it is checked off, and they are very simple.

To assign a color to a card, after the # symbol in the title, add square brackets with a single-digit number between 1-9 to assign a color to it, like this: 

>\# [1] Card Title

To mark a card as checked off, add square brackets with an X between them, like this: 

>\# [x] Card Title

If any card has both a color and is checked off, the color must come before the check, like this: 

>\# [1] [x] Card Title

That's it!

# Shortcuts

### Navigation

Move Between Cards - Cmd/Ctrl + Arrows

### Alteration

Move Selected Card - Cmd/Ctrl + Shift + Arrows

Insert Card	 - Cmd/Ctrl + I

Delete Card - 	Cmd/Ctrl + Delete/Backspace

Mark Card Finished - 	Cmd/Ctrl + Enter

Color Card - 	Cmd/Ctrl + [1-9]

Clear Color - 	Cmd/Ctrl + 0

### Presentation

Add Board Divisions - 	Cmd/Ctrl + >

Remove Board Divisions - 	Cmd/Ctrl + <

### Most Important

Save Changes - 	Cmd/Ctrl + S
