

let firstChoice  = window.prompt('Do you head left or right?')

function firstChoice(){
    const choice = "left"

    switch(choice){
        case "left":
            window.alert(`You come across a stray cat. 
            It scampers off down a small hole, just large enough for you to crawl through. 
            Do you follow it, or continue on your path?`);
            break;
        
        case "right":
            window.alert(`You come across a snoring dragon. 
            On the other side of him, you see a shiny chest of treasure. Another path would 
            lead you away from the dragon altogether. Which path do you take?`);
            break;
        }
    }

function left(){
    const choice = "follow"

    switch(choice){
        case "follow":
            window.alert(`You follow the cat to a colony of cats,
            nestled in a fort of warm blankets and subsisting off inexplicably warm soup.
            They are content with you staying, but you wonder if you should alert the world
            to this magical safe haven.`)
            break;

        case "continue":
            window.alert(`You come across a chamber that reaches upward to 
            a shining light above. There is a long, winding staircase, and a much quicker, 
            but rickety-looking ladder that leads up toward the light. Which do you take?`)
            break;
        }
    }

function follow(){

    window.prompt(`You follow the cat to a colony of cats,
        nestled in a fort of warm blankets and subsisting off inexplicably warm soup.
        They are content with you staying, but you wonder if you should alert the world
        to this magical safe haven.`)

    const choice = "stay"

    switch(choice){
        case "stay":
            window.alert(`You live happily amongst the cats for the rest of your days.`)

        case "spread the word":
            window.alert(`After leaving the cat colony, you are never able to find it again; 
            without proof, no one believes your story, which passes into legend nonetheless.`)
    }
}

function progress(){

    window.prompt(`You come across a chamber that reaches upward to 
    a shining light above. There is a long, winding staircase, and a much quicker, 
    but rickety-looking ladder that leads up toward the light. Which do you take?`)

    const choice = "ladder"

    switch(choice){
        case "ladder":
            window.alert(`After ascending a few feet up the ladder, one of its rungs snaps,
             and you comedically fall through each of the rungs below. Sheepish, you return 
             home.`)

        case "staircase":
            window.alert(`After ascending the staircase, you discover a shiny blue stone, 
            which you take home and cherish forever.`)
    }

}

function right(){
    const choice = "pastthedragon"

    switch(choice){
        case "past the dragon":
            window.alert(`The dragon wakes up and sits upright. 
            You only have a moment to respond, to stay or run:`)
            break;

        case "away from the dragon":
            window.alert(`After walking a while longer, you come across
             a shiny blue flower. It is so beautiful that you decide you must either draw 
             it or pick it. Which do you do?`)
             break;
    }

}



