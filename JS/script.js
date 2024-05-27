"use strict";

// RESIZE BAR
var resize1 = document.querySelector(".resize--1"),
  section1 = document.querySelector(".section--1");

function initResizerFn(resize, section) {
  //track current mouse position in the x variable
  var x, w;

  function rs_mouseDownHandler(e) {
    x = e.clientX;

    var sbWidth = window.getComputedStyle(section).width;

    w = parseInt(sbWidth, 10);

    document.addEventListener("mousemove", rs_mousemoveHandler);
    document.addEventListener("mouseup", rs_mouseUpHandler);
  }

  function rs_mousemoveHandler(e) {
    var dx = e.clientX - x;

    var cw = w + dx; //complete width
    var cwPercentage = cw / 10;

    if (cwPercentage > 20 && cwPercentage < 60) {
      section.style.width = `${cw}px`;
    }
  }

  function rs_mouseUpHandler() {
    // remove event mousemove && mouseup

    document.removeEventListener("mouseup", rs_mouseUpHandler);
    document.removeEventListener("mousemove", rs_mousemoveHandler);
  }

  resize.addEventListener("mousedown", rs_mouseDownHandler);
}

initResizerFn(resize1, section1);

// ---------------
// SONG DETAILS
// ---------------

const songLinks = document.querySelectorAll(".reference-link");
const audioElement = document.getElementById("audio");

songLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const songInfo = link.closest(".songs");
    const imagePath = songInfo.querySelector(".album-cover img").src;
    const songTitle = songInfo.querySelector(".song-title p").textContent;
    const singer = songInfo.querySelector(".singer p").textContent;

    localStorage.setItem("imagePath", imagePath);
    localStorage.setItem("songTitle", songTitle);
    localStorage.setItem("singer", singer);

    window.location.href = "details.html";
    playButton.src = "../Assets/Website Resources/Icons /play-button.png";
  });
});

const imagePath = localStorage.getItem("imagePath");
const songTitle = localStorage.getItem("songTitle");
const singer = localStorage.getItem("singer");
const songLyrics = document.querySelector(".song-lyrics p");
const songYear = document.querySelector(".song-year");
const songDuration = document.querySelector(".song-length");

// Update elements in details.html with retrieved information
document.querySelector(".song-img").src = imagePath;
document.querySelector(".song-name").textContent = songTitle;
document.querySelector(".singer-name p").textContent = singer;
document.querySelector(".audio-player-song-img").src = imagePath;
document.querySelector(".audio-player-song-name").textContent = songTitle;
document.querySelector(".audio-player-singer").textContent = singer;

