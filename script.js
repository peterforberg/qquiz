var step = 1;

function steps(){
    document.getElementById("step" + step).style.display="none";
    step++;
    document.getElementById("step" + step).style.display="grid";
}

function backwards() {
    document.getElementById("step" + step).style.display="none";
    step--;
    document.getElementById("step" + step).style.display="grid";
}

function buttonClick(clicked_button) {
    if (getComputedStyle(document.getElementById(clicked_button)).opacity == "0.5") {
         document.getElementById(clicked_button).style.opacity = "1";
    } else if (getComputedStyle(document.getElementById(clicked_button)).opacity == "1") {
         document.getElementById(clicked_button).style.opacity = "0.5";
    }
}

function setDisplay(media,clicked_id) {
    var medias = ["fb", "twt", "chan", "yt"];
    var mediasb = ["fbb", "twtb", "chanb", "ytb"];
    for (i in medias) {
        if (medias[i] == media) {
            document.getElementById(media).style.display="grid";
        } else {
            document.getElementById(medias[i]).style.display="none";
        }
    for (i in mediasb) {
        if (mediasb[i] == clicked_id) {
            document.getElementById(clicked_id).style.opacity="1";
        } else {
            document.getElementById(mediasb[i]).style.opacity="0.5";
        }
    }
    let vid = document.getElementById("killingbirdq");        
    vid.pause();
    }
}

function republicanButton() {
    document.getElementById(12).style.opacity = "0.5";
    document.getElementById(13).style.opacity = "0.5";
}

function democratButton() {
    document.getElementById(11).style.opacity = "0.5";
    document.getElementById(13).style.opacity = "0.5";
}

function apoliticalButton() {
    document.getElementById(11).style.opacity = "0.5";
    document.getElementById(12).style.opacity = "0.5";
}

function generateText() {
    let message = "";
    for (i in sentences) {
        console.log(i);
        if (i == 10 || i == 19) {
            message = message + sentences[i];
        } else if (getComputedStyle(document.getElementById(i)).opacity == "1") {
            message = message + sentences[i];
        }
        document.getElementById("generatedText").innerHTML = message;
    } 
};

var sentences = [
    "As a parent, you understand the importance of a safe and secure childhood, but the modern world isn’t like how it used to be. ", //0
    "The most powerful people in the world commit horrendous crimes against children yet are protected by wealth and intimidation. ", //1
    "The average Joe is criminalized, as if he has any choice, blamed for the world the people in charge created. ", //2
    "America itself is changing, and the culture and civility it once had is being threatened by outsiders who would like to see us vanish. ", //3
    "The world is set up for you to fail, with no one on your side. ", //4
    "You were promised the American dream, but instead you watched as evil people took everything they wanted and left you with nothing. ", //5
    "You can’t trust these doctors; they care more about profit than people. ", //6
    "You can’t trust these schools; they brainwash our children to keep them complacent. ", //7
    "You can’t trust the people who are supposed to tell you the truth; they lie and sow chaos just to earn a quick buck! ", //8
    "You thought this world would be better a place when you left it, and now that seems less and less likely. ", //9
    "But maybe there is a solution: there is Q. Q is working to take down the elites who have created this dystopia, the ones who steal away children and spend all of our wealth. ", //10 all
    "The politicians who are trying to usher in a New World Order in their socialist image are about to be taken down. ", //11
    "The politicians who are in the pocket of big corporations and ushering in fascism are about to be taken down. ", //12
    "The politicians who have never cared about you or your life are about to be taken down. ", //13
    "It’s time to get back on the battlefield, be a part of the digital army that can save the world. ", //14
    "Join the Great Awakening, and with the Lord by your side there will be a spiritual revolution unlike anything this country has seen before. ", //15
    "Let your mind open to new possibilities, new futures, and new dimensions. It's your destiny. ", //16
    "The storm is coming, and you are essential for spreading the world, for helping the people who can’t tell good from evil. ",//17
     "We’re in this together: where we go one, we go all. ", //18
     "Trust the plan."]//19 all