if (songTitle === "More Than A Woman" && singer === "Bee Gees") {
  const newLyrics =
    "<p>Oh, girl, I've known you very well<br /> I've seen you growing every day <br />I never really looked before<br />But now you take my breath away<br />Suddenly you're in my life<br />Part of everything I do<br /> You got me working day and night<br /> Just tryin' to keep a hold on you <br /><br /> Here in your arms I found my paradise<br />My only chance for happiness<br />And if I lose you now, I think I would die<br />Oh, say you'll always be my baby, we can make it shine<br />We can take forever, just a minute at a time<br /><br />More than a woman<br />More than a woman to me<br />More than a woman<br />More than a woman to me<br /><br />There are stories old and true<br />Of people so in love like you and me<br />And I can see myself<br />Let history repeat itself<br />Reflecting how I feel for you<br />Thinking 'bout those people then<br />I know that in a thousand years<br />I'd fall in love with you again<br /><br />This is the only way that we should fly<br />This is the only way to go<br />And if I lose your love, I know I would die<br />Oh, say you'll always be my baby, we can make it shine<br />We can take forever, just a minute at a time<br /><br />More than a woman<br />More than a woman to me<br />More than a woman (ooh, my baby)<br />More than a woman to me<br />HeyMore than a woman<br />More than a woman to me (oh, so much more)<br />More than a woman (oh, baby)<br />More than a woman to me<br />More than a woman<br />More than a woman to me<br />More than a woman<br />More than a woman to me<br />More than a woman<p>";
  const newYear = "1977";
  const newDuration = "3:17";
  const newSong =
    "../Assets/Website Resources/Audio/Bee Gees - More Than A Woman .mp3";
  songYear.innerHTML = newYear;
  songDuration.innerHTML = newDuration;
  songLyrics.innerHTML = newLyrics;
  audioElement.src = newSong;
} else if (
  songTitle === "Favorite Time Of Year" &&
  singer === "Carrie Underwood"
) {
  const newLyrics =
    "<p>Yeah<br />Break out the tinsel<br /> Unpack the lights <br />We're about to bring on the merry and bright<br /> I hear those jingle <br />Bells in the air <br />Ringing out the sound of joy everywhere<br />'Tis the season we've been waiting for(Waiting, don't keep me waiting)<br />Can't you feel it knocking at your door?(Knock knock, it's knocking at your door)<br /><br />Love pouring out like the snow from the sky<br />Snuggled up together sitting by the fire<br />Oh, it's magical, it's my favorite time<br />Pretty little wishes tied up in a bow<br />And every little kiss is like we're underneath tmistletoe<br />It's music to my ears<br />Christmas is my favorite time of year<br /><br />Stockings on chimneys<br />Angels on the trees<br />Sugar and cinnamon<br />It's the little things<br />Blankets and movies<br />In black and white<br />Together they make up this colorful life<br />'Tis the season we've been waiting for(Waiting, don't keep me waiting)<br />Oh, can't you feel it knocking at your door?(Knock knock, it's knocking at your door)<br /><br />Love pouring out like the snow from the sky<br />Snuggled up together sitting by the fire<br />Oh, it's magical, it's my favorite time<br />Pretty little wishes tied up in a bow<br />And every little kiss is like we're underneath tmistletoe<br />It's music to my ears<br />Christmas is my favorite time of year, woo<br />Christmas is my favorite time(Christmas is my favorite time of year)<br />Oh, don't keep me waiting, yeah<br /><br />Love pouring out like the snow from the sky<br />Snuggled up together sitting by the fire<br />Oh, it's magical, it's my favorite time<br />Pretty little wishes tied up in a bow<br />And every little kiss is like we're underneath tmistletoe<br />It's music to my ears<br />Christmas is my favorite time of year<br />(Christmas is my favorite time)<br />Christmas is my favorite time of year<br />Oh yes, it is<p>";
  const newYear = "2021";
  const newDuration = "3:17";
  const newSong =
    "../Assets/Website Resources/Audio/Carrie Underwood - Favorite Time Of The Year - (Lyrics).mp3";
  songLyrics.innerHTML = newLyrics;
  songYear.innerHTML = newYear;
  songDuration.innerHTML = newDuration;
  audioElement.src = newSong;
} else if (songTitle === "Islands in the Stream" && singer === "Dolly Parton") {
  const newLyrics =
    "<p>Baby, when I met you there was peace unknown<br />I set out to get you witha fine tooth comb<br />I was soft inside<br />There was something goingon<br /><br />You do something to me that I can't explain<br />Hold me closer and I feelno pain<br />Every beat of my heart<br />We got something going on<br /><br />Tender love is blind<br />It requires a dedication<br />All this love we feel<br />needs no conversatio<br />We ride it together, ah ha <br />Making love with eachother, ah ha<br /><br />Islands in the stream<br />That is what we are<br />No one in between<br />How can we be wrong<br />Sail away with me<br />To another world<br />And we rely on eachother, ah ha<br />From one lover to another, ah ha<br /><br />I can't live without you if the love was gone<br />Everything is nothing if you got no one<br />And you did walk in the night <br />Slowly losing sight of the real thing<br /><br />But that won't happen to us and we got no doub<br />Too deep in love and we got no way out<br />And the message is clear<br />This could be the year for the real thing<br />No more will you cry <br />Baby, I will hurt you never <br />We start and end as one<br /> In love foreve <br />We can ride it together,ah ha <br />Making love with eachother, ah ha<br /><br />Islands in the stream<br />That is what we are<br />No one in between<br />How can we be wrong?<br />Sail away with me<br />To another world<br />And we rely on eachother, ah ha<br />From one lover to another, ah ha<br /><br />Sail away<br />Oh, come sail away with me<br /><br />Islands in the stream<br />That is what we are<br />No one in between<br />How can we be wrong?<br />Sail away with me<br />To another world<br />And we rely on eachother, ah ha<br />From one lover to another, ah ha<br /><br />Islands in the stream<br />That is what we are<br />No one in between<br />How can we be wrong?<br />Sail away with me <br />To another world<br />And we rely on eachother, ah ha<br />From one lover to another, ah ha<br /><br />Islands in the stream<br />That is what we are<br />No one in between<p>";
  const newYear = "1983";
  const newDuration = "4:10";
  const newSong =
    "../Assets/Website Resources/Audio/Dolly Parton, Kenny Rogers - Islands In the Stream (Official Audio).mp3";
  audioElement.src = newSong;
  songLyrics.innerHTML = newLyrics;
  songYear.innerHTML = newYear;
  songDuration.innerHTML = newDuration;
} else if (songTitle === "Cuts Heal in Time" && singer === "Mac Ayres") {
  const newLyrics =
    "<p>Guess I should've known ya the only thing to say, yeah<br />Took your hand and folded, don't you walk away (yeah-yeah)<br />I keep my bridges burning, it's bringing me some light, yeah<br />So I just keep it moving, I don't wanna pick no fights<br /><br />Singing darling, if you holding onto something<br />Said it better be a damn good one thing<br />Singing darling, if you holding onto something<br /><br />Not a damn soul left to put some trust in<br />Get what you need, then you hit the ground running<br /><br />Tell me who's that in my corner?<br />Crying on my own shoulder<br />Not my first time<br />I hope you sleep fine<br /><br />Said I been trying, cuts heal in time<br />You heard another thing, but I'm hearing lies<br />But I wish that I could take it back<br />Oh, I wish that we could take it back (wish that we could take it back)<br />Cutting your ties, recycling line<br />Telling 'em everything but you can't do anything, no<br />Aren't we all so close? (Still, I ask myself)<br /><br />Said I been trying, cuts heal in time<br />You heard another thing, but I'm hearing lies<br />But I wish that I could take it back<br />Oh, I wish that we could take it back, no<br />Cutting your ties, recycling lines<br />Telling 'em everything but you can't do anything, no<br />Aren't we all so close?<p>";
  const newYear = "2019";
  const newDuration = "2:52";
  const newSong = "../Assets/Website Resources/Audio/Cuts Heal in Time.mp3";
  audioElement.src = newSong;
  songLyrics.innerHTML = newLyrics;
  songYear.innerHTML = newYear;
  songDuration.innerHTML = newDuration;
  audioElement.src = newSong;
} else if (songTitle === "Give Me The Night" && singer === "George Benson") {
  const newLyrics =
    "<p>Whenever dark has fallen<br /> You know the spirit of the party<br />Starts to come alive<br />Until the day is dawning<br />You can throw out all your blues<br />And hit the city lights'<br /><br />Cause there's music in the air <br />And lots of lovin' everywhere<br />So gimme the night <br />Gimme the night<br /><br />You need the evening action <br />A place to dine, a glass of wine<br /> A little late romance<br /> It's a chain reaction <br />You'll see the people of the world<br /> Coming out to dance <br /><br />'Cause there's music in the air<br />And lots of lovin' everywhere<br />So gimme the night<br />Gimme the night<br /><br />So come on out tonight<br />And we'll lead the others<br />On a ride through paradise<br />And if you feel all right<br />Then we can be lovers<br /><br />'Cause I see that starlight<br />Look in your eyesDon't you know we can fly<br />Just gimme the night<br />Gimme the night<br /><br />'Cause there's music in the air <br />And lots of lovin' everywhere <br />So gimme the night <br />Gimme the night<br /><br /> So come on out tonight <br />And we'll lead the others<br /> On a ride through paradise <br />And if you feel all right<br /><br />Then we can be lovers'<br />Cause I see that starlight<br />Look in your eyes<br /> Don't you know we can fly<br /><br />And if we stay together<br />We'll feel the rhythm of the evening <br />Taking us up high<br />Never mind the weather <br />We'll be dancing in the street<br />Until the morning light<br /><br />'Cause there's music in the air<br />And lots of lovin' everywhere<br />So gimme the night<br /><br />Gimme the night<br />Gimme the night<br />Gimme the night<br />Gimme the night<br />Gimme the night<br />Gimme the night<br /><br />So, gimme the night<br />'Cause there's music in the air<br />And lots of lovin' everywhere<br />So gimme the night<br /><br />Gimme the night<br />Gimme the night<br />Gimme the night<br />Gimme the night<br />Gimme the night<br />Gimme the night<br /><br />So, gimme the night<br />'Cause there's music in the air<br />And lots of lovin' everywhere<br />So gimme the night<br /><br />Gimme the night<br />Gimme the night<br />Gimme the night<br />Gimme the night<br />Gimme the night<br />Gimme the night<br />So, gimme the night<p>";
  const newYear = "1980";
  const newDuration = "5:01";
  const newSong = "../Assets/Website Resources/Audio/Give Me the Night-2.mp3";
  audioElement.src = newSong;
  songLyrics.innerHTML = newLyrics;
  songYear.innerHTML = newYear;
  songDuration.innerHTML = newDuration;
} else if (songTitle === "I Will Survive" && singer === "Gloria Gaynor") {
  const newLyrics =
    "<p>At first, I was afraid, I was petrified<br />Kept thinking I could never live without you my side<br />But then I spent so many nights thinking how you did me wrong<br />And I grew strong, and I learned how to get along<br /><br />And so you're back from outer space<br />I just walked in to find you here with that slook upon your face<br />I should have changed that stupid lock<br />I should have made you leave your key<br />If I'd have known for just one second you'd back to bother me<br /><br />Go on now, go. Walk out the door<br />Just turn around now<br /> 'cause you're not welcomeanymore<br />Weren't you the one who tried to hurt me with goodbye?<br />Did you think I'd crumble?<br />Did you think I'd lay down and die?<br /><br />Oh, no, not I<br />I will survive<br />Oh, as long as I know how to love I know I'll stay alive<br />I've got all my life to live<br />I've got all my love to give<br />And I'll survive<br />I will survive, hey, hey<br /><br />It took all the strength I had not to fall apart<br />Kept trying hard to mend the pieces of broken heartvAnd I spent, oh, so many nights just feeling sorry for myself<br />I used to cry, but now I hold my head up high<br /><br />And you see me somebody new<br />I'm not that chained-up little person still in love with you<br />And so you felt like dropping in <br />And just expect me to be free <br />And now I'm saving all my loving for someone who's loving me<br /><br />Go on now, go. <br />Walk out the door<br />Just turn around now <br />'cause you're not welcoanymore<br />Weren't you the one who tried to break me with goodbye?<br />Did you think I'd crumble?<br />Did you think I'd lay down and die?<br />Oh, no, not I<br />I will survive<br />Oh, as long as I know how to love I know I'll stay alive<br />I've got all my life to live<br />I've got all my love to give<br />And I'll survive<br />I will survive<br /><br />Go on now, go. <br />Walk out the door<br />Just turn around now <br />'cause you're not welcome anymore<br />Weren't you the one who tried to break me with goodbye?<br />Did you think I'd crumble?<br />Did you think I'd lay down and die?<br /><br />Oh, no, not I<br />I will survive<br />Oh, as long as I know how to love I know I'll stay alive<br />I've got all my life to live<br />I've got all my love to give<br />And I'll survive<br />I will survive<br />I will survive<p>";
  const newYear = "1978";
  const newDuration = "4:56";
  const newSong =
    "../Assets/Website Resources/Audio/Gloria Gaynor - I Will Survive-2.mp3";
  audioElement.src = newSong;
  songLyrics.innerHTML = newLyrics;
  songYear.innerHTML = newYear;
  songDuration.innerHTML = newDuration;
} else if (songTitle === "Wrist" && singer === "IMRSQD") {
  const newLyrics =
    "<p>Back and forth thinkin' 'bout tryna quit day job<br />Then I think about all the bills I have to pay off<br />Couple million streams on Spotify don't meanmuch<br />Industry givin' out cashews, can't deceive us<br />Why I gotta sell my image to build a fanbase?<br />Why is everybody so hyped up on ad space?<br />Every time I open up 'Gram, it's competition<br />Double dirty dishes, it's really about the Kingdom<br />None of this is worth my soul, not a penny<br />Rap game really a prison, my dawg, truly<br />Numbers don't lie, but they really could corrupt a clean heart<br />I spit love and free cagebirds, okay, bars<br /><br />Don't hate with me, dawg<br />A beacon of light, the rap game is full of fog<br />It's a gamе of tennis<br />I love God, no, I don't regrеt it<br /><br />It's all in the wrist, okay<br />Wrist, okay, wrist, okay<br />Wrist, okay, wrist, okay<br />Wrist, okay, wrist, okay<br />It's all in the wrist, okay<br />Wrist, okay, wrist, okay<br />Wrist, okay, wrist, okay<br /><br />Seated in glory no man could measure<br />Couldn't find peace in sex, drugs, or vain pleasure<br />Off beat, my dawg, my cadence slap like concrete<br />Blood wash away, my sin black like coffee<br />Glorify the grind, but the indie life is hellish<br />No cap flow, but Elohim takes all the credit<br />Why you say your song for people who spitvenom?<br />Pointin' to the Cross and tellin' 'em 'bout repentance<br /><br />One God under the sun, His Name is Jesus<br />Three in one, that's Gorilla Glue, cohesion<br />Sin separates since Adam, Eve, and Eden<br />God sent His Son to close, cast in and defect<br /><br />Don't hate with me, dawg<br />A beacon of light, the rap game is full of fog<br />It's a game of tennis<br />Man, I don't think you get it<br /><br />It's all in the wrist, okay<br />Wrist, okay, wrist, okay<br />Wrist, okay, wrist, okay<br />Wrist, okay, wrist, okay<br /> It's all in the wrist, okay<br />Wrist, okay, wrist, okay<br />Wrist, okay, wrist, okay<p>";
  const newYear = "2021";
  const newDuration = "2:10";
  const newSong = "../Assets/Website Resources/Audio/Wrist-2.mp3";
  audioElement.src = newSong;
  songLyrics.innerHTML = newLyrics;
  songYear.innerHTML = newYear;
  songDuration.innerHTML = newDuration;
} else if (songTitle === "The Gambler" && singer === "Kenny Rogers") {
  const newLyrics =
    "<p>On a warm summer's evening<br />On a train bound for nowhere<br />I met up with the gambler<br />We were both too tired to sleep<br />So we took turns a-starin<br />'Out the window at the darkness<br />The boredom overtook us<br />And he began to speak<br /><br />He said, Son, I've made a life<br />Out of readin' people's faces<br />Knowin' what the cards were<br />By the way they held their eyes<br />So if you don't mind my sayin<br />'I can see you're out of aces<br />For a taste of your whiskey<br />I'll give you some advice<br /><br />So I handed him my bottle<br />And he drank down my last swallow<br />Then he bummed a cigarette<br />And asked me for a light<br />And the night got deathly quiet<br />And his face lost all expression<br />Said,If you're gonna play the game, boy<br />You gotta learn to play it right<br /><br />You've got to know when to hold 'em<br />Know when to fold 'em<br />Know when to walk away<br />And know when to run<br />You never count your money<br />When you're sittin' at the table<br />There'll be time enough for countin<br />'When the dealin's done<br /><br />Every gambler knows<br />That the secret to survivin<br />'Is knowin' what to throw away<br />And knowin' what to keep<br />'Cause every hand's a winner<br />And every hand's a loser<br />And the best that you can hope for<br />Is to die in your sleep<br />And when he'd finished speakin'<br /><br />He turned back toward the window<br />Crushed out his cigarette<br />Faded off to sleep<br />And somewhere in the darkness<br />The gambler he broke even<br />But in his final words<br />I found an ace that I could keep<br /><br />You've got to know when to hold 'em<br />Know when to fold 'em<br />Know when to walk away<br />And know when to run<br />You never count your money<br />When you're sittin' at the table<br />There'll be time enough for countin<br />'When the dealin's done<br /><br />You've got to know when to hold 'em (when hold 'em)<br />Know when to fold 'em (when to fold 'em)<br />Know when to walk away<br />And know when to run<br />You never count your money<br />When you're sittin' at the table<br />There'll be time enough for countin<br />'When the dealin's done<br /><br />You've got to know when to hold 'em<br />Know when to fold 'em<br />Know when to walk away<br />And know when to run<br />You never count your money<br />When you're sittin' at the table<br /><br />There'll be time enough for countin<br />'When the dealin's done<p>";
  const newYear = "1978";
  const newDuration = "3:34";
  const newSong =
    "../Assets/Website Resources/Audio/Kenny Rogers - The Gambler-2.mp3";
  audioElement.src = newSong;
  songLyrics.innerHTML = newLyrics;
  songYear.innerHTML = newYear;
  songDuration.innerHTML = newDuration;
} else if (
  songTitle === "The Christmas Waltz" &&
  singer === "Leslie Odom Jr."
) {
  const newLyrics =
    "<p>Frosted windowpanes<br />Candles gleaming inside<br />Painted candy canes on the tree<br />Santa's on his way<br />He's filled his sleigh with things<br />Things for you and for me<br /><br />It's that time of year<br />When the world falls in love<br />Every song you hear seems to say<br />Merry Christmas<br />May your New Year dreams come true<br /><br />And this song of mine<br />In three-quarter time<br />Wishes you and yours the same thing, too<br /><br />Frosted windowpanes<br />Candles gleaming inside<br />Painted candy canes on the tree<br />Santa's on his way<br />He's filled his sleigh with lots of things<br />Things for you, things for me<br /><br />It's that time of year<br />When the world falls in love<br />Every song you hear seems to say <br />Merry Christmas<br />May your New Year dreams come true<br /><br />And this song of mine<br />In three-quarter time<br />Wishes you and yours the same thing, too<br /><br />You and yours the same thing, too<br />Have a Merry Christmas, yeah, yeah, yeah<br />New Year dreams come true<p>";
  const newYear = "2017";
  const newDuration = "3:02";
  const newSong =
    "../Assets/Website Resources/Audio/Leslie Odom, Jr. - The Christmas Waltz lyrics-2.mp3";
  audioElement.src = newSong;
  songLyrics.innerHTML = newLyrics;
  songYear.innerHTML = newYear;
  songDuration.innerHTML = newDuration;
} else if (songTitle === "Esok Kan Masih Ada" && singer === "Utha Likumahuwa") {
  const newLyrics =
    "<p>Wajahmu kupandang dengan gemas<br />Mengapa air mata s'lalu ada di pipimu?<br />Hai, Nona Manis, biarkanlah bumi berputar<br />Menurut kehendak Yang Kuasa<br /><br />Apakah artinya sebuah derita<br />Bila kau yakin itu pasti akan berlalu?<br />Hai, Nona Manis, biarkanlah bumi berputar<br />Menurut kehendak Yang Kuasa<br /><br />Tuhan pun tahu, hidup ini sangat berat<br />Tapi, takdir pun tak mungkin s'lalu sama<br />Coba, cobalah tinggalkan sejenak anganmu<br />Esok 'kan masih ada, hu-hu-uh<br />Esok 'kan masih ada<br /><br />Apakah artinya sebuah derita<br />Bila kau yakin itu pasti akan berlalu?<br />Hai, Nona Manis, biarkanlah bumi berputar<br />Menurut kehendak Yang Kuasa<br /><br />Tuhan pun tahu, hidup ini sangat berat<br />Tapi, takdir pun tak mungkin s'lalu sama<br />Coba, cobalah tinggalkan sejenak anganmu<br />Esok 'kan masih ada, hu-hu-uh<br />Esok 'kan masih ada<p>";
  const newYear = "1983";
  const newDuration = "4:08";
  const newSong = "../Assets/Website Resources/Audio/Esok Kan Masih Ada-2.mp3";
  audioElement.src = newSong;
  songLyrics.innerHTML = newLyrics;
  songYear.innerHTML = newYear;
  songDuration.innerHTML = newDuration;
} else if (songTitle === "Sunny" && singer === "Paul Carrack") {
  const newLyrics =
    "<p>Sunny, yesterday my life was filled with rain.<br />Sunny, you smiled at me and really eased the pain.<br />The dark days are gone, and the bright days ahere,<br />My sunny one shines so sincere.<br />Sunny one so true, I love you.<br /><br />Sunny, thank you for the sunshine bouquet.<br />Sunny, thank you for the love you brought my way.<br />You gave to me your all and all.<br />Now I feel ten feet tall.<br />Sunny one so true, I love you.<br /><br />Sunny<br />The dark days are gone, and the bright days are here,<br />My sunny one shines so sincere.<br />Sunny one so true, I love you.<br /><br />Sunny, thank you for the smile upon your face.<br />Sunny, thank you for the gleam that shows its grace.<br />You're my spark of natures fire,<br />You're my sweet complete desire.<br />Sunny one so true, I love you.<br /><br />Sunny, thank you for the truth you let me see.<br />Sunny, thank you for the facts from a to c.<br />My life was torn like a windblown sand,<br />And the rock was formed when you held my hand.<br />Sunny one so true, I love you.<p>";
  const newYear = "2001";
  const newDuration = "3:18";
  const newSong =
    "../Assets/Website Resources/Audio/Paul Carrack - Sunny-2.mp3";
  audioElement.src = newSong;
  songLyrics.innerHTML = newLyrics;
  songYear.innerHTML = newYear;
  songDuration.innerHTML = newDuration;
} else if (songTitle === "Only When You Leave" && singer === "Spandau Ballet") {
  const newLyrics =
    "<p>Laying in the afterglow<br />I only want to learn what you know<br />But now you're leaving<br />How many hearts must you break?<br />Well, how many calls must I make?<br /><br />But now, you're leaving<br />In this world, all that I choose has come unbearable<br />But love is in your touch<br />Ooh, it's killing me so much<br /><br />Only when you leave<br />I'll need to love you<br />And when the action has all gone<br />I'm just a little fool enough to need you<br />A fool enough too long<br />Only when you leave, you'll leave in danger<br />I'll make sure that you pay<br />So give a little passion to a stranger<br /><br />And take this soul away<br /><br />I only want to make this things last<br />So, how could this have gone so fast<br /><br />And now you're leaving<br />How many times must I learn<br />It's only when you've gone that I burn<br />And now you're leavin'<br /><br />In the end, all that is left has come unbearable<br />It's hard to change your mind<br />So, leave it all behind<br /><br />Only when you leave<br />I'll need to love you<br />And when the action has all gone<br />I'm just a little fool enough to need you<br />A fool enough too long<br /><br />Only when you leave, you'll leave in danger<br /><br />Oh, I'll make sure that you pay<br />So give a little passion to a stranger<br />And take this soul away<br /><br />Laying in the afterglow<br />I only want to learn what you know, ooh<br />But now, you're leaving<br />How many hearts must you break?<br />How many calls must I make?<br /><br />But now, you're leaving<br />In this world all that I choose has come unbearable<br />But love is in your touch<br />Ooh, it's killing me so much<br /><br />Only when you leave<br />I'll need to love you<br />And when the action has all gone<br />I'm just a little fool enough to need you<br />A fool enough too long<br /><br />Only when you leave, you'll leave in danger<br />Ooh, I'll make sure that you pay<br />So, give a little passion to a stranger<br />And take this soul away<br />No, no-no, no<br /><br />Only when you leave, you'll leave in danger<br />Ooh, I'll make sure that you pay<br />So, give a little passion to a stranger<br />And take this soul away<br /><br />I'm just a fool enough to need you<br />Fool enough too long<br />Only when you leave, you'll leave in danger<p>";
  const newYear = "1984";
  const newDuration = "4:36";
  const newSong =
    "../Assets/Website Resources/Audio/Spandau Ballet - Only When You Leave (HD Remastered)-2.mp3";
  audioElement.src = newSong;
  songLyrics.innerHTML = newLyrics;
  songYear.innerHTML = newYear;
  songDuration.innerHTML = newDuration;
} else if (
  songTitle === "From Everlasting (Psalm 90)" &&
  singer === "Sovereign Grace Music"
) {
  const newLyrics =
    "<p>O God, before the mountains were brought forth<br />Or days of spring and summer filled the earth<br />From everlasting, You are God<br /><br />We dwell beneath the stars in ancient skies<br />A thousand years are nothing in Your sight<br />From everlasting, You are God<br /><br />And all our days are held within Your hands<br />Your perfect love and favor have no end<br />We rest within the wisdom of Your plan<br />Everlasting God<br /><br />O God, when joy and tragedy collide<br />And loss reminds us life is but a sigh<br />From everlasting, You are God<br /><br />And all our days are held within Your hands<br />Your perfect love and favor have no end<br />We rest within the wisdom of Your plan<br />Everlasting God<br />We rest within Your plan<br /><br />O God of light, our ways are known to You<br />But by Your grace You're making all things new<br />So satisfy us in our numbered days<br />Establish every effort while we wait<br />From everlasting, You are God<br /><br />And all our days are held within Your hands<br />Your perfect love and favor have no end<br />We rest within the wisdom of Your plan<br />Everlasting<br /><br />And all our days are held within Your hands<br />Your perfect love and favor have no end<br />We rest within the wisdom of Your plan<br />Everlasting God<p>";
  const newYear = "2022";
  const newDuration = "4:17";
  const newSong =
    "../Assets/Website Resources/Audio/From Everlasting Lyrics (Sovereign Grace Music).mp3";
  audioElement.src = newSong;
  songLyrics.innerHTML = newLyrics;
  songYear.innerHTML = newYear;
  songDuration.innerHTML = newDuration;
} else if (songTitle === "Baby Come Back" && singer === "Player") {
  const newLyrics =
    "<p>Spending all my nights, all my money going out on the town<br />Doing anything just to get you off of my mind<br />yeah But when the morning comes, I'm right back where I started again <br />And tryna forget you is just waste oftime <br /><br />Baby come back, any kind of fool could see <br>There was something in everything about you <br />Baby come back, yeah, you can blame it all on me <br />'Cause I was wrong, and I just can't live without you<br /><br />All day long, wearing a mask of false bravado (false bravado)<br />Tryna keep up a smile that hides a tear (hides a tear)<br />But as the sun goes down, I get that empty feeling again<br />How I wish to God that you were here <br /><br />Baby come back, yeah, any kind of fool could see<br>There was something in everything about you <br />Baby come back, you can blame it all on me <br />I was wrong, and I just can't live without you, no<br /><br />Now that I put it all together, ooh <br />Give me the chance to make you see (make you see baby) <br />Have you used up all the love in your heart? (O<br />Nothing left for me? Ain't there nothing left for me?<br /><br />Baby come back, any kind of fool could see <br />There was something in everything about you <br />Baby come back, you can blame it all on me<br />'Cause I w as wrong, and I just can't live without you <br /><br />Baby I was wrong, and I just can't live <br /><br >Baby come back<p>";
  const newYear = "1977";
  const newDuration = "4:17";
  const newSong =
    "../Assets/Website Resources/Audio/Player - Player Baby Come Back (HQ)-2.mp3";
  audioElement.src = newSong;
  songLyrics.innerHTML = newLyrics;
  songYear.innerHTML = newYear;
  songDuration.innerHTML = newDuration;
} else if (songTitle === "In The Air Tonight" && singer === "Phil Collins") {
  const newLyrics =
    "<p>I can feel it coming in the air tonight, oh, lord<br />And I've been waiting for this moment, for all my life, oh, lord<br />Can you feel it coming in the air tonight, oh, lord, oh, lord<br /><br />Well, if you told me you were drowning<br />I would not lend a hand<br />I've seen your face before my friend<br />But I don't know if you know who I am<br /><br />Well, I was there and I saw what you did<br />I saw it with my own two eyes<br />So you can wipe off that grin, I know where you've been<br />It's all been a pack of lies<br /><br />And I can feel it coming in the air tonight, oh, lord<br />Well, I've been waiting for this moment for all my life, oh, lord<br />I can feel it coming in the air tonight, oh, lord<br />Well, I've been waiting for this moment for all my life, oh, lord, oh, lord<br /><br />Well, I remember, I remember don't worry<br />How could I ever forget?<br />It's the first time, the last time we ever met<br />But I know the reason why you keep this silence up<br />No, you don't fool me<br />The hurt doesn't show, but the pain still grows<br />It's no stranger to you and me<br /><br />And I can feel it coming in the air tonight, oh, lord<br />Well, I've been waiting for this moment for all my life, oh, lord<br />I can feel it in the air tonight, oh, lord, oh, lord<br />Well, I've been waiting for this moment for all my life, oh, lord<br />I can feel it coming in the air tonight, oh, lord<br />And I've been waiting for this moment for all my life, oh, lord<br />I can feel it in the air tonight, oh, lord, olord, oh, lord<br />Well, I've been waiting for this moment for all my life, oh, lord, oh, lord<br />I can feel it in the air tonight, oh, lord, olord, oh, lord, oh, lord<br />Well, I've been waiting for this moment all my life, oh, lord, oh, lord<p>";
  const newYear = "1981";
  const newDuration = "5:36";
  const newSong =
    "../Assets/Website Resources/Audio/Phil Collins - In The Air Tonight [Audio HQ] HD-2.mp3";
  audioElement.src = newSong;
  songLyrics.innerHTML = newLyrics;
  songYear.innerHTML = newYear;
  songDuration.innerHTML = newDuration;
} else if (songTitle === "Tip Toe" && singer === "HYBS") {
  const newLyrics =
    "<p>Take me back to the ground<br />'Cause girl, you look fine as hell (fine as hell)<br />I'm not easily distracted<br />But you're acting like a magnet<br />You pull me in<br /><br />I'll be puttin' on a suit<br />Be tip toeing to you<br />If you're down for it<br />We got nothing else to do<br />And nothing else to lose<br />And I'm down for this<br /><br />If you're in the mood<br />We can take it to the moon<br />Just like a movie scene<br />Table for two<br /><br />No need to be fed<br />I want you instead<br />If you're in the mood<br />We can tip toe to the moon<br /><br />Hold up, yeah<br />Tell my friends to pinch me hard<br />'Cause it couldn't be real (this can't be real)<br />Is this a dream I'm living<br />Lord help me, please<br />'Cause I can't get over you<br /><br />I'll be putting on a suit<br />Be tip toeing to you<br />If you're down for it<br />We got nothing else to do<br />And nothing else to lose<br />And I'm down for this<br />Are you down for this?<br /><br />If you're in the mood<br />We can take it to the moon<br />Just like a movie scene<br />Table for two<br /><br />No need to be fed<br />I want you instead<br />If you're in the mood<br />We can tip toe to the moon<br /><br />If you're in the mood<br />We can take it to the moon (take it to the moon)Just like a movie scene<br />Table for two (table for two)<br /><br />No need to be fed<br />I want you instead (tip toe to the moon)<br />If you're in the mood<br />We can tip toe to the moon<br /><br />Tip toe, tip toe, tip toe, tip toe, tip toe, tip toe <br/>Tip toe, tip toe, tip toe, tip toe, tip toe, tip toe<br />Tip toe, tip toe, tip toe, tip toe, tip toe, tip toe<br />Tip toe, tip toe, tip toe, tip toe, tip toe, tip toe<br />Tip toe, tip toe, tip toe, tip toe, tip toe, tip toe<p>";
  const newYear = "2023";
  const newDuration = "3:44";
  const newSong =
    "../Assets/Website Resources/Audio/HYBS - Tip Toe Official Audio.mp3";
  audioElement.src = newSong;
  songLyrics.innerHTML = newLyrics;
  songYear.innerHTML = newYear;
  songDuration.innerHTML = newDuration;
}

// --------------------
// CUSTOM SONG SLIDERS
// --------------------

const playerContainer = document.querySelector(".audio-player");

const slider = document.querySelector(".slider");
slider.min = 0;
slider.defaultValue = 0;
slider.max = audioElement.duration; // Set max to audio duration
playerContainer.appendChild(slider);

// Update slider position during playback
audioElement.addEventListener("timeupdate", function () {
  slider.value = this.currentTime;
});

// Update audio time when slider is changed
slider.addEventListener("input", function () {
  audioElement.currentTime = this.value;
});

const playButton = document.getElementById("playButton");
const loopButton = document.getElementById("loopButton");

playButton.addEventListener("click", function () {
  if (audioElement.paused) {
    audioElement.play();
    playButton.src = "../Assets/Website Resources/Icons /pause.png";
  } else {
    audioElement.pause();
    playButton.src = "../Assets/Website Resources/Icons /play-button.png";
  }
});

loopButton.addEventListener("click", function () {
  audioElement.loop = !audioElement.loop;

  if (audioElement.loop) {
    loopButton.src = "../Assets/Website Resources/Icons /loop.png";
    const intervalId = setInterval(checkAudioLoop, 100);
  } else {
    loopButton.src = "../Assets/Website Resources/Icons /loop-2.png";

    clearInterval(intervalId);
  }
});

function checkAudioLoop() {
  if (
    audioElement.paused &&
    audioElement.currentTime >= audioElement.duration
  ) {
    audioElement.currentTime = 0;
    audioElement.play();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === " " && audioElement.paused) {
    audioElement.play();
    playButton.src = "../Assets/Website Resources/Icons /pause.png";
  } else if (e.key === " " && !audioElement.paused) {
    audioElement.pause();
    playButton.src = "../Assets/Website Resources/Icons /play-button.png";
  }
});